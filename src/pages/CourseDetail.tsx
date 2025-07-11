
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Play, 
  FileText, 
  Download, 
  Clock, 
  Users, 
  Star,
  CheckCircle,
  ExternalLink
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const CourseDetail = () => {
  const { id } = useParams();
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

  const courseData = {
    title: "Contabilidad Básica Empresarial",
    description: "Aprende los fundamentos de la contabilidad empresarial con ejemplos prácticos",
    instructor: "María González",
    duration: "8 horas",
    students: 234,
    rating: 4.8,
    progress: 45,
    modules: [
      { id: 1, title: "Introducción a la Contabilidad", type: "video", duration: "45 min", completed: true },
      { id: 2, title: "Estados Financieros Básicos", type: "pdf", duration: "30 min", completed: true },
      { id: 3, title: "Ejercicios Prácticos", type: "canvas", duration: "60 min", completed: false },
      { id: 4, title: "Balance General", type: "video", duration: "40 min", completed: false },
    ]
  };

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
                  <h1 className="text-2xl font-bold text-gray-900">{courseData.title}</h1>
                  <p className="text-gray-600">por {courseData.instructor}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary">
                  {courseData.progress}% Completado
                </Badge>
                <Button>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Abrir Canvas
                </Button>
              </div>
            </div>
          </header>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Descripción del Curso</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{courseData.description}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{courseData.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{courseData.students} estudiantes</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{courseData.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contenido del Curso</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {courseData.modules.map((module) => (
                        <div key={module.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              {module.type === 'video' && <Play className="w-5 h-5 text-blue-600" />}
                              {module.type === 'pdf' && <FileText className="w-5 h-5 text-blue-600" />}
                              {module.type === 'canvas' && <ExternalLink className="w-5 h-5 text-blue-600" />}
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">{module.title}</h3>
                              <p className="text-sm text-gray-500">{module.duration}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {module.completed && (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            )}
                            <Button size="sm" variant={module.completed ? "outline" : "default"}>
                              {module.completed ? "Revisar" : "Comenzar"}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Tu Progreso</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progreso del Curso</span>
                          <span>{courseData.progress}%</span>
                        </div>
                        <Progress value={courseData.progress} />
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>2 de 4 módulos completados</p>
                        <p>Tiempo estimado restante: 3.5 horas</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recursos Adicionales</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      Descargar Materiales
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Acceso a Canvas
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      Certificado
                    </Button>
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

export default CourseDetail;
