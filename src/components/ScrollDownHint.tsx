import { motion } from "framer-motion";

/** Thick chevron so guests know there is more content below. */
const ScrollDownHint = ({ className = "" }: { className?: string }) => (
  <motion.div
    className={`flex flex-col items-center justify-center ${className}`}
    aria-hidden="true"
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
  >
    <svg
      width="36"
      height="52"
      viewBox="0 0 24 44"
      fill="none"
      style={{ color: "hsl(340, 65%, 47%)" }}
      className="opacity-80 sm:opacity-90 drop-shadow-sm"
    >
      <path
        d="M12 5v28M5.5 26.5 12 36l6.5-9.5"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="sr-only">More below — scroll down</span>
  </motion.div>
);

export default ScrollDownHint;
