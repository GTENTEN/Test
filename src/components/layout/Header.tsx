import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
        
          <span className="text-2xl font-bold text-blue-600">CLOUD22</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-gray-600 hover:text-blue-600 transition">
            Services
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="#portfolio" className="text-gray-600 hover:text-blue-600 transition">
            Portfolio
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition">
            Contact
          </Link>
        </nav>

        <div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
