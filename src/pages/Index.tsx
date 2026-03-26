import { useState } from "react";
import { motion } from "framer-motion";
import CoverReveal from "@/components/CoverReveal";
import ScratchOff from "@/components/ScratchOff";
import Countdown from "@/components/Countdown";
import VenueSection from "@/components/VenueSection";
import DressCode from "@/components/DressCode";
import floralBorder from "@/assets/floral-border.png";

const Index = () => {
  const [coverDismissed, setCoverDismissed] = useState(false);

  return (
    <div className="min-h-screen bg-warm-white">
      <CoverReveal onReveal={() => setCoverDismissed(true)} />

      {coverDismissed && (
        <div className="max-w-md mx-auto pb-20">
          {/* Header */}
          <motion.section
            className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="font-body text-muted-foreground text-xs tracking-[0.3em] uppercase mb-8">
              Together with their families
            </p>
            <h1 className="font-display text-crimson text-5xl md:text-6xl italic leading-tight">
              Alessandra
            </h1>
            <p className="font-display text-gold text-2xl my-2 italic">&</p>
            <h1 className="font-display text-crimson text-5xl md:text-6xl italic leading-tight">
              Marco
            </h1>
            <p className="font-body text-muted-foreground text-xs tracking-[0.2em] uppercase mt-8">
              Request the pleasure of your company
            </p>

            <motion.div
              className="mt-12"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <svg width="20" height="30" viewBox="0 0 20 30" className="text-crimson/40">
                <path
                  d="M10 0 L10 24 M4 18 L10 24 L16 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </motion.div>
          </motion.section>

          {/* Scratch-Off Reveal */}
          <motion.section
            className="py-16 px-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <p className="font-body text-muted-foreground text-xs tracking-[0.3em] uppercase mb-2">
                Save the Date
              </p>
              <h2 className="font-display text-crimson text-3xl italic">Reveal</h2>
              <p className="font-body text-muted-foreground text-xs mt-2">
                Scratch to uncover the date
              </p>
            </div>

            <div className="flex justify-center gap-6">
              <ScratchOff label="Day" revealText="10" size={90} />
              <ScratchOff label="Month" revealText="Sept" size={90} />
              <ScratchOff label="Year" revealText="2027" size={90} />
            </div>
          </motion.section>

          {/* Countdown */}
          <motion.section
            className="py-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Countdown />
          </motion.section>

          {/* Venue */}
          <section className="py-12">
            <VenueSection />
          </section>

          {/* Dress Code */}
          <section className="py-12">
            <DressCode />
          </section>

          {/* Footer */}
          <motion.footer
            className="py-16 text-center px-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={floralBorder}
              alt=""
              className="w-32 mx-auto mb-6 opacity-50"
              loading="lazy"
              width={400}
              height={170}
            />
            <p className="font-display text-crimson text-2xl italic mb-2">
              We can't wait to celebrate with you
            </p>
            <p className="font-body text-muted-foreground text-xs tracking-[0.2em] uppercase">
              A & M — September 2027
            </p>
          </motion.footer>
        </div>
      )}
    </div>
  );
};

export default Index;
