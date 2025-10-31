import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo/logo_remove.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Inicio", action: () => scrollToSection("hero") },
    { label: "Menú", action: () => scrollToSection("menu") },
    { 
      label: "Más",
      hasDropdown: true,
      items: [
        { label: "Promociones", action: () => scrollToSection("promotions") },
        { label: "Contacto", action: () => scrollToSection("contact") },
      ]
    },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => scrollToSection("hero")}
          >
            <img src={logo.toString()} alt="iglu" width={100} height={100} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex items-center gap-1 hover:text-primary transition-colors duration-300"
                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      {item.items?.map((subItem, subIndex) => (
                        <DropdownMenuItem
                          key={subIndex}
                          onClick={subItem.action}
                          className="cursor-pointer hover:bg-accent transition-colors"
                        >
                          {subItem.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button
                    variant="ghost"
                    onClick={item.action}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </Button>
                )}
              </div>
            ))}
            <Button
              variant="default"
              onClick={() => scrollToSection("contact")}
              className="ml-4 hover:scale-105 transition-transform duration-300"
            >
              Reservas
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.hasDropdown ? (
                  <div className="space-y-1">
                    <div className="px-4 py-2 font-medium text-foreground flex items-center gap-2">
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </div>
                    <div className="pl-6 space-y-1">
                      {item.items?.map((subItem, subIndex) => (
                        <button
                          key={subIndex}
                          onClick={subItem.action}
                          className="w-full text-left px-4 py-2 text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-all duration-300"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={item.action}
                    className="w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-all duration-300"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            <Button
              variant="default"
              onClick={() => scrollToSection("contact")}
              className="w-full mt-4 mx-4"
            >
              Reservas
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
