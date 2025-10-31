import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, CreditCard, Instagram, Facebook, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Visítanos en nuestra heladería",
      details: "Calle Simón Bolívar y Juan de Velasco"
    },
    {
      icon: Clock,
      title: "Horario de Atención",
      content: "Lunes a Sábado: 9:00 AM - 9:00 PM",
      details: "Domingo: 11:00 AM - 9:00 PM"
    },
    {
      icon: CreditCard,
      title: "Métodos de Pago",
      content: "Efectivo, Transferencias Bancarias",
      details: "De Una"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Visítanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos listos para atenderte
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {contactInfo.map((item, index) => (
            <Card 
              key={index}
              className="text-center hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-8 space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.content}</p>
                <p className="text-foreground font-medium">{item.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <Card className="overflow-hidden border-border">
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps?q=0.3483977,-78.1188256&hl=es&z=15&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Ubicación de Heladería Iglu - Calle Simón Bolívar y Juan de Velasco"
              />
            </CardContent>
          </Card>
        </div>

        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-foreground">Síguenos en Redes Sociales</h3>
          <div className="flex justify-center gap-6">
            <a 
              href="#" 
              className="w-14 h-14 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="w-14 h-14 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="w-14 h-14 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="WhatsApp"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
