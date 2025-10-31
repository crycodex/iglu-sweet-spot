import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-yogurt.jpg";

const Hero = () => {
  const scrollToPromotions = () => {
    document.getElementById("promotions")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[linear-gradient(var(--gradient-hero))]">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center md:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block text-foreground">iglu</span>
              <span className="block text-primary">heladeria y cafeteria</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto md:mx-0">
              Tu momento dulce del día. Descubre nuestro helado de yogurt artesanal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={scrollToPromotions}
                className="group"
              >
                Ver Promociones
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-card)]">
              <img 
                src={heroImage} 
                alt="Helado de yogurt artesanal con fresas y arándanos"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
