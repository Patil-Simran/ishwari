import { motion } from "framer-motion";
import venueImg from "@/assets/venue-sketch.png";
import floralBorder from "@/assets/floral-border.png";

const VenueSection = () => {
  return (
    <motion.div
      className="px-6 py-4 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <img
        src={floralBorder}
        alt=""
        className="w-48 mx-auto mb-6 opacity-60"
        loading="lazy"
        width={400}
        height={170}
      />

      <p className="font-body text-muted-foreground text-xs tracking-[0.3em] uppercase mb-2">
        The Venue
      </p>
      <h2 className="font-display text-crimson text-3xl italic mb-2">
        Villa Medicea
      </h2>
      <p className="font-body text-muted-foreground text-sm mb-6">
        Artimino, Tuscany — Italy
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src={venueImg}
          alt="Villa Medicea — Tuscan wedding venue architectural sketch"
          loading="lazy"
          width={800}
          height={600}
          className="w-full max-w-sm mx-auto opacity-85"
        />
      </motion.div>

      <img
        src={floralBorder}
        alt=""
        className="w-48 mx-auto mt-6 opacity-60 rotate-180"
        loading="lazy"
        width={400}
        height={170}
      />
    </motion.div>
  );
};

export default VenueSection;
