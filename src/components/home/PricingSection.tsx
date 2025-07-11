
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Gift, Zap } from "lucide-react";

interface PricingSectionProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export const PricingSection = ({ onOpenAuth }: PricingSectionProps) => {
  const plans = [
    {
      name: "Básico",
      price: "$29",
      period: "/mes",
      description: "Perfecto para comenzar tu aprendizaje",
      features: [
        "Acceso a videos básicos",
        "5 documentos PDF por mes",
        "Soporte por email",
        "Acceso a la comunidad",
        "1 código de referido"
      ],
      buttonText: "Comenzar Básico",
      popular: false,
      color: "from-slate-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$79",
      period: "/mes",
      description: "Para profesionales que buscan destacar",
      features: [
        "Acceso completo a videos HD",
        "Documentos PDF ilimitados",
        "Integración Canvas completa",
        "Herramientas contables avanzadas",
        "Códigos de referido ilimitados",
        "Soporte prioritario 24/7",
        "Certificaciones oficiales",
        "Plantillas premium"
      ],
      buttonText: "Elegir Professional",
      popular: true,
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "/mes",
      description: "Para equipos y empresas grandes",
      features: [
        "Todo de Professional",
        "Gestión multi-usuario",
        "Panel de administración",
        "API access",
        "Capacitación personalizada",
        "Sistema de referidos enterprise",
        "Analíticas avanzadas",
        "Soporte dedicado"
      ],
      buttonText: "Contactar Ventas",
      popular: false,
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-700">
            💰 Sistema de Referidos Incluido
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Planes que se adaptan a
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              {" "}tus necesidades
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Elige el plan perfecto para ti. Todos incluyen nuestro sistema único de referidos 
            que te permite ganar descuentos y hasta mensualidades gratis.
          </p>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Gift className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-green-700">Sistema de Referidos</span>
            </div>
            <p className="text-sm text-slate-600">
              Por cada amigo que refiera, obtén <strong>50% de descuento</strong> en tu próximo pago. 
              ¡Refiere 2 amigos y tu próxima mensualidad es gratis!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-2 border-blue-200 shadow-lg scale-105' 
                  : 'border border-gray-200 hover:border-blue-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-2 text-sm font-semibold">
                  <Star className="w-4 h-4 inline mr-1" />
                  Más Popular
                </div>
              )}
              
              <CardHeader className={`${plan.popular ? 'pt-12' : 'pt-6'}`}>
                <div className="text-center">
                  <CardTitle className="text-2xl font-bold text-slate-800 mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-4xl font-bold text-slate-800">{plan.price}</span>
                    <span className="text-slate-600 ml-1">{plan.period}</span>
                  </div>
                  <CardDescription className="text-slate-600">
                    {plan.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => onOpenAuth('register')}
                  className={`w-full h-12 text-base font-semibold ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800' 
                      : 'bg-gradient-to-r from-slate-600 to-gray-700 hover:from-slate-700 hover:to-gray-800'
                  }`}
                >
                  {plan.buttonText}
                  {plan.popular && <Zap className="ml-2 w-4 h-4" />}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-slate-600 mb-4">
            ¿Necesitas un plan personalizado para tu empresa?
          </p>
          <Button variant="outline" size="lg" className="border-2 border-blue-200 hover:bg-blue-50">
            Contactar para Plan Empresarial
          </Button>
        </div>
      </div>
    </section>
  );
};
