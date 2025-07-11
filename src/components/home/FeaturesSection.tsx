
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video, FileText, Image as ImageIcon, Users, Gift, Palette, Calculator, TrendingUp, BookOpen } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Video,
      title: "Videos HD Premium",
      description: "Contenido educativo en alta definición con explicaciones paso a paso",
      badge: "Nuevo",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: FileText,
      title: "Documentos PDF",
      description: "Guías descargables, plantillas y recursos de consulta",
      badge: "Popular",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Integración Canvas",
      description: "Acceso directo a tu cuenta de Canvas para diseño empresarial",
      badge: "Exclusivo",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Calculator,
      title: "Herramientas Contables",
      description: "Calculadoras especializadas y plantillas de contabilidad",
      badge: "Pro",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Gift,
      title: "Sistema de Referidos",
      description: "Gana descuentos invitando amigos. ¡Hasta mensualidades gratis!",
      badge: "💰",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Gestión Multi-Usuario",
      description: "Roles de empresa y administración con permisos personalizados",
      badge: "Enterprise",
      color: "from-slate-500 to-gray-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700">
            Características Premium
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Todo lo que necesitas para
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              {" "}crecer profesionalmente
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Una plataforma completa con herramientas avanzadas, contenido premium y un sistema único de referidos que te permite ganar mientras aprendes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <BookOpen className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">¿Listo para transformar tu carrera?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Únete a miles de profesionales que ya están dominando la contabilidad y diseño empresarial con nuestra plataforma.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>Crecimiento garantizado</span>
              </div>
              <div className="flex items-center space-x-2">
                <Gift className="w-4 h-4" />
                <span>Sistema de referidos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Comunidad activa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
