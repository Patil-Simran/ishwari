import { useState } from "react";
import { motion } from "framer-motion";
import CoverReveal from "@/components/CoverReveal";
import ScratchOff from "@/components/ScratchOff";
import Countdown from "@/components/Countdown";
import DressCode from "@/components/DressCode";
import FloatingPetals from "@/components/FloatingPetals";
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
    <div
      className="invite-shell min-h-screen overflow-x-hidden relative"
      style={{ backgroundColor: "hsl(340, 15%, 98%)" }}
    >
      <CoverReveal onReveal={() => setCoverDismissed(true)} />

      {coverDismissed && (
        <div className="relative z-[1]">
          <FloatingPetals />
        <div className="max-w-xl mx-auto pb-28 sm:pb-32 relative px-2 sm:px-4">
          {/* Share button */}
          <motion.button
            onClick={handleShare}
            className="fixed bottom-6 right-6 z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
            style={{ backgroundColor: "hsl(340, 65%, 47%)" }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
            aria-label="Share invitation"
          >
            <svg className="w-[22px] h-[22px] sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
          </motion.button>

          {/* Hero */}
          <motion.section
            className="min-h-[100svh] flex flex-col items-center justify-center px-6 sm:px-10 text-center pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-10 sm:mb-12"
            >
              <div
                className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full mx-auto overflow-hidden shadow-2xl ring-4 ring-[hsl(340,65%,47%,0.12)]"
                style={{ border: "4px solid hsl(340, 65%, 47%, 0.35)" }}
              >
                <img
                  src={couplePhoto}
                  alt="Ishwari"
                  className="w-full h-full object-cover object-[center_20%]"
                  width={576}
                  height={576}
                />
              </div>
            </motion.div>

            <p className="font-body text-muted-foreground text-xs sm:text-sm tracking-[0.32em] uppercase mb-5">
              You're Invited to
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.08] italic" style={{ color: "hsl(340, 65%, 47%)" }}>
              Ishwari's
            </h1>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.65rem] italic mt-2 sm:mt-3" style={{ color: "hsl(43, 72%, 55%)" }}>
              Bride-to-Be Party
            </h2>
            <div className="text-4xl sm:text-5xl mt-5 sm:mt-6">💍✨</div>

            <motion.div
              className="mt-16 sm:mt-20 opacity-[0.35]"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <svg width="20" height="34" viewBox="0 0 16 28" style={{ color: "hsl(340, 65%, 47%)" }}>
                <path d="M8 0 L8 22 M2 16 L8 22 L14 16" stroke="currentColor" strokeWidth="1.25" fill="none" />
              </svg>
            </motion.div>
          </motion.section>

          {/* Welcome line + ornament */}
          <motion.section className="px-8 sm:px-12 py-10 sm:py-14 text-center" {...fadeUp}>
            <div className="flex items-center justify-center gap-4 mb-8 max-w-sm mx-auto">
              <span className="h-px flex-1 max-w-[4rem] bg-gradient-to-r from-transparent to-[hsl(340,65%,47%,0.35)]" aria-hidden />
              <span className="font-display text-lg sm:text-xl italic" style={{ color: "hsl(43, 72%, 50%)" }}>
                ✦
              </span>
              <span className="h-px flex-1 max-w-[4rem] bg-gradient-to-l from-transparent to-[hsl(340,65%,47%,0.35)]" aria-hidden />
            </div>
            <p className="font-display text-xl sm:text-2xl md:text-[1.75rem] italic leading-relaxed text-foreground/85 max-w-lg mx-auto">
              An evening of love, laughter &amp; memories in the making — we would be honoured by your presence.
            </p>
          </motion.section>

          {/* Scratch-Off Date Reveal */}
          <motion.section className="py-16 sm:py-24 px-6 sm:px-8" {...fadeUp}>
            <div className="text-center mb-12 sm:mb-14">
              <p className="font-body text-muted-foreground text-xs sm:text-sm tracking-[0.32em] uppercase mb-4">
                Save the Date
              </p>
              <h2 className="font-display text-4xl sm:text-[2.75rem] italic" style={{ color: "hsl(340, 65%, 47%)" }}>
                Reveal
              </h2>
              <p className="font-body text-muted-foreground text-sm sm:text-base mt-3 italic">
                Scratch the gold to uncover the date
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              <ScratchOff label="Day" revealText="28" size={112} />
              <ScratchOff label="Month" revealText="Mar" size={112} />
              <ScratchOff label="Year" revealText="2026" size={112} />
            </div>
          </motion.section>

          {/* Thin divider */}
          <div className="flex justify-center py-5">
            <div className="w-px h-20 sm:h-24" style={{ backgroundColor: "hsl(340, 65%, 47%, 0.18)" }} />
          </div>

          {/* Countdown */}
          <motion.section className="py-14 sm:py-16" {...fadeUp}>
            <Countdown />
          </motion.section>

          {/* Divider */}
          <div className="flex justify-center py-5">
            <div className="w-px h-20 sm:h-24" style={{ backgroundColor: "hsl(340, 65%, 47%, 0.18)" }} />
          </div>

          {/* Details */}
          <motion.section className="py-16 sm:py-20 px-6 sm:px-8 text-center" {...fadeUp}>
            <p className="font-body text-muted-foreground text-xs sm:text-sm tracking-[0.32em] uppercase mb-5">
              Event Details
            </p>

            <div className="space-y-12 sm:space-y-14 max-w-md mx-auto">
              <div>
                <div className="text-4xl sm:text-5xl mb-3">🕖</div>
                <h3 className="font-display text-foreground text-xl sm:text-2xl italic">Time</h3>
                <p className="font-body text-muted-foreground text-lg sm:text-xl mt-2">7:00 PM Onwards</p>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl mb-3">📍</div>
                <h3 className="font-display text-foreground text-xl sm:text-2xl italic">Venue</h3>
                <p className="font-body text-muted-foreground text-lg sm:text-xl mt-2 leading-relaxed">
                  Ishwari's Mama & Mami's Home
                  <br />
                  <span className="font-display italic text-xl sm:text-2xl" style={{ color: "hsl(340, 65%, 47%)" }}>
                    Nilaya Society
                  </span>
                </p>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl mb-3">📅</div>
                <h3 className="font-display text-foreground text-xl sm:text-2xl italic">Date</h3>
                <p className="font-body text-muted-foreground text-lg sm:text-xl mt-2">
                  28th March, 2026
                  <br />
                  <span className="text-base sm:text-lg">Saturday Evening</span>
                </p>
              </div>
            </div>
          </motion.section>

          {/* Divider */}
          <div className="flex justify-center py-5">
            <div className="w-px h-20 sm:h-24" style={{ backgroundColor: "hsl(340, 65%, 47%, 0.18)" }} />
          </div>

          {/* Dress Code */}
          <section className="py-14 sm:py-16">
            <DressCode />
          </section>

          {/* RSVP hint */}
          <motion.section className="px-8 sm:px-10 pb-4 text-center" {...fadeUp}>
            <p className="font-body text-muted-foreground text-sm sm:text-base italic max-w-md mx-auto leading-relaxed">
              Kindly let us know if you can join — your presence will make the celebration complete.
            </p>
          </motion.section>

          {/* Divider */}
          <div className="flex justify-center py-5">
            <div className="w-px h-20 sm:h-24" style={{ backgroundColor: "hsl(340, 65%, 47%, 0.18)" }} />
          </div>

          {/* Footer */}
          <motion.footer className="py-20 sm:py-24 text-center px-8 sm:px-10" {...fadeUp}>
            <img
              src={floralBorder}
              alt=""
              className="w-52 sm:w-64 md:w-72 max-w-[min(100%,18rem)] mx-auto mb-10 sm:mb-12 opacity-45"
              loading="lazy"
              width={520}
              height={220}
            />
            <p className="font-display text-3xl sm:text-4xl md:text-[2.65rem] italic leading-snug mb-4" style={{ color: "hsl(340, 65%, 47%)" }}>
              The Patil Family
              <br />
              eagerly awaits
              <br />
              your arrival
            </p>
            <div className="text-3xl sm:text-4xl mt-5">🎉🥂</div>
            <p className="font-body text-muted-foreground text-xs sm:text-sm tracking-[0.28em] uppercase mt-10">
              With love & excitement
            </p>
          </motion.footer>
        </div>
        </div>
      )}
    </div>
  );
};

export default Index;
