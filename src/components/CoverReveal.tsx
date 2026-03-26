import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CoverReveal = ({ onReveal }: { onReveal: () => void }) => {
  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
    setTimeout(onReveal, 1200);
  };

  const petals = Array.from({ length: 18 }, (_, i) => i);

  return (
    <AnimatePresence>
      {!revealed ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer overflow-hidden"
          style={{ backgroundColor: "hsl(340, 65%, 47%)" }}
          onClick={handleReveal}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {/* Floating petal particles */}
          {petals.map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 6 + Math.random() * 8,
                height: 6 + Math.random() * 8,
                backgroundColor: `hsla(340, 60%, ${70 + Math.random() * 20}%, ${0.15 + Math.random() * 0.2})`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={
                revealed
                  ? { y: -200, opacity: 0, scale: 0 }
                  : {
                      y: [0, -15, 0],
                      x: [0, (Math.random() - 0.5) * 20, 0],
                    }
              }
              transition={
                revealed
                  ? { duration: 0.6, delay: i * 0.03 }
                  : { duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }
              }
            />
          ))}

          {/* Wavy decorative lines */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            {Array.from({ length: 8 }, (_, i) => {
              const y = (i + 1) * (100 / 9);
              const dir = i % 2 === 0 ? -1 : 1;
              return (
                <motion.path
                  key={i}
                  d={`M 0 ${y} Q 25 ${y - 2} 50 ${y} Q 75 ${y + 2} 100 ${y}`}
                  stroke="hsla(0, 0%, 100%, 0.12)"
                  strokeWidth="0.5"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  animate={revealed ? { translateX: `${dir * 120}%`, opacity: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: i * 0.04 }}
                />
              );
            })}
          </svg>

          <motion.div
            className="relative z-10 text-center px-8"
            animate={revealed ? { scale: 1.1, opacity: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="font-body text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: "hsla(0, 0%, 100%, 0.7)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              You're Invited
            </motion.p>
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <span className="text-4xl">💍</span>
            </motion.div>
            <motion.h1
              className="font-display text-5xl md:text-6xl italic leading-tight"
              style={{ color: "white" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Bride to Be
            </motion.h1>
            <motion.p
              className="font-body text-xs tracking-[0.2em] uppercase mt-8"
              style={{ color: "hsla(0, 0%, 100%, 0.5)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Tap to open
            </motion.p>
          </motion.div>

          {/* Corner accents */}
          <div className="absolute top-8 left-8 w-14 h-14 border-t border-l" style={{ borderColor: "hsla(0,0%,100%,0.2)" }} />
          <div className="absolute top-8 right-8 w-14 h-14 border-t border-r" style={{ borderColor: "hsla(0,0%,100%,0.2)" }} />
          <div className="absolute bottom-8 left-8 w-14 h-14 border-b border-l" style={{ borderColor: "hsla(0,0%,100%,0.2)" }} />
          <div className="absolute bottom-8 right-8 w-14 h-14 border-b border-r" style={{ borderColor: "hsla(0,0%,100%,0.2)" }} />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default CoverReveal;
