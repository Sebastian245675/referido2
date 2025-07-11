
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Menu } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const Header = ({ onOpenAuth }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">ContableApp</h1>
              <Badge variant="secondary" className="text-xs">Pro Learning</Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">
              Características
            </a>
            <a href="#pricing" className="text-slate-600 hover:text-blue-600 transition-colors">
              Precios
            </a>
            <a href="#resources" className="text-slate-600 hover:text-blue-600 transition-colors">
              Recursos
            </a>
            <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">
              Contacto
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              onClick={() => onOpenAuth('login')}
              className="text-slate-600 hover:text-blue-600"
            >
              Iniciar Sesión
            </Button>
            <Button 
              onClick={() => onOpenAuth('register')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              Comenzar Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-100">
            <nav className="flex flex-col space-y-3">
              <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors px-2 py-1">
                Características
              </a>
              <a href="#pricing" className="text-slate-600 hover:text-blue-600 transition-colors px-2 py-1">
                Precios
              </a>
              <a href="#resources" className="text-slate-600 hover:text-blue-600 transition-colors px-2 py-1">
                Recursos
              </a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors px-2 py-1">
                Contacto
              </a>
              <div className="flex flex-col space-y-2 pt-3 border-t border-blue-100">
                <Button 
                  variant="ghost" 
                  onClick={() => onOpenAuth('login')}
                  className="justify-start text-slate-600 hover:text-blue-600"
                >
                  Iniciar Sesión
                </Button>
                <Button 
                  onClick={() => onOpenAuth('register')}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                >
                  Comenzar Gratis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
