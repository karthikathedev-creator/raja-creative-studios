import { motion } from "framer-motion";

const services = [
  { title: "WEDDING CEREMONY", desc: "Capturing the magic of your special day with timeless elegance." },
  { title: "SAREE CEREMONY", desc: "Beautiful moments of tradition and grace, preserved forever." },
  { title: "BIRTHDAY", desc: "Celebrating milestones with vibrant and joyful photography." },
  { title: "COMMERCIAL", desc: "Professional product and brand photography for your business." },
  { title: "CORPORATE", desc: "Polished headshots and event coverage for professionals." },
  { title: "FASHION", desc: "Traditional, dramatic fashion shoots that make a statement." },
  { title: "OTHER EVENTS", desc: "Memorable photography for all your special memories." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body tracking-[0.3em] uppercase text-sm">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-display mt-3">Our Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card p-6 text-center cursor-pointer hover:bg-primary/10 transition-colors"
            >
              <h3 className="text-xl font-display mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
