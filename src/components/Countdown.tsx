import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2027-09-10T16:00:00");

const Countdown = () => {
  const [time, setTime] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = WEDDING_DATE.getTime() - Date.now();
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
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="border-2 border-crimson/20 rounded-sm p-8 mx-4">
      <p className="font-body text-center text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">
        Counting down to forever
      </p>
      <div className="grid grid-cols-4 gap-2">
        {units.map((unit, i) => (
          <motion.div
            key={unit.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="font-display text-crimson text-3xl md:text-4xl tabular-nums">
              {String(unit.value).padStart(2, "0")}
            </div>
            <div className="font-body text-muted-foreground text-[10px] tracking-[0.2em] uppercase mt-1">
              {unit.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
