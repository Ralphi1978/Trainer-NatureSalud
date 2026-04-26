import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    text: "He sentido un cambio profundo en mi forma de vivir y entender lo que me ocurre. Me llevo herramientas reales para mi día a día.",
    author: "Participante · Curso terapéutico",
  },
  {
    text: "Un espacio muy cuidado, profundo y cercano. Me he sentido acompañada en todo momento.",
    author: "Participante · Proceso grupal",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % testimonials.length),
    []
  );
  const prev = useCallback(
    () =>
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length),
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
            {testimonial.author}
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
