const MAX_FIELD_LENGTH = 2000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_FORM_FILL_TIME_MS = 3000;

function sanitize(value, maxLength = MAX_FIELD_LENGTH) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function readJsonBody(req) {
  if (req.body && typeof req.body === "object") {
    return req.body;
  }

  const chunks = [];

  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const rawBody = Buffer.concat(chunks).toString("utf8");
  return rawBody ? JSON.parse(rawBody) : {};
}

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { message: "Método no permitido." });
  }

  try {
    const {
      RESEND_API_KEY,
      CONTACT_TO_EMAIL,
      CONTACT_FROM_EMAIL,
      CONTACT_SUBJECT_PREFIX = "Formulario web",
    } = process.env;

    if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
      return sendJson(res, 500, {
        message:
          "Faltan variables de entorno del formulario. Revisa RESEND_API_KEY, CONTACT_TO_EMAIL y CONTACT_FROM_EMAIL.",
      });
    }

    const body = await readJsonBody(req);

    if (body.website) {
      return sendJson(res, 200, { ok: true });
    }

    const name = sanitize(body.name, 120);
    const email = sanitize(body.email, 160);
    const phone = sanitize(body.phone, 80);
    const subject = sanitize(body.subject, 160);
    const message = sanitize(body.message, 4000);
    const startedAt = Number(body.startedAt);

    if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FORM_FILL_TIME_MS) {
      return sendJson(res, 400, {
        message: "No se ha podido validar el envío del formulario.",
      });
    }

    if (!name || !email || !message) {
      return sendJson(res, 400, {
        message: "Nombre, correo electrónico y mensaje son obligatorios.",
      });
    }

    if (!EMAIL_REGEX.test(email)) {
      return sendJson(res, 400, {
        message: "El correo electrónico no tiene un formato válido.",
      });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "No indicado");
    const safeSubject = escapeHtml(subject || "Sin asunto");
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        subject: `${CONTACT_SUBJECT_PREFIX}: ${subject || "Nuevo mensaje"}`,
        reply_to: email,
        html: `
          <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.6;">
            <h2 style="margin-bottom: 24px;">Nuevo mensaje desde el formulario web</h2>
            <p><strong>Nombre:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Teléfono:</strong> ${safePhone}</p>
            <p><strong>Asunto:</strong> ${safeSubject}</p>
            <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
            <p><strong>Mensaje:</strong></p>
            <p>${safeMessage}</p>
          </div>
        `,
        text: [
          "Nuevo mensaje desde el formulario web",
          "",
          `Nombre: ${name}`,
          `Email: ${email}`,
          `Teléfono: ${phone || "No indicado"}`,
          `Asunto: ${subject || "Sin asunto"}`,
          "",
          "Mensaje:",
          message,
        ].join("\n"),
      }),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.json().catch(() => ({}));

      return sendJson(res, 502, {
        message:
          resendError?.message ||
          "El servicio de correo ha rechazado el envío del formulario.",
      });
    }

    return sendJson(res, 200, { ok: true });
  } catch (error) {
    return sendJson(res, 500, {
      message:
        error instanceof SyntaxError
          ? "El formulario contiene datos no válidos."
          : "Ha ocurrido un error inesperado al enviar el formulario.",
    });
  }
}
