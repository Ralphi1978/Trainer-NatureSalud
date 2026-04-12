import { useState } from "react";
import { toast } from "sonner";
import ContactInfo from "../components/ContactInfo";
import AnimatedSection from "../components/AnimatedSection";
import PageHero from "../components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const heroImg =
  "https://media.base44.com/images/public/69db7022e4e754e07627ce72/4e0a0be96_generated_f9cd2e22.png";

export default function Contacto() {
  const [startedAt] = useState(() => Date.now());
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    website: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          startedAt,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data?.message ||
            "No se pudo enviar el mensaje. Inténtalo de nuevo en unos minutos."
        );
      }

      toast.success("Mensaje enviado correctamente. Gracias por escribir.");
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        website: "",
      });
    } catch (error) {
      const fallbackMessage =
        import.meta.env.DEV && error.message?.includes("Failed to fetch")
          ? "Para probar el envío real en local, ejecuta esta web con `vercel dev` o despliega una preview en Vercel."
          : error.message ||
            "No se pudo enviar el mensaje. Inténtalo de nuevo en unos minutos.";

      toast.error(fallbackMessage);
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      <PageHero image={heroImg} title="¿Te acompaño?" />

      <section className="py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <h2 className="font-heading text-2xl md:text-3xl font-light text-foreground mb-4">
              ¡Hola!
            </h2>
            <div className="w-16 h-px bg-primary/40 mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-12">
              Mejora la gestión de tu propia vida, adquiere mayor conciencia
              sobre ti y responsabilízate de aquello que haces, piensas o
              sientes. La consulta se encuentra en Barcelona y también ofrezco
              terapias online. ¡Será un auténtico placer conocerte y
              acompañarte!
            </p>
          </AnimatedSection>
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <AnimatedSection className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-xs tracking-widest uppercase text-muted-foreground"
                    >
                      Nombre *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="bg-card border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-xs tracking-widest uppercase text-muted-foreground"
                    >
                      Correo electrónico *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="bg-card border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-xs tracking-widest uppercase text-muted-foreground"
                    >
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="bg-card border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-xs tracking-widest uppercase text-muted-foreground"
                    >
                      Asunto
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="bg-card border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-xs tracking-widest uppercase text-muted-foreground"
                  >
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="bg-card border-border focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={sending}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-sm tracking-wide font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  {sending ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-2" delay={0.1}>
              <ContactInfo />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
