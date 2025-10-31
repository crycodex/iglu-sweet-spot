import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IceCream, Coffee, Cake } from "lucide-react";

const Menu = () => {
  const menuItems = [
    {
      icon: IceCream,
      title: "Helados de Yogurt Artesanal",
      description: "Cremosos helados de yogurt natural con una variedad de toppings frescos y deliciosos",
      color: "text-primary"
    },
    {
      icon: Cake,
      title: "Waffles y Postres",
      description: "Waffles recién hechos y postres caseros que endulzarán tu día",
      color: "text-accent"
    },
    {
      icon: Coffee,
      title: "Cafetería y Bebidas Calientes",
      description: "El mejor café y bebidas calientes para acompañar tu momento especial",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-24 bg-muted">
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
              className="text-center hover:shadow-[var(--shadow-card)] transition-all hover:-translate-y-2 border-border bg-card"
            >
              <CardHeader>
                <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-background flex items-center justify-center shadow-[var(--shadow-soft)]">
                  <item.icon className={`w-10 h-10 ${item.color}`} />
                </div>
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
