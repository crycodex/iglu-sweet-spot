import Hero from "@/components/Hero";
import Promotions from "@/components/Promotions";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Promotions />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
