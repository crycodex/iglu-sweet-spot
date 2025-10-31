import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Gift } from "lucide-react";
import waffleImage from "@/assets/promociones/waffle.jpg";
import heladoImage from "@/assets/promociones/helado.jpg";

const Promotions = () => {
  return (
    <section id="promotions" className="py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Promociones Especiales
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Disfruta de nuestras increíbles ofertas pensadas para ti
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="overflow-hidden hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 border-border animate-fade-in-up">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={waffleImage} 
                alt="Waffles con fresas y crema"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold shadow-lg">
                ¡Miércoles!
              </div>
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl">Miércoles de Waffles</CardTitle>
              </div>
              <CardDescription className="text-lg">
                Disfruta nuestra promoción de 2x1 en Waffles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">$6.99</span>
                <span className="text-muted-foreground">por 2 waffles</span>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 border-border animate-fade-in-up">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={heladoImage} 
                alt="Tarjeta de lealtad con helados"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold shadow-lg">
                ¡Lealtad!
              </div>
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Gift className="w-6 h-6 text-accent" />
                <CardTitle className="text-2xl">Programa de Lealtad</CardTitle>
              </div>
              <CardDescription className="text-lg">
                Tu lealtad tiene premio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                Por la compra de <span className="font-bold text-accent">10 helados</span>, 
                ¡recibes <span className="font-bold text-accent">1 GRATIS</span>!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
