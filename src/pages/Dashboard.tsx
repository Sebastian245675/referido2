
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Play, 
  FileText, 
  Award, 
  TrendingUp,
  Calendar,
  Clock,
  Users,
  Gift
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Dashboard = () => {
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

  const recentCourses = [
    { id: 1, title: "Contabilidad Básica", progress: 75, lastAccessed: "Hace 2 horas", type: "video" },
    { id: 2, title: "Estados Financieros", progress: 45, lastAccessed: "Ayer", type: "pdf" },
    { id: 3, title: "Diseño de Marca", progress: 90, lastAccessed: "Hace 3 días", type: "canvas" },
  ];

  const stats = [
    { title: "Cursos Completados", value: "12", icon: Award, color: "text-green-600" },
    { title: "Horas de Estudio", value: "48", icon: Clock, color: "text-blue-600" },
    { title: "Certificaciones", value: "3", icon: BookOpen, color: "text-purple-600" },
    { title: "Referidos Activos", value: "8", icon: Users, color: "text-orange-600" },
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
                  <h1 className="text-2xl font-bold text-gray-900">
                    ¡Bienvenido, {user?.name}!
                  </h1>
                  <p className="text-gray-600">Continúa tu aprendizaje donde lo dejaste</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Badge variant="outline" className="text-green-600 border-green-600">
                  {user?.subscription?.plan} Activo
                </Badge>
                <Button onClick={() => navigate('/referrals')}>
                  <Gift className="w-4 h-4 mr-2" />
                  Invitar Amigos
                </Button>
              </div>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Continue Learning */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5" />
                    <span>Continuar Aprendiendo</span>
                  </CardTitle>
                  <CardDescription>
                    Retoma tus cursos donde los dejaste
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentCourses.map((course) => (
                    <div key={course.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        {course.type === 'video' && <Play className="w-6 h-6 text-blue-600" />}
                        {course.type === 'pdf' && <FileText className="w-6 h-6 text-blue-600" />}
                        {course.type === 'canvas' && <Award className="w-6 h-6 text-blue-600" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{course.title}</h3>
                        <p className="text-sm text-gray-600">Último acceso: {course.lastAccessed}</p>
                        <div className="mt-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Progreso</span>
                            <span className="font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="mt-1" />
                        </div>
                      </div>
                      <Button size="sm">Continuar</Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Acciones Rápidas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start" onClick={() => navigate('/courses')}>
                      <BookOpen className="w-4 h-4 mr-2" />
                      Explorar Cursos
                    </Button>
                    <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/referrals')}>
                      <Gift className="w-4 h-4 mr-2" />
                      Programa de Referidos
                    </Button>
                    <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/subscription')}>
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Mejorar Plan
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tu Progreso</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm">
                          <span>Contabilidad</span>
                          <span>75%</span>
                        </div>
                        <Progress value={75} className="mt-1" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm">
                          <span>Diseño Empresarial</span>
                          <span>60%</span>
                        </div>
                        <Progress value={60} className="mt-1" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm">
                          <span>Finanzas</span>
                          <span>40%</span>
                        </div>
                        <Progress value={40} className="mt-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
