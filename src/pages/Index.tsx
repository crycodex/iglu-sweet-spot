import Hero from "@/components/Hero";
import Promotions from "@/components/Promotions";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Promotions />
      <Menu />
      <Contact />
      
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 iglu heladeria y cafeteria. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
