
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight, Users, Award } from "lucide-react";

interface HeroSectionProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const HeroSection = ({ onOpenAuth }: HeroSectionProps) => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
              🚀 Plataforma #1 en Educación Contable
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Domina la 
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                {" "}Contabilidad
              </span>
              <br />
              y el Diseño Empresarial
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Aprende contabilidad y diseño empresarial con nuestra plataforma integral. 
              Videos HD, documentos PDF, plantillas y acceso directo a Canvas. 
              <strong className="text-blue-600">¡Gana dinero con nuestro sistema de referidos!</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                onClick={() => onOpenAuth('register')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-3 h-auto"
              >
                Comenzar Gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-200 hover:bg-blue-50 text-lg px-8 py-3 h-auto"
              >
                <Play className="mr-2 w-5 h-5" />
                Ver Demo
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span>+10,000 estudiantes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-blue-600" />
                <span>Certificación oficial</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-4">
                <div className="h-4 bg-blue-100 rounded w-3/4"></div>
                <div className="h-4 bg-slate-100 rounded w-full"></div>
                <div className="h-4 bg-slate-100 rounded w-2/3"></div>
                <div className="h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                  <Play className="w-12 h-12 text-blue-600" />
                </div>
                <div className="flex space-x-2">
                  <div className="h-8 bg-blue-600 rounded w-20 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">PDF</span>
                  </div>
                  <div className="h-8 bg-green-600 rounded w-20 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">VIDEO</span>
                  </div>
                  <div className="h-8 bg-purple-600 rounded w-20 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">CANVAS</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-blue-600 rounded-full p-3 shadow-lg animate-bounce">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 rounded-full p-3 shadow-lg animate-pulse">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
