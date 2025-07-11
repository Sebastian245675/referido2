
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, TrendingUp, Play, FileText, Image as ImageIcon, Video } from "lucide-react";
import { AuthModal } from "@/components/auth/AuthModal";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { PricingSection } from "@/components/home/PricingSection";
import { StatsSection } from "@/components/home/StatsSection";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const handleOpenAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header onOpenAuth={handleOpenAuth} />
      
      <main>
        <HeroSection onOpenAuth={handleOpenAuth} />
        <StatsSection />
        <FeaturesSection />
        <PricingSection onOpenAuth={handleOpenAuth} />
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">ContableApp</h3>
              <p className="text-gray-300">La plataforma líder en educación contable y diseño empresarial</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Recursos</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Videos Educativos</li>
                <li>Documentos PDF</li>
                <li>Plantillas</li>
                <li>Canvas Integration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Soporte</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Centro de Ayuda</li>
                <li>Contacto</li>
                <li>Tutoriales</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Términos de Uso</li>
                <li>Política de Privacidad</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ContableApp. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </div>
  );
};

export default Index;
