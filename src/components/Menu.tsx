import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heladoImage from "@/assets/menu/helado.jpg";
import waffleImage from "@/assets/menu/waffle.jpg";
import bebidaImage from "@/assets/menu/bebida.jpg";

const Menu = () => {
  const menuItems = [
    {
      title: "Helados de Yogurt Artesanal",
      description: "Cremosos helados de yogurt natural con una variedad de toppings frescos y deliciosos",
      image: heladoImage
    },
    {
      title: "Waffles y Postres",
      description: "Waffles recién hechos y postres caseros que endulzarán tu día",
      image: waffleImage
    },
    {
      title: "Cafetería y Bebidas Calientes",
      description: "El mejor café y bebidas calientes para acompañar tu momento especial",
      image: bebidaImage
    }
  ];

  return (
    <section id="menu" className="py-24 bg-muted scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Nuestro Sabor
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra selección de productos artesanales
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <Card 
              key={index}
              className="overflow-hidden text-center hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 border-border bg-card animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
