import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const EVENT_DATE = new Date("2026-03-28T19:00:00");

const Countdown = () => {
  const [time, setTime] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = EVENT_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Min", value: time.minutes },
    { label: "Sec", value: time.seconds },
  ];

  return (
    <div className="border-2 rounded-md p-10 sm:p-12 mx-4 sm:mx-6" style={{ borderColor: "hsl(340, 65%, 47%, 0.22)" }}>
      <p className="font-body text-center text-muted-foreground text-sm tracking-[0.28em] uppercase mb-8">
        Counting down to the celebration
      </p>
      <div className="grid grid-cols-4 gap-3 sm:gap-4">
        {units.map((unit, i) => (
          <motion.div
            key={unit.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div
              className="font-display tabular-nums leading-none"
              style={{ color: "hsl(340, 65%, 47%)", fontSize: "clamp(2.25rem, 9vw, 3.25rem)" }}
            >
              {String(unit.value).padStart(2, "0")}
            </div>
            <div className="font-body text-muted-foreground text-xs tracking-[0.22em] uppercase mt-2">
              {unit.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
