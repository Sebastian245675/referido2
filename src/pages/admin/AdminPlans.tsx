
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Crown, 
  Star, 
  Zap, 
  Plus, 
  Edit, 
  Trash2, 
  Settings,
  Users,
  DollarSign,
  Calendar,
  CheckCircle,
  XCircle
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const AdminPlans = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || user?.role !== 'admin')) {
      navigate('/');
    }
  }, [isAuthenticated, isLoading, user, navigate]);

  const [plans, setPlans] = useState([
    {
      id: 1,
      name: "Básico",
      price: 29.99,
      description: "Plan perfecto para empresas pequeñas",
      features: ["5 Cursos", "Soporte Email", "1 Usuario"],
      maxUsers: 1,
      maxCourses: 5,
      isActive: true,
      subscribers: 156,
      monthlyRevenue: 4678.44,
      color: "blue"
    },
    {
      id: 2,
      name: "Premium",
      price: 59.99,
      description: "Plan avanzado para empresas en crecimiento",
      features: ["Cursos Ilimitados", "Soporte 24/7", "5 Usuarios", "Canvas Integrado"],
      maxUsers: 5,
      maxCourses: -1,
      isActive: true,
      subscribers: 423,
      monthlyRevenue: 25376.77,
      color: "purple"
    },
    {
      id: 3,
      name: "Enterprise",
      price: 99.99,
      description: "Solución completa para grandes empresas",
      features: ["Todo Ilimitado", "Soporte Dedicado", "Usuarios Ilimitados", "API Access"],
      maxUsers: -1,
      maxCourses: -1,
      isActive: true,
      subscribers: 89,
      monthlyRevenue: 8899.11,
      color: "gold"
    }
  ]);

  const [editingPlan, setEditingPlan] = useState(null);
  const [showNewPlan, setShowNewPlan] = useState(false);

  const handleCreatePlan = () => {
    toast({
      title: "Plan creado",
      description: "El nuevo plan ha sido creado exitosamente.",
    });
    setShowNewPlan(false);
  };

  const handleUpdatePlan = (planId: number) => {
    toast({
      title: "Plan actualizado",
      description: "Los cambios han sido guardados.",
    });
    setEditingPlan(null);
  };

  const handleTogglePlan = (planId: number) => {
    setPlans(plans.map(plan => 
      plan.id === planId ? { ...plan, isActive: !plan.isActive } : plan
    ));
    toast({
      title: "Estado actualizado",
      description: "El estado del plan ha sido modificado.",
    });
  };

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Cargando...</div>;
  }

  if (!isAuthenticated || user?.role !== 'admin') {
    return null;
  }

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
                  <h1 className="text-2xl font-bold text-gray-900">Gestión de Planes</h1>
                  <p className="text-gray-600">Administra los planes de suscripción</p>
                </div>
              </div>
              <Button onClick={() => setShowNewPlan(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Nuevo Plan
              </Button>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {/* Revenue Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Ingresos Mensuales</p>
                      <p className="text-3xl font-bold text-gray-900">$38,954</p>
                    </div>
                    <DollarSign className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Suscriptores Totales</p>
                      <p className="text-3xl font-bold text-gray-900">668</p>
                    </div>
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Planes Activos</p>
                      <p className="text-3xl font-bold text-gray-900">3</p>
                    </div>
                    <Settings className="w-8 h-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Tasa Conversión</p>
                      <p className="text-3xl font-bold text-gray-900">12.5%</p>
                    </div>
                    <Star className="w-8 h-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Plans Management */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <Card key={plan.id} className="relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    plan.color === 'blue' ? 'from-blue-400 to-blue-600' :
                    plan.color === 'purple' ? 'from-purple-400 to-purple-600' :
                    'from-yellow-400 to-yellow-600'
                  }`}></div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {plan.color === 'blue' && <Zap className="w-5 h-5 text-blue-600" />}
                        {plan.color === 'purple' && <Crown className="w-5 h-5 text-purple-600" />}
                        {plan.color === 'gold' && <Star className="w-5 h-5 text-yellow-600" />}
                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch 
                          checked={plan.isActive}
                          onCheckedChange={() => handleTogglePlan(plan.id)}
                        />
                        {plan.isActive ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-600" />
                        )}
                      </div>
                    </div>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-3xl font-bold">${plan.price}</span>
                      <span className="text-gray-600">/mes</span>
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">{plan.subscribers}</p>
                        <p className="text-xs text-gray-600">Suscriptores</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">${plan.monthlyRevenue.toFixed(0)}</p>
                        <p className="text-xs text-gray-600">Ingresos/mes</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="w-3 h-3 mr-1" />
                        Editar
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 text-red-600">
                        <Trash2 className="w-3 h-3 mr-1" />
                        Eliminar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Plan Creation Form */}
            {showNewPlan && (
              <Card>
                <CardHeader>
                  <CardTitle>Crear Nuevo Plan</CardTitle>
                  <CardDescription>Define los detalles del nuevo plan de suscripción</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="planName">Nombre del Plan</Label>
                      <Input id="planName" placeholder="Ej: Plan Pro" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="planPrice">Precio Mensual ($)</Label>
                      <Input id="planPrice" type="number" placeholder="49.99" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="planDescription">Descripción</Label>
                    <Textarea id="planDescription" placeholder="Describe las características del plan..." />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="maxUsers">Máximo de Usuarios (-1 = ilimitado)</Label>
                      <Input id="maxUsers" type="number" placeholder="10" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="maxCourses">Máximo de Cursos (-1 = ilimitado)</Label>
                      <Input id="maxCourses" type="number" placeholder="50" />
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setShowNewPlan(false)}>
                      Cancelar
                    </Button>
                    <Button onClick={handleCreatePlan}>
                      Crear Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminPlans;
