import { motion } from 'framer-motion';

export default function PageHero({ image, title, subtitle }) {
  return (
    <div className="relative h-[50vh] lg:h-[60vh] overflow-hidden flex items-center">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-white"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-lg text-white/80 font-body max-w-xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}