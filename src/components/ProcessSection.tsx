import { motion } from "framer-motion";
import { MessageSquare, Palette, Eye, Package } from "lucide-react";

const steps = [
  { num: "01", title: "CONSULTATION", desc: "We discuss your vision, preferences, and the story you want to tell.", icon: MessageSquare },
  { num: "02", title: "PLANNING", desc: "We plan the shoot — location, timing, styling — everything to perfection.", icon: Palette },
  { num: "03", title: "THE SHOOT", desc: "Our team captures every beautiful moment with professional precision.", icon: Eye },
  { num: "04", title: "DELIVERY", desc: "Edited photos and albums delivered with meticulous attention to detail.", icon: Package },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body tracking-[0.3em] uppercase text-sm">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-display mt-3">Our Process</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-primary font-display text-2xl font-bold">{step.num}</span>
              <h3 className="text-lg font-display mt-2 mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
