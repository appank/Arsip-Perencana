import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import logo from "@/assets/arsip_logo2.jpeg";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Logo & Description */}
            <div>
              <img src={logo} alt="Arsip Perencana" className="h-16 w-auto mb-4 brightness-0 invert" />
              <p className="text-accent-foreground/80 leading-relaxed">
                Studio arsitektur yang berfokus pada perencanaan dan pengembangan proyek dengan pendekatan teknologi Building Information Modeling (BIM).
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Menu</h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "#home" },
                  { name: "About", href: "#about" },
                  { name: "Services", href: "#services" },
                  { name: "Portfolio", href: "#portfolio" },
                  { name: "Paket", href: "#paket" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-accent-foreground/70 hover:text-teal-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">Kontak</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-accent-foreground/80">
                    Kota Makassar, Sulawesi Selatan
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white" />
                  <a
                    href="tel:+6285796030907"
                    className="text-accent-foreground/80 hover:text-teal-400 transition-colors"
                  >
                    +62 85796030907
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white" />
                  <a
                    href="mailto:arsipperencana1345@gmail.com"
                    className="text-accent-foreground/80 hover:text-teal-400 transition-colors"
                  >
                    arsipperencana1345@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-white" />
                  <a
                    href="https://instagram.com/si.arsip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-foreground/80 hover:text-teal-400 transition-colors"
                  >
                    @si.arsip
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-accent-foreground/10 text-center">
            <p className="text-accent-foreground/60 text-sm">
              © {new Date().getFullYear()} Arsip Perencana. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
