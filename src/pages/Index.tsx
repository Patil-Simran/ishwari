import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import CoverReveal from "@/components/CoverReveal";
import ScratchOff from "@/components/ScratchOff";
import Countdown from "@/components/Countdown";
import DressCode from "@/components/DressCode";
import FloatingPetals from "@/components/FloatingPetals";
import ScrollDownHint from "@/components/ScrollDownHint";
import couplePhoto from "@/assets/couple-photo.jpg";
import floralBorder from "@/assets/floral-border.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const detailIconClass = "mx-auto mb-3 text-[hsl(340,65%,47%)] w-14 h-14 sm:w-16 sm:h-16 shrink-0";

const Index = () => {
  const [coverDismissed, setCoverDismissed] = useState(false);

  return (
    <div
      className="invite-shell min-h-screen overflow-x-hidden relative"
      style={{ backgroundColor: "hsl(340, 15%, 98%)" }}
    >
      <CoverReveal onReveal={() => setCoverDismissed(true)} />

      {coverDismissed && (
        <div className="relative z-[1]">
          <FloatingPetals />
        <div className="max-w-2xl mx-auto pb-20 sm:pb-24 relative px-3 sm:px-6">
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
                className="rounded-full mx-auto overflow-hidden shadow-2xl ring-4 ring-[hsl(340,65%,47%,0.12)] w-[min(88vw,20rem)] h-[min(88vw,20rem)] sm:w-[22rem] sm:h-[22rem] md:w-[26rem] md:h-[26rem]"
                style={{ border: "4px solid hsl(340, 65%, 47%, 0.35)" }}
              >
                <img
                  src={couplePhoto}
                  alt="Ishwari"
                  className="w-full h-full object-cover object-[center_20%]"
                  width={640}
                  height={640}
                />
              </div>
            </motion.div>

            <p className="font-body text-muted-foreground text-sm sm:text-base tracking-[0.28em] uppercase mb-5">
              You're Invited to
            </p>
            <h1
              className="font-display leading-[1.05] italic"
              style={{
                color: "hsl(340, 65%, 47%)",
                fontSize: "clamp(2.75rem, 11vw, 4.25rem)",
              }}
            >
              Ishwari's
            </h1>
            <h2
              className="font-display italic mt-2 sm:mt-3"
              style={{
                color: "hsl(43, 72%, 55%)",
                fontSize: "clamp(1.85rem, 6.5vw, 3rem)",
              }}
            >
              Bride-to-Be Party
            </h2>
            <div className="text-5xl sm:text-6xl mt-6 sm:mt-7">💍✨</div>

            <ScrollDownHint className="mt-5 sm:mt-8 pb-1" />
          </motion.section>

          {/* Scratch-Off Date Reveal */}
          <motion.section className="py-16 sm:py-24 px-6 sm:px-8" {...fadeUp}>
            <div className="text-center mb-12 sm:mb-14">
              <p className="font-body text-muted-foreground text-xs sm:text-sm tracking-[0.32em] uppercase mb-4">
                Save the Date
              </p>
              <h2
                className="font-display italic"
                style={{ color: "hsl(340, 65%, 47%)", fontSize: "clamp(2.25rem, 8vw, 3rem)" }}
              >
                Reveal
              </h2>
              <p className="font-body text-muted-foreground text-sm sm:text-base mt-3 italic">
                Scratch the gold to uncover the date
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-7 sm:gap-10">
              <ScratchOff label="Day" revealText="28" size={128} />
              <ScratchOff label="Month" revealText="Mar" size={128} />
              <ScratchOff label="Year" revealText="2026" size={128} />
            </div>
            <ScrollDownHint className="pt-3 sm:pt-5 pb-1" />
          </motion.section>

          {/* Countdown */}
          <motion.section className="py-14 sm:py-16" {...fadeUp}>
            <Countdown />
            <ScrollDownHint className="pt-3 sm:pt-5 pb-1" />
          </motion.section>

          {/* Details */}
          <motion.section className="py-16 sm:py-20 px-6 sm:px-8 text-center" {...fadeUp}>
            <p className="font-body text-muted-foreground text-xs sm:text-sm tracking-[0.32em] uppercase mb-5">
              Event Details
            </p>

            <div className="space-y-12 sm:space-y-14 max-w-md mx-auto">
              <div>
                <Clock className={detailIconClass} strokeWidth={1.85} aria-hidden />
                <h3 className="font-display text-foreground text-xl sm:text-2xl italic">Time</h3>
                <p className="font-body text-muted-foreground text-lg sm:text-xl mt-2">7:00 PM Onwards</p>
              </div>

              <div>
                <MapPin className={detailIconClass} strokeWidth={1.85} aria-hidden />
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
                <Calendar className={detailIconClass} strokeWidth={1.85} aria-hidden />
                <h3 className="font-display text-foreground text-xl sm:text-2xl italic">Date</h3>
                <p className="font-body text-muted-foreground text-lg sm:text-xl mt-2">
                  28th March, 2026
                  <br />
                  <span className="text-base sm:text-lg">Saturday Evening</span>
                </p>
              </div>
            </div>
            <ScrollDownHint className="pt-3 sm:pt-5 pb-1" />
          </motion.section>

          {/* Dress Code */}
          <section className="py-14 sm:py-16">
            <DressCode />
            <ScrollDownHint className="pt-3 sm:pt-5 pb-1" />
          </section>

          {/* Footer */}
          <motion.footer className="py-20 sm:py-24 text-center px-8 sm:px-10" {...fadeUp}>
            <img
              src={floralBorder}
              alt=""
              className="mx-auto mb-10 sm:mb-12 opacity-50 w-[min(90vw,26rem)] h-auto"
              loading="lazy"
              width={600}
              height={260}
            />
            <p
              className="font-display italic leading-snug mb-4 px-2"
              style={{ color: "hsl(340, 65%, 47%)", fontSize: "clamp(1.75rem, 6vw, 2.85rem)" }}
            >
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
