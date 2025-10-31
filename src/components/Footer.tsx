import { MapPin, Clock, Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const footerSections = [
    {
      title: "Navegación",
      links: [
        { label: "Inicio", action: () => scrollToSection("hero") },
        { label: "Menú", action: () => scrollToSection("menu") },
        { label: "Promociones", action: () => scrollToSection("promotions") },
        { label: "Contacto", action: () => scrollToSection("contact") },
      ],
    },
    {
      title: "Información",
      links: [
        { label: "Sobre Nosotros", action: () => {} },
        { label: "Política de Privacidad", action: () => {} },
        { label: "Términos y Condiciones", action: () => {} },
      ],
    },
    {
      title: "Servicios",
      links: [
        { label: "Reservas", action: () => scrollToSection("contact") },
        { label: "Delivery", action: () => {} },
        { label: "Programa de Lealtad", action: () => scrollToSection("promotions") },
      ],
    },
  ];

  return (
    <footer className="bg-foreground text-background mt-0">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Brand Section */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold">iglu</h3>
            <p className="text-xs text-background/80 leading-relaxed">
              Tu momento dulce del día. Helados de yogurt artesanal y cafetería 
              en el corazón de la ciudad.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-2">
              <h4 className="text-base font-semibold">{section.title}</h4>
              <ul className="space-y-1.5">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={link.action}
                      className="text-xs text-background/80 hover:text-primary transition-colors duration-300 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div className="space-y-2">
            <h4 className="text-base font-semibold">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-xs text-background/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Calle Simón Bolívar y Juan de Velasco
                </span>
              </li>
              <li className="flex items-center gap-2 text-xs text-background/80">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <div>
                  <p>Lun - Sáb: 9:00 AM - 9:00 PM</p>
                  <p>Dom: 11:00 AM - 9:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-2 text-xs text-background/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+593" className="hover:text-primary transition-colors duration-300">
                  +593 XX XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs text-background/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@iglu.com" className="hover:text-primary transition-colors duration-300">
                  info@iglu.com
                </a>
              </li>
            </ul>
            <Button
              variant="default"
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="mt-3 w-full hover:scale-105 transition-transform duration-300"
            >
              Hacer Reserva
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-xs text-background/60">
              © 2025 iglu heladería y cafetería. Todos los derechos reservados.
            </p>
            <p className="text-xs text-background/60">
              Hecho con ❤️ para los amantes del helado
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
