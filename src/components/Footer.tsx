import { Camera, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Camera className="w-5 h-5 text-primary" />
          <span className="font-display text-lg italic">Raja Creative Studios</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://instagram.com/raja_creativestudios" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="mailto:rajacreativestudios@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="tel:+919676379958" className="text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-5 h-5" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 Raja Creative Studios. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
