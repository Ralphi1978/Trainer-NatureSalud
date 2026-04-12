import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    text: "El trabajo que hice con Silvia me ayudó muchísimo no solo en el momento en el que lo hice, sino también después, a través de las herramientas que aprendí a usar gracias a ella. Es una gran profesional y una persona muy empática y cercana.",
    author: "Cristina B.",
  },
  {
    text: "Silvia me ha hecho sentir cómoda desde el minuto uno: tiene una gran capacidad de escucha, es muy cercana, empática y, a la vez, muy profesional. Me está ayudando a aceptar mis emociones y a gestionarlas.",
    author: "Isabel O.",
  },
  {
    text: "Acudí a Silvia en un momento de oscuridad y confusión; con su ayuda pude encontrar el origen de muchos miedos y tristezas y me llevó de la mano en el camino de autoconocerme y de amor propio.",
    author: "Melina S.",
  },
  {
    text: "Silvia me ayudó mucho cuando la ansiedad ocupaba cada espacio de mi vida. A través de la terapia que realicé con ella vi cómo la ansiedad dejó de ser la protagonista de mis días.",
    author: "Maria E.",
  },
  {
    text: "Es un gran aprendizaje compartir un viaje de introspección con Silvia tanto por su cercanía como por su experiencia. Fue un placer iniciar ese largo viaje de su mano.",
    author: "Edu R.",
  },
  {
    text: "Contacté con Silvia en un periodo de mucha inestabilidad en mi vida. Con ella entendí la importancia de hacerse las preguntas correctas y de aceptar y escuchar las emociones sin juzgarme.",
    author: "Mizar D.",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % testimonials.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const testimonial = testimonials[current];

  return (
    <AnimatedSection className="max-w-3xl mx-auto text-center">
      <Quote className="w-10 h-10 text-primary/30 mx-auto mb-8" />
      <div className="min-h-[180px] flex items-center justify-center">
        <div key={current} className="animate-breathe-in">
          <p className="font-heading text-xl md:text-2xl font-light leading-relaxed text-foreground/80 italic">
            "{testimonial.text}"
          </p>
          <p className="mt-6 text-sm tracking-widest uppercase text-muted-foreground">
            - {testimonial.author}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="p-2 rounded-full border border-border hover:border-primary transition-colors"
          aria-label="Testimonio anterior"
        >
          <ChevronLeft className="w-4 h-4 text-muted-foreground" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-6" : "bg-border"
              }`}
              aria-label={`Ir al testimonio ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="p-2 rounded-full border border-border hover:border-primary transition-colors"
          aria-label="Siguiente testimonio"
        >
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </AnimatedSection>
  );
}
