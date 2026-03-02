import { motion } from "framer-motion";
import weddingImg from "@/assets/hero-wedding.jpg";
import sareeImg from "@/assets/saree-ceremony.jpg";
import birthdayImg from "@/assets/birthday.jpg";
import commercialImg from "@/assets/commercial.jpg";
import corporateImg from "@/assets/corporate.jpg";
import fashionImg from "@/assets/fashion.jpg";

const services = [
  { title: "Wedding", image: weddingImg, desc: "Capturing the magic of your special day with timeless elegance." },
  { title: "Saree Ceremony", image: sareeImg, desc: "Beautiful moments of tradition and grace, preserved forever." },
  { title: "Birthday", image: birthdayImg, desc: "Celebrating milestones with vibrant and joyful photography." },
  { title: "Commercial", image: commercialImg, desc: "Professional product and brand photography for your business." },
  { title: "Corporate", image: corporateImg, desc: "Polished headshots and event coverage for professionals." },
  { title: "Fashion", image: fashionImg, desc: "Bold, dramatic fashion shoots that make a statement." },
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
              className="group glass-card overflow-hidden cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} photography`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
