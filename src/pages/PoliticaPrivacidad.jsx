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

export default function PoliticaPrivacidad() {
  useEffect(() => {
    document.title = "Política de privacidad | Lola Montes";
  }, []);

  return (
    <div className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <AnimatedSection>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-foreground mb-6">
            Política de privacidad
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Esta política de privacidad informa sobre el tratamiento de los
            datos personales que pudieran recabarse a través de este sitio web,
            en cumplimiento del Reglamento (UE) 2016/679 y de la Ley Orgánica
            3/2018.
          </p>
        </AnimatedSection>

        <div className="mt-16">
          <AnimatedSection delay={0.05}>
            <Section title="Responsable del tratamiento">
              <p>
                <strong>Responsable:</strong> Lola Montes
              </p>
              <p>
                <strong>Correo electrónico:</strong>{" "}
                lolaautoconocimiento@gmail.com
              </p>
              <p>
                <strong>Teléfono:</strong> +34 625 183 735
              </p>
              <p>
                <strong>Dirección de contacto:</strong> Rambla Nova, 42, Mollet
                del Vallès 08100
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Section title="Finalidad del tratamiento">
              <p>
                Los datos personales que la persona usuaria facilite de manera
                voluntaria podrán ser tratados con la finalidad de atender
                consultas, responder a solicitudes de información y gestionar el
                contacto profesional derivado de los servicios ofrecidos en esta
                web.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <Section title="Base jurídica">
              <p>
                La base jurídica para el tratamiento de los datos será el
                consentimiento de la persona interesada al ponerse en contacto
                con la titular, así como la aplicación de medidas precontractuales
                cuando la solicitud esté vinculada a servicios concretos.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Section title="Conservación de los datos">
              <p>
                Los datos se conservarán durante el tiempo necesario para atender
                la consulta o relación establecida y, en su caso, durante los
                plazos legalmente exigibles.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <Section title="Destinatarios">
              <p>
                Con carácter general, no se cederán datos a terceros salvo
                obligación legal o cuando resulte necesario para la prestación
                de servicios tecnológicos vinculados al funcionamiento de la web
                o del correo electrónico, actuando dichos proveedores como
                encargados del tratamiento.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <Section title="Derechos de las personas interesadas">
              <p>
                La persona interesada puede ejercer sus derechos de acceso,
                rectificación, supresión, oposición, limitación del tratamiento
                y portabilidad dirigiéndose al correo electrónico
                lolaautoconocimiento@gmail.com.
              </p>
              <p>
                Asimismo, si considera que sus derechos no han sido atendidos
                correctamente, puede presentar una reclamación ante la Agencia
                Española de Protección de Datos.
              </p>
            </Section>
          </AnimatedSection>

          <AnimatedSection delay={0.35}>
            <Section title="Datos solicitados">
              <p>
                Los datos solicitados a través de los canales de contacto deberán
                ser adecuados, pertinentes y limitados a lo necesario para poder
                atender la solicitud realizada.
              </p>
            </Section>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
