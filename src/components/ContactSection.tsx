import { motion } from "framer-motion";
import { Phone, Instagram, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body tracking-[0.3em] uppercase text-sm">Reach Out</span>
          <h2 className="text-4xl md:text-5xl font-display mt-3">
            Get <span className="text-gradient">In Touch</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: Phone, label: "Call Us", value: "+91 6302600192", href: "tel:+919676379958" },
            { icon: Instagram, label: "Instagram", value: "@raja_creativestudios", href: "https://instagram.com/raja_creativestudios" },
            { icon: Mail, label: "Email", value: "rajacreativestudios@gmail.com", href: "mailto:rajacreativestudios@gmail.com" },
            { icon: MapPin, label: "Location", value: "2-6-943,KLN Reddy Colony, Subedari, Hanamkonda, Telangana 506001, India", href: "https://www.google.com/maps/@17.9998458,79.5489271,3a,75y,46.65h,81.87t/data=!3m7!1e1!3m5!1sE8OxwG2Z5AY0jMW-qkgllw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D8.12601846874476%26panoid%3DE8OxwG2Z5AY0jMW-qkgllw%26yaw%3D46.64828247916847!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D" },
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 flex items-center gap-5 hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="font-body font-medium whitespace-pre-line">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-white font-body text-sm tracking-wide">WE OFFER SERVICES ACROSS INDIA</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
