
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  Crown, 
  Star, 
  Zap,
  CreditCard,
  Calendar,
  Gift
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Subscription = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Cargando...</div>;
  }

  if (!isAuthenticated) {
    return null;
  }

  const plans = [
    {
      name: "Básico",
      price: "$29",
      period: "/mes",
      description: "Perfecto para emprendedores",
      features: [
        "Acceso a 20 cursos básicos",
        "Material descargable",
        "Soporte por email",
        "Certificados digitales"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "$59",
      period: "/mes",
      description: "Para empresas en crecimiento",
      features: [
        "Acceso ilimitado a todos los cursos",
        "Material descargable premium",
        "Soporte prioritario 24/7",
        "Certificados premium",
        "Acceso a Canvas empresarial",
        "Sesiones 1-a-1 mensuales"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/mes",
      description: "Para grandes organizaciones",
      features: [
        "Todo lo de Premium",
        "Cursos personalizados",
        "Gestor de cuenta dedicado",
        "Análisis avanzado",
        "Integración con sistemas",
        "Capacitación en sitio"
      ],
      popular: false
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        
        <main className="flex-1">
          <header className="bg-white border-b px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <SidebarTrigger />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Gestionar Suscripción</h1>
                  <p className="text-gray-600">Administra tu plan y facturación</p>
                </div>
              </div>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {/* Current Plan */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Crown className="w-5 h-5 text-yellow-600" />
                  <span>Plan Actual</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Plan {user?.subscription?.plan}</h3>
                    <p className="text-gray-600">Renovación: {user?.subscription?.expiresAt}</p>
                    <Badge variant="default" className="mt-2">
                      {user?.subscription?.status === 'active' ? 'Activo' : 'Inactivo'}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">$59<span className="text-sm font-normal">/mes</span></p>
                    <Button variant="outline" className="mt-2">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Actualizar Pago
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Usage Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Cursos Completados</p>
                      <p className="text-2xl font-bold text-gray-900">12</p>
                    </div>
                    <Star className="w-8 h-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Horas de Estudio</p>
                      <p className="text-2xl font-bold text-gray-900">48</p>
                    </div>
                    <Calendar className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Referidos Activos</p>
                      <p className="text-2xl font-bold text-gray-900">8</p>
                    </div>
                    <Gift className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Available Plans */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Cambiar Plan</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan, index) => (
                  <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-blue-600' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-blue-600 text-white">
                          <Zap className="w-3 h-3 mr-1" />
                          Más Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600">{plan.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <Check className="w-4 h-4 text-green-600 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className="w-full" 
                        variant={plan.name === user?.subscription?.plan ? "outline" : plan.popular ? "default" : "outline"}
                        disabled={plan.name === user?.subscription?.plan}
                      >
                        {plan.name === user?.subscription?.plan ? "Plan Actual" : "Cambiar Plan"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Subscription;
