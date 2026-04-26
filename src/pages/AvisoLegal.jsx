import { useEffect } from "react";
import AnimatedSection from "../components/AnimatedSection";

function Section({ title, children }) {
  return (
    <section className="mb-12">
      <h2 className="font-heading text-3xl font-light text-foreground mb-4">
        {title}
      </h2>
      <div className="w-16 h-px bg-primary/40 mb-6" />
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function AvisoLegal() {
  useEffect(() => {
    document.title = "Aviso legal | Lola Montes";
  }, []);

  return (
    <div className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <AnimatedSection>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-foreground mb-6">
            Aviso legal
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de
            la sociedad de la información y de comercio electrónico, se informa
            a las personas usuarias de los datos identificativos del titular de
            este sitio web.
          </p>
        </AnimatedSection>

        <div className="mt-16">
          <AnimatedSection delay={0.05}>
            <Section title="Datos identificativos">
              <p>
                <strong>Titular:</strong> Lola Montes
              </p>
              <p>
                <strong>Actividad:</strong> Acompañamiento terapéutico y
                evolución consciente
              </p>
              <p>
                <strong>Dirección de contacto:</strong> Rambla Nova, 42, Mollet
                del Vallès 08100
              </p>
              <p>
                <strong>Correo electrónico:</strong>{" "}
                lolaautoconocimiento@gmail.com
              </p>
              <p>
                <strong>Teléfono:</strong> +34 625 183 735
              </p>
              <p>
                <strong>NIF/CIF:</strong> Pendiente de completar por la titular
                antes de publicar la versión definitiva
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Section title="Objeto">
              <p>
                El presente sitio web tiene por objeto ofrecer información
                sobre los servicios de acompañamiento terapéutico, talleres y
                espacios de transformación ofrecidos por su titular.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <Section title="Condiciones de uso">
              <p>
                La navegación por este sitio web atribuye la condición de
                persona usuaria e implica la aceptación plena y sin reservas de
                las presentes condiciones de uso.
              </p>
              <p>
                La persona usuaria se compromete a hacer un uso adecuado de los
                contenidos del sitio web y a no emplearlos para realizar
                actividades ilícitas, contrarias a la buena fe o al orden
                público.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Section title="Propiedad intelectual e industrial">
              <p>
                Todos los contenidos de este sitio web, incluidos textos,
                imágenes, diseño, logotipos, estructura y elementos gráficos,
                están protegidos por la normativa vigente en materia de
                propiedad intelectual e industrial y pertenecen a su titular o a
                terceros que han autorizado su uso.
              </p>
              <p>
                Queda prohibida su reproducción, distribución, transformación o
                comunicación pública sin autorización expresa de la titular.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <Section title="Responsabilidad">
              <p>
                La titular no se hace responsable del mal uso que se realice de
                los contenidos del sitio web ni de los daños que pudieran
                derivarse del acceso, uso o imposibilidad de uso del mismo, sin
                perjuicio de lo que establezca la normativa aplicable.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <Section title="Legislación aplicable">
              <p>
                La relación entre la titular del sitio web y las personas
                usuarias se regirá por la normativa española vigente. Para la
                resolución de cualquier controversia que pudiera surgir, las
                partes se someterán a los juzgados y tribunales que resulten
                competentes conforme a derecho.
              </p>
            </Section>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
