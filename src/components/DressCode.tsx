import { motion } from "framer-motion";

const DressCode = () => {
  return (
    <div className="px-6 py-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="font-body text-muted-foreground text-xs tracking-[0.3em] uppercase mb-2">
          What to Wear
        </p>
        <h2 className="font-display text-3xl italic mb-8" style={{ color: "hsl(340, 65%, 47%)" }}>
          Dress Code
        </h2>

        <div className="space-y-6 max-w-xs mx-auto">
          <motion.div
            className="p-6 rounded-lg"
            style={{ backgroundColor: "hsl(340, 30%, 95%)" }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl mb-3">👗</div>
            <h3 className="font-display text-foreground text-lg italic">For Women</h3>
            <p className="font-body text-muted-foreground text-sm mt-1 leading-relaxed">
              Western Gown / Frock
            </p>
          </motion.div>

          <motion.div
            className="p-6 rounded-lg"
            style={{ backgroundColor: "hsl(340, 30%, 95%)" }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl mb-3">👔</div>
            <h3 className="font-display text-foreground text-lg italic">For Men</h3>
            <p className="font-body text-muted-foreground text-sm mt-1 leading-relaxed">
              Fancy Shirt
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default DressCode;
