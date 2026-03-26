import { motion } from "framer-motion";

const DressCode = () => {
  return (
    <div className="px-6 sm:px-8 py-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="font-body text-muted-foreground text-sm tracking-[0.28em] uppercase mb-3">
          What to Wear
        </p>
        <h2 className="font-display text-4xl sm:text-[2.75rem] italic mb-10" style={{ color: "hsl(340, 65%, 47%)" }}>
          Dress Code
        </h2>

        <div className="space-y-8 max-w-md mx-auto">
          <motion.div
            className="p-8 sm:p-9 rounded-xl"
            style={{ backgroundColor: "hsl(340, 30%, 95%)" }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl sm:text-5xl mb-4">👗</div>
            <h3 className="font-display text-foreground text-xl sm:text-2xl italic">For Women</h3>
            <p className="font-body text-muted-foreground text-base sm:text-lg mt-2 leading-relaxed">
              Western Gown / Frock
            </p>
          </motion.div>

          <motion.div
            className="p-8 sm:p-9 rounded-xl"
            style={{ backgroundColor: "hsl(340, 30%, 95%)" }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl sm:text-5xl mb-4">👔</div>
            <h3 className="font-display text-foreground text-xl sm:text-2xl italic">For Men</h3>
            <p className="font-body text-muted-foreground text-base sm:text-lg mt-2 leading-relaxed">
              Fancy Shirt
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default DressCode;
