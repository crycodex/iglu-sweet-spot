import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo/logo_remove.png";
import heroImage from "@/assets/hero/niña.jpg";
import cityImage from "@/assets/hero/city.png";

const Hero = () => {
  const scrollToPromotions = () => {
    document.getElementById("promotions")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[linear-gradient(var(--gradient-hero))] pt-20"
      style={{
        backgroundImage: `url(${cityImage})`,
        backgroundSize: '1400px auto',
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center md:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-slide-in-left">
              <img src={logo.toString()} alt="iglu"  />
            </h1>
          </div>
          <div className="relative animate-float">
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card)] hover:scale-[1.02] transition-all duration-500">
              <img 
                src={heroImage} 
                alt="Helado de yogurt artesanal con fresas y arándanos"
                className="w-full h-auto object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
