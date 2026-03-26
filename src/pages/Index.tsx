import { useState } from "react";
import { motion } from "framer-motion";
import CoverReveal from "@/components/CoverReveal";
import ScratchOff from "@/components/ScratchOff";
import Countdown from "@/components/Countdown";
import VenueSection from "@/components/VenueSection";
import DressCode from "@/components/DressCode";
import floralBorder from "@/assets/floral-border.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const Index = () => {
  const [coverDismissed, setCoverDismissed] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Alessandra & Marco — Wedding",
      text: "You're invited to our wedding! 💍",
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
      }
    } catch {
      // user cancelled
    }
  };

  return (
    <div className="min-h-screen bg-warm-white overflow-x-hidden">
      <CoverReveal onReveal={() => setCoverDismissed(true)} />

      {coverDismissed && (
        <div className="max-w-md mx-auto pb-24 relative">
          {/* Floating share button */}
          <motion.button
            onClick={handleShare}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-crimson flex items-center justify-center shadow-lg active:scale-95 transition-transform"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
            aria-label="Share invitation"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
          </motion.button>

          {/* Hero */}
          <motion.section
            className="min-h-[100svh] flex flex-col items-center justify-center px-8 text-center safe-top"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <p className="font-body text-muted-foreground text-[11px] tracking-[0.35em] uppercase mb-10">
              Together with their families
            </p>
            <h1 className="font-display text-crimson text-[2.8rem] leading-[1.1] italic">
              Alessandra
            </h1>
            <p className="font-display text-gold text-xl my-3 italic">&</p>
            <h1 className="font-display text-crimson text-[2.8rem] leading-[1.1] italic">
              Marco
            </h1>
            <p className="font-body text-muted-foreground text-[11px] tracking-[0.25em] uppercase mt-10">
              Request the pleasure of your company
            </p>

            <motion.div
              className="mt-16 opacity-30"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <svg width="16" height="28" viewBox="0 0 16 28" className="text-crimson">
                <path d="M8 0 L8 22 M2 16 L8 22 L14 16" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            </motion.div>
          </motion.section>

          {/* Scratch-Off Reveal */}
          <motion.section className="py-20 px-6" {...fadeUp}>
            <div className="text-center mb-10">
              <p className="font-body text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-3">
                Save the Date
              </p>
              <h2 className="font-display text-crimson text-3xl italic">Reveal</h2>
              <p className="font-body text-muted-foreground text-xs mt-2 italic">
                Scratch the gold to uncover the date
              </p>
            </div>

            <div className="flex justify-center gap-5">
              <ScratchOff label="Day" revealText="10" size={88} />
              <ScratchOff label="Month" revealText="Sept" size={88} />
              <ScratchOff label="Year" revealText="2027" size={88} />
            </div>
          </motion.section>

          {/* Divider */}
          <div className="flex justify-center py-4">
            <div className="w-px h-16 bg-crimson/15" />
          </div>

          {/* Countdown */}
          <motion.section className="py-12" {...fadeUp}>
            <Countdown />
          </motion.section>

          {/* Divider */}
          <div className="flex justify-center py-4">
            <div className="w-px h-16 bg-crimson/15" />
          </div>

          {/* Venue */}
          <section className="py-12">
            <VenueSection />
          </section>

          {/* Divider */}
          <div className="flex justify-center py-4">
            <div className="w-px h-16 bg-crimson/15" />
          </div>

          {/* Dress Code */}
          <section className="py-12">
            <DressCode />
          </section>

          {/* Footer */}
          <motion.footer className="py-20 text-center px-8" {...fadeUp}>
            <img
              src={floralBorder}
              alt=""
              className="w-36 mx-auto mb-8 opacity-40"
              loading="lazy"
              width={400}
              height={170}
            />
            <p className="font-display text-crimson text-2xl italic leading-relaxed mb-3">
              We can't wait to
              <br />
              celebrate with you
            </p>
            <p className="font-body text-muted-foreground text-[10px] tracking-[0.3em] uppercase mt-6">
              A & M — September 2027
            </p>
          </motion.footer>
        </div>
      )}
    </div>
  );
};

export default Index;
