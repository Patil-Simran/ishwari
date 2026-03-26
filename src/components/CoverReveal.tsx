import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CoverReveal = ({ onReveal }: { onReveal: () => void }) => {
  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
    setTimeout(onReveal, 1200);
  };

  // Generate wavy line paths
  const waveLines = Array.from({ length: 12 }, (_, i) => i);

  return (
    <AnimatePresence>
      {!revealed ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-crimson cursor-pointer overflow-hidden"
          onClick={handleReveal}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {/* Wavy lines that split apart */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            {waveLines.map((i) => {
              const y = (i + 1) * (100 / (waveLines.length + 1));
              const direction = i % 2 === 0 ? -1 : 1;
              return (
                <motion.path
                  key={i}
                  d={`M 0 ${y} Q 25 ${y - 3} 50 ${y} Q 75 ${y + 3} 100 ${y}`}
                  stroke="hsla(0, 0%, 100%, 0.25)"
                  strokeWidth="0.5"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  animate={
                    revealed
                      ? { translateX: `${direction * 120}%`, opacity: 0 }
                      : {}
                  }
                  transition={{ duration: 0.8, ease: "easeInOut", delay: i * 0.04 }}
                />
              );
            })}
          </svg>

          {/* Center content */}
          <motion.div
            className="relative z-10 text-center px-8"
            animate={revealed ? { scale: 1.1, opacity: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="font-body text-primary-foreground/70 text-sm tracking-[0.3em] uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              You are invited
            </motion.p>
            <motion.h1
              className="font-display text-primary-foreground text-5xl md:text-7xl italic leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Alessandra
            </motion.h1>
            <motion.p
              className="font-display text-primary-foreground/60 text-2xl my-3 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              &
            </motion.p>
            <motion.h1
              className="font-display text-primary-foreground text-5xl md:text-7xl italic leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              Marco
            </motion.h1>
            <motion.p
              className="font-body text-primary-foreground/50 text-xs tracking-[0.2em] uppercase mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Tap to reveal
            </motion.p>
          </motion.div>

          {/* Decorative corner elements */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-primary-foreground/20" />
          <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-primary-foreground/20" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-primary-foreground/20" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-primary-foreground/20" />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default CoverReveal;
