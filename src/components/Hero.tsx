import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo/logo_remove.png";
import cityImage from "@/assets/hero/city.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import slider1 from "@/assets/hero/slider/1.jpg";
import slider2 from "@/assets/hero/slider/2.jpg";
import slider3 from "@/assets/hero/slider/3.jpg";
import slider4 from "@/assets/hero/slider/4.jpg";

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const scrollToPromotions = () => {
    document.getElementById("promotions")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [api]);

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
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 animate-fade-in-up"
                onClick={() => window.open("https://drive.google.com/file/d/1fHtjcRx3jRvgHH4WllukozRRJAW6wSeo/view?usp=drive_link", "_blank")}
              >
                Ver Menú Completo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 animate-fade-in-up"
                style={{ animationDelay: "100ms" }}
                onClick={scrollToPromotions}
              >
                Ver Promociones
              </Button>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card)] hover:scale-[1.02] transition-all duration-500">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                setApi={setApi}
                className="w-full"
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="w-full aspect-[4/3] overflow-hidden">
                      <img 
                        src={slider1} 
                        alt="Helado de yogurt artesanal"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="w-full aspect-[4/3] overflow-hidden">
                      <img 
                        src={slider2} 
                        alt="Helado de yogurt artesanal"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="w-full aspect-[4/3] overflow-hidden">
                      <img 
                        src={slider3} 
                        alt="Helado de yogurt artesanal"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="w-full aspect-[4/3] overflow-hidden">
                      <img 
                        src={slider4} 
                        alt="Helado de yogurt artesanal"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
                <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
