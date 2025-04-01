import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-90 z-0">
        <div className="absolute inset-0 bg-[url('/circuit-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            IT Solutions That Drive <span className="text-blue-300">Success</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Software Development • IT Consultancy • SEO Optimization • Mobile Apps
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg py-6 px-8">
              Our Services
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
