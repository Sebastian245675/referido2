
import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { 
  Download, 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  PieChart, 
  Clock,
  BookOpen,
  Award,
  Calendar,
  Filter,
  FileSpreadsheet,
  Eye
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Reports = () => {
  const [dateRange, setDateRange] = useState({ from: undefined, to: undefined });
  const [selectedCourse, setSelectedCourse] = useState("all");

  const progressReports = [
    {
      id: 1,
      course: "Contabilidad Básica",
      completed: 85,
      timeSpent: "24h 30m",
      exercises: "15/18",
      lastActivity: "Hace 2 horas",
      certificate: true,
      grade: 92
    },
    {
      id: 2,
      course: "Estados Financieros",
      completed: 60,
      timeSpent: "18h 15m",
      exercises: "8/12",
      lastActivity: "Ayer",
      certificate: false,
      grade: 78
    },
    {
      id: 3,
      course: "Diseño Corporativo",
      completed: 100,
      timeSpent: "32h 45m",
      exercises: "20/20",
      lastActivity: "Hace 3 días",
      certificate: true,
      grade: 96
    }
  ];

  const performanceMetrics = [
    { label: "Cursos Completados", value: "3", change: "+2", trend: "up" },
    { label: "Promedio General", value: "88.7%", change: "+5.2%", trend: "up" },
    { label: "Tiempo Total", value: "75h 30m", change: "+12h", trend: "up" },
    { label: "Certificados", value: "2", change: "+1", trend: "up" },
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
                  <h1 className="text-2xl font-bold text-gray-900">Reportes de Progreso</h1>
                  <p className="text-gray-600">Analiza tu rendimiento académico y evolución</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Exportar PDF
                </Button>
                <Button variant="outline">
                  <FileSpreadsheet className="w-4 h-4 mr-2" />
                  Exportar Excel
                </Button>
              </div>
            </div>
          </header>

          <div className="p-6">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Resumen General</TabsTrigger>
                <TabsTrigger value="courses">Por Cursos</TabsTrigger>
                <TabsTrigger value="time">Análisis Temporal</TabsTrigger>
                <TabsTrigger value="performance">Rendimiento</TabsTrigger>
              </TabsList>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 p-4 bg-white rounded-lg border">
                
                <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Seleccionar curso" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los cursos</SelectItem>
                    <SelectItem value="contabilidad">Contabilidad Básica</SelectItem>
                    <SelectItem value="finanzas">Estados Financieros</SelectItem>
                    <SelectItem value="diseno">Diseño Corporativo</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Más Filtros
                </Button>
              </div>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                {/* Performance Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {performanceMetrics.map((metric, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                            <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
                            <div className="flex items-center mt-2">
                              {metric.trend === 'up' ? (
                                <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                              ) : (
                                <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
                              )}
                              <span className={`text-sm ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                                {metric.change}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Progress Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="w-5 h-5" />
                      <span>Progreso por Curso</span>
                    </CardTitle>
                    <CardDescription>Evolución de tu aprendizaje</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {progressReports.map((course) => (
                        <div key={course.id} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <BookOpen className="w-5 h-5 text-blue-600" />
                              <span className="font-medium">{course.course}</span>
                              {course.certificate && (
                                <Badge variant="outline" className="text-green-600">
                                  <Award className="w-3 h-3 mr-1" />
                                  Certificado
                                </Badge>
                              )}
                            </div>
                            <span className="text-sm font-medium text-gray-900">{course.completed}%</span>
                          </div>
                          <Progress value={course.completed} className="h-2" />
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Tiempo: {course.timeSpent}</span>
                            <span>Ejercicios: {course.exercises}</span>
                            <span>Nota: {course.grade}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Courses Tab */}
              <TabsContent value="courses" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {progressReports.map((course) => (
                    <Card key={course.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{course.course}</CardTitle>
                          <Badge variant={course.completed === 100 ? 'default' : 'secondary'}>
                            {course.completed}%
                          </Badge>
                        </div>
                        <Progress value={course.completed} className="h-2" />
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span>{course.timeSpent}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <BookOpen className="w-4 h-4 text-gray-500" />
                            <span>{course.exercises}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Award className="w-4 h-4 text-gray-500" />
                            <span>Nota: {course.grade}%</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            <span>{course.lastActivity}</span>
                          </div>
                        </div>
                        <Button className="w-full" variant="outline">
                          <Eye className="w-4 h-4 mr-2" />
                          Ver Detalles
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Time Analysis Tab */}
              <TabsContent value="time" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Análisis de Tiempo de Estudio</CardTitle>
                    <CardDescription>Distribución de tu tiempo de aprendizaje</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-blue-600">75h</div>
                          <div className="text-sm text-gray-600">Tiempo Total</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600">2.5h</div>
                          <div className="text-sm text-gray-600">Promedio Diario</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-purple-600">18h</div>
                          <div className="text-sm text-gray-600">Esta Semana</div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-3">Distribución por Curso</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Diseño Corporativo</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-32 bg-gray-200 rounded-full h-2">
                                <div className="bg-purple-600 h-2 rounded-full" style={{width: '43%'}}></div>
                              </div>
                              <span className="text-sm font-medium">32h 45m</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Contabilidad Básica</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-32 bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-600 h-2 rounded-full" style={{width: '33%'}}></div>
                              </div>
                              <span className="text-sm font-medium">24h 30m</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Estados Financieros</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-32 bg-gray-200 rounded-full h-2">
                                <div className="bg-green-600 h-2 rounded-full" style={{width: '24%'}}></div>
                              </div>
                              <span className="text-sm font-medium">18h 15m</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Performance Tab */}
              <TabsContent value="performance" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Evolución de Calificaciones</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <span className="font-medium">Diseño Corporativo</span>
                          <Badge className="bg-green-600">96%</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium">Contabilidad Básica</span>
                          <Badge className="bg-blue-600">92%</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                          <span className="font-medium">Estados Financieros</span>
                          <Badge className="bg-yellow-600">78%</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Fortalezas y Áreas de Mejora</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-green-600 mb-2">Fortalezas</h4>
                          <ul className="text-sm space-y-1 text-gray-600">
                            <li>• Excelente en ejercicios prácticos</li>
                            <li>• Constante en el estudio diario</li>
                            <li>• Dominio de herramientas de diseño</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-yellow-600 mb-2">Áreas de Mejora</h4>
                          <ul className="text-sm space-y-1 text-gray-600">
                            <li>• Conceptos teóricos avanzados</li>
                            <li>• Participación en foros</li>
                            <li>• Tiempo de finalización de cursos</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Reports;
