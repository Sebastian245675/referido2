
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  BookOpen, 
  Activity,
  Calendar,
  Download,
  Eye,
  Clock
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { useAuth } from "@/contexts/AuthContext";

const AdminAnalytics = () => {
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

  const monthlyData = [
    { month: 'Ene', usuarios: 120, ingresos: 4500, cursos: 8 },
    { month: 'Feb', usuarios: 145, ingresos: 5200, cursos: 12 },
    { month: 'Mar', usuarios: 162, ingresos: 6100, cursos: 15 },
    { month: 'Abr', usuarios: 178, ingresos: 6800, cursos: 18 },
    { month: 'May', usuarios: 195, ingresos: 7500, cursos: 22 },
    { month: 'Jun', usuarios: 218, ingresos: 8200, cursos: 25 },
  ];

  const courseData = [
    { categoria: 'Contabilidad', cursos: 25, estudiantes: 890 },
    { categoria: 'Diseño', cursos: 18, estudiantes: 654 },
    { categoria: 'Marketing', cursos: 15, estudiantes: 432 },
    { categoria: 'Finanzas', cursos: 12, estudiantes: 321 },
    { categoria: 'Legal', cursos: 8, estudiantes: 198 },
  ];

  const subscriptionData = [
    { name: 'Básico', value: 45, color: '#8884d8' },
    { name: 'Premium', value: 40, color: '#82ca9d' },
    { name: 'Enterprise', value: 15, color: '#ffc658' },
  ];

  const topCourses = [
    { name: 'Contabilidad Básica', students: 234, completion: 85, revenue: 5460 },
    { name: 'Diseño de Marca', students: 189, completion: 78, revenue: 4410 },
    { name: 'Estados Financieros', students: 156, completion: 92, revenue: 3640 },
    { name: 'Marketing Digital', students: 312, completion: 65, revenue: 7280 },
    { name: 'Finanzas Corporativas', students: 87, completion: 88, revenue: 2030 },
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
                  <h1 className="text-2xl font-bold text-gray-900">Analíticas y Reportes</h1>
                  <p className="text-gray-600">Métricas de rendimiento de la plataforma</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Últimos 30 días
                </Button>
                <Button>
                  <Download className="w-4 h-4 mr-2" />
                  Exportar Reporte
                </Button>
              </div>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Ingresos Totales</p>
                      <p className="text-3xl font-bold text-gray-900">$24,500</p>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                        <span className="text-sm text-green-600 font-medium">+18%</span>
                      </div>
                    </div>
                    <DollarSign className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Usuarios Activos</p>
                      <p className="text-3xl font-bold text-gray-900">1,189</p>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                        <span className="text-sm text-green-600 font-medium">+12%</span>
                      </div>
                    </div>
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Cursos Completados</p>
                      <p className="text-3xl font-bold text-gray-900">2,456</p>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                        <span className="text-sm text-green-600 font-medium">+25%</span>
                      </div>
                    </div>
                    <BookOpen className="w-8 h-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Tasa de Conversión</p>
                      <p className="text-3xl font-bold text-gray-900">3.2%</p>
                      <div className="flex items-center mt-2">
                        <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
                        <span className="text-sm text-red-600 font-medium">-0.5%</span>
                      </div>
                    </div>
                    <Activity className="w-8 h-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Evolución de Ingresos</CardTitle>
                  <CardDescription>Ingresos mensuales por los últimos 6 meses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value}`, 'Ingresos']} />
                      <Line type="monotone" dataKey="ingresos" stroke="#3b82f6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Users Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Crecimiento de Usuarios</CardTitle>
                  <CardDescription>Nuevos usuarios registrados mensualmente</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => [value, 'Nuevos Usuarios']} />
                      <Bar dataKey="usuarios" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Second Row Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Categories Performance */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Rendimiento por Categoría</CardTitle>
                  <CardDescription>Cursos y estudiantes por categoría</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={courseData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="categoria" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="estudiantes" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Subscription Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Distribución de Suscripciones</CardTitle>
                  <CardDescription>Porcentaje por tipo de plan</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={subscriptionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        dataKey="value"
                      >
                        {subscriptionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, 'Porcentaje']} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="mt-4 space-y-2">
                    {subscriptionData.map((entry, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
                          <span>{entry.name}</span>
                        </div>
                        <span className="font-medium">{entry.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Courses Table */}
            <Card>
              <CardHeader>
                <CardTitle>Cursos Más Exitosos</CardTitle>
                <CardDescription>Ranking de cursos por rendimiento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topCourses.map((course, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-blue-600">#{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{course.name}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <div className="flex items-center space-x-1">
                              <Users className="w-3 h-3" />
                              <span>{course.students} estudiantes</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Activity className="w-3 h-3" />
                              <span>{course.completion}% completado</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <DollarSign className="w-3 h-3" />
                              <span>${course.revenue.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">
                          {course.completion >= 80 ? 'Excelente' : course.completion >= 60 ? 'Bueno' : 'Regular'}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Eye className="w-3 h-3 mr-1" />
                          Ver Detalles
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

export default AdminAnalytics;
