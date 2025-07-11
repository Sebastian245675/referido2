
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  BookOpen, 
  FileText, 
  Video,
  TrendingUp,
  DollarSign,
  Activity,
  AlertCircle,
  Plus,
  Eye,
  Edit
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const AdminDashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || user?.role !== 'admin')) {
      navigate('/');
    }
  }, [isAuthenticated, isLoading, user, navigate]);

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Cargando...</div>;
  }

  if (!isAuthenticated || user?.role !== 'admin') {
    return null;
  }

  const adminStats = [
    { title: "Total Usuarios", value: "1,247", change: "+12%", icon: Users, color: "text-blue-600" },
    { title: "Cursos Activos", value: "89", change: "+5%", icon: BookOpen, color: "text-green-600" },
    { title: "Ingresos Mensuales", value: "$24,500", change: "+18%", icon: DollarSign, color: "text-yellow-600" },
    { title: "Tasa de Conversión", value: "3.2%", change: "+0.5%", icon: TrendingUp, color: "text-purple-600" },
  ];

  const recentActivity = [
    { type: 'user', message: 'Nuevo usuario registrado: María González', time: 'Hace 5 min' },
    { type: 'course', message: 'Curso "Contabilidad Avanzada" completado por 12 usuarios', time: 'Hace 15 min' },
    { type: 'payment', message: 'Pago recibido: Plan Premium - $99', time: 'Hace 30 min' },
    { type: 'referral', message: 'Referido exitoso: Carlos Ruiz → Ana López', time: 'Hace 1 hora' },
  ];

  const popularCourses = [
    { title: 'Contabilidad Básica', students: 234, completion: 85, revenue: '$5,460' },
    { title: 'Diseño de Marca', students: 189, completion: 78, revenue: '$4,410' },
    { title: 'Estados Financieros', students: 156, completion: 92, revenue: '$3,640' },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        
        <main className="flex-1">
          {/* Header */}
          <header className="bg-white border-b px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <SidebarTrigger />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Panel de Administración</h1>
                  <p className="text-gray-600">Gestiona tu plataforma educativa</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Button onClick={() => navigate('/admin/content')}>
                  <Plus className="w-4 h-4 mr-2" />
                  Nuevo Contenido
                </Button>
                <Button variant="outline" onClick={() => navigate('/admin/users')}>
                  <Users className="w-4 h-4 mr-2" />
                  Gestionar Usuarios
                </Button>
              </div>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {adminStats.map((stat, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                      </div>
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Activity */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="w-5 h-5" />
                    <span>Actividad Reciente</span>
                  </CardTitle>
                  <CardDescription>
                    Últimas acciones en la plataforma
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">{activity.message}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Acciones Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" onClick={() => navigate('/admin/courses')}>
                    <BookOpen className="w-4 h-4 mr-2" />
                    Gestionar Cursos
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/admin/content')}>
                    <Video className="w-4 h-4 mr-2" />
                    Subir Contenido
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/admin/analytics')}>
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Ver Analíticas
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/admin/users')}>
                    <Users className="w-4 h-4 mr-2" />
                    Usuarios
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Popular Courses */}
            <Card>
              <CardHeader>
                <CardTitle>Cursos Más Populares</CardTitle>
                <CardDescription>Rendimiento de los cursos principales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {popularCourses.map((course, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{course.title}</h3>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                          <span>{course.students} estudiantes</span>
                          <span>{course.completion}% completado</span>
                          <span className="font-medium text-green-600">{course.revenue}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
