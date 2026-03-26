import { motion } from "framer-motion";

const FloatingPetals = () => {
  const petals = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: 6 + Math.random() * 12,
    delay: Math.random() * 8,
    duration: 8 + Math.random() * 12,
    opacity: 0.06 + Math.random() * 0.1,
    rotate: Math.random() * 360,
    xDrift: (Math.random() - 0.5) * 80,
  }));

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 1.3,
            backgroundColor: `hsl(340, 55%, 70%)`,
            opacity: p.opacity,
            borderRadius: "50% 50% 50% 0%",
            top: -20,
          }}
          animate={{
            y: ["0vh", "105vh"],
            x: [0, p.xDrift, 0],
            rotate: [p.rotate, p.rotate + 180, p.rotate + 360],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;
