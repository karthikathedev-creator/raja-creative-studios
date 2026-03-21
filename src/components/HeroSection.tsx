import { motion } from "framer-motion";
import heroImage from "@/assets/hero-wedding.jpg";
import { Camera } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Wedding photography by Raja Creatives Studios"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          {/* <Camera className="w-5 h-5 text-primary" /> */}
          <span className="text-white font-body tracking-[0.3em] uppercase text-sm border border-foreground/30 px-2 py-1 rounded">
            Athe Mukhesh Varma
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display italic mb-4"
        >
          Raja{" "}
          <span className="text-gradient not-italic font-bold uppercase">Creative</span>{" "}
          Studios
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white md:text-xl text-muted-foreground font-light tracking-wide mb-4"
        >
          Professional Photography & Videography Services for Your Special Moments
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
        >
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-body font-semibold tracking-wide rounded-lg hover:brightness-110 transition-all"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-foreground/30 text-foreground font-body font-medium tracking-wide rounded-lg hover:bg-foreground/10 transition-all"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
