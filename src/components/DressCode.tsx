import { motion } from "framer-motion";
import dressCodeImg from "@/assets/dresscode-illustration.png";

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
          Attire
        </p>
        <h2 className="font-display text-crimson text-3xl italic mb-6">
          Dress Code
        </h2>

        <div className="flex justify-center mb-6">
          <img
            src={dressCodeImg}
            alt="Formal attire illustration"
            loading="lazy"
            width={300}
            height={400}
            className="w-48 h-auto opacity-80"
          />
        </div>

        <div className="space-y-4 max-w-xs mx-auto">
          <div className="border-t border-crimson/10 pt-4">
            <h3 className="font-display text-foreground text-lg italic">Black Tie</h3>
            <p className="font-body text-muted-foreground text-sm mt-1 leading-relaxed">
              Floor-length gowns & tuxedos.
              <br />
              Dark, jewel-toned palettes preferred.
            </p>
          </div>

          <div className="border-t border-crimson/10 pt-4">
            <h3 className="font-display text-foreground text-lg italic">Color Notes</h3>
            <div className="flex justify-center gap-3 mt-3">
              {[
                { color: "hsl(348, 80%, 28%)", label: "Crimson" },
                { color: "hsl(210, 20%, 12%)", label: "Midnight" },
                { color: "hsl(43, 72%, 55%)", label: "Gold" },
                { color: "hsl(150, 20%, 30%)", label: "Forest" },
              ].map((c) => (
                <div key={c.label} className="flex flex-col items-center gap-1">
                  <div
                    className="w-8 h-8 rounded-full border border-border"
                    style={{ backgroundColor: c.color }}
                  />
                  <span className="font-body text-muted-foreground text-[9px] tracking-wider uppercase">
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DressCode;
