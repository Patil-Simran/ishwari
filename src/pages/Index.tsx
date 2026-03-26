import { useState } from "react";
import { motion } from "framer-motion";
import CoverReveal from "@/components/CoverReveal";
import ScratchOff from "@/components/ScratchOff";
import Countdown from "@/components/Countdown";
import DressCode from "@/components/DressCode";
import couplePhoto from "@/assets/couple-photo.jpg";
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
      title: "Ishwari's Bride-to-Be Party 💍",
      text: "You're invited to Ishwari's Bride-to-Be celebration! 🎉",
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
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "hsl(340, 15%, 98%)" }}>
      <CoverReveal onReveal={() => setCoverDismissed(true)} />

      {coverDismissed && (
        <div className="max-w-md mx-auto pb-24 relative">
          {/* Share button */}
          <motion.button
            onClick={handleShare}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
            style={{ backgroundColor: "hsl(340, 65%, 47%)" }}
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
            className="min-h-[100svh] flex flex-col items-center justify-center px-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8"
            >
              <div
                className="w-40 h-40 rounded-full mx-auto overflow-hidden shadow-xl"
                style={{ border: "3px solid hsl(340, 65%, 47%, 0.3)" }}
              >
                <img
                  src={couplePhoto}
                  alt="Ishwari"
                  className="w-full h-full object-cover object-[center_20%]"
                  width={400}
                  height={400}
                />
              </div>
            </motion.div>

            <p className="font-body text-muted-foreground text-[11px] tracking-[0.35em] uppercase mb-4">
              You're Invited to
            </p>
            <h1 className="font-display text-[2.6rem] leading-[1.1] italic" style={{ color: "hsl(340, 65%, 47%)" }}>
              Ishwari's
            </h1>
            <h2 className="font-display text-2xl italic mt-1" style={{ color: "hsl(43, 72%, 55%)" }}>
              Bride-to-Be Party
            </h2>
            <div className="text-3xl mt-4">💍✨</div>

            <motion.div
              className="mt-14 opacity-30"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <svg width="16" height="28" viewBox="0 0 16 28" style={{ color: "hsl(340, 65%, 47%)" }}>
                <path d="M8 0 L8 22 M2 16 L8 22 L14 16" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            </motion.div>
          </motion.section>

          {/* Scratch-Off Date Reveal */}
          <motion.section className="py-20 px-6" {...fadeUp}>
            <div className="text-center mb-10">
              <p className="font-body text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-3">
                Save the Date
              </p>
              <h2 className="font-display text-3xl italic" style={{ color: "hsl(340, 65%, 47%)" }}>
                Reveal
              </h2>
              <p className="font-body text-muted-foreground text-xs mt-2 italic">
                Scratch the gold to uncover the date
              </p>
            </div>
            <div className="flex justify-center gap-5">
              <ScratchOff label="Day" revealText="28" size={88} />
              <ScratchOff label="Month" revealText="Mar" size={88} />
              <ScratchOff label="Year" revealText="2026" size={88} />
            </div>
          </motion.section>

          {/* Thin divider */}
          <div className="flex justify-center py-4">
            <div className="w-px h-16" style={{ backgroundColor: "hsl(340, 65%, 47%, 0.15)" }} />
          </div>

          {/* Countdown */}
          <motion.section className="py-12" {...fadeUp}>
            <Countdown />
          </motion.section>

          {/* Divider */}
          <div className="flex justify-center py-4">
            <div className="w-px h-16" style={{ backgroundColor: "hsl(340, 65%, 47%, 0.15)" }} />
          </div>

          {/* Details */}
          <motion.section className="py-14 px-6 text-center" {...fadeUp}>
            <p className="font-body text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-3">
              Event Details
            </p>

            <div className="space-y-8 max-w-xs mx-auto">
              <div>
                <div className="text-2xl mb-2">🕖</div>
                <h3 className="font-display text-foreground text-lg italic">Time</h3>
                <p className="font-body text-muted-foreground text-base mt-1">7:00 PM Onwards</p>
              </div>

              <div>
                <div className="text-2xl mb-2">📍</div>
                <h3 className="font-display text-foreground text-lg italic">Venue</h3>
                <p className="font-body text-muted-foreground text-base mt-1 leading-relaxed">
                  Ishwari's Mama & Mami's Home
                  <br />
                  <span className="font-display italic" style={{ color: "hsl(340, 65%, 47%)" }}>
                    Nilaya Society
                  </span>
                </p>
              </div>

              <div>
                <div className="text-2xl mb-2">📅</div>
                <h3 className="font-display text-foreground text-lg italic">Date</h3>
                <p className="font-body text-muted-foreground text-base mt-1">
                  28th March, 2026
                  <br />
                  <span className="text-sm">Saturday Evening</span>
                </p>
              </div>
            </div>
          </motion.section>

          {/* Divider */}
          <div className="flex justify-center py-4">
            <div className="w-px h-16" style={{ backgroundColor: "hsl(340, 65%, 47%, 0.15)" }} />
          </div>

          {/* Dress Code */}
          <section className="py-12">
            <DressCode />
          </section>

          {/* Divider */}
          <div className="flex justify-center py-4">
            <div className="w-px h-16" style={{ backgroundColor: "hsl(340, 65%, 47%, 0.15)" }} />
          </div>

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
            <p className="font-display text-2xl italic leading-relaxed mb-3" style={{ color: "hsl(340, 65%, 47%)" }}>
              The Patil Family
              <br />
              eagerly awaits
              <br />
              your arrival
            </p>
            <div className="text-2xl mt-4">🎉🥂</div>
            <p className="font-body text-muted-foreground text-[10px] tracking-[0.3em] uppercase mt-8">
              With love & excitement
            </p>
          </motion.footer>
        </div>
      )}
    </div>
  );
};

export default Index;
