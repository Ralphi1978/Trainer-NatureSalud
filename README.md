# NaturaySalut Landing

## Desarrollo local

1. Instala dependencias con `npm install`.
2. Crea un `.env.local` a partir de `.env.example`.
3. Para revisar la web visualmente, usa `npm run dev`.
4. Para probar también el envío real del formulario con la función `/api/contact`, usa `vercel dev`.

## Variables de entorno del formulario

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=lolacoldwater@hotmail.com
CONTACT_FROM_EMAIL=NaturaySalut <onboarding@resend.dev>
CONTACT_SUBJECT_PREFIX=Formulario web NaturaySalut
```

Notas:
- `CONTACT_FROM_EMAIL` puede usar `onboarding@resend.dev` mientras el dominio no esté verificado en Resend.
- Cuando el dominio esté verificado, conviene cambiarlo por algo como `NaturaySalut <hola@tudominio.com>`.
- En Vercel hay que añadir estas variables en Project Settings > Environment Variables.

## Despliegue

El proyecto está preparado para desplegarse en Vercel con rutas SPA mediante [vercel.json](./vercel.json) y una función serverless en [api/contact.js](./api/contact.js).
