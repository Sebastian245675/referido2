
import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Award, 
  Download, 
  Share2, 
  Eye, 
  Search,
  Calendar,
  CheckCircle,
  Clock,
  Star,
  Trophy,
  Medal,
  Printer,
  ExternalLink,
  Linkedin,
  Mail
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Certificates = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const certificates = [
    {
      id: 1,
      title: "Certificado en Contabilidad Básica Empresarial",
      course: "Contabilidad Básica",
      issueDate: "15 de Marzo, 2024",
      grade: 92,
      credentialId: "CB-2024-001247",
      status: "completed",
      hours: 40,
      skills: ["Contabilidad General", "Estados Financieros", "Análisis de Cuentas"],
      verificationUrl: "https://verify.contableapp.com/CB-2024-001247",
      instructor: "María González",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Especialización en Diseño Corporativo",
      course: "Diseño Corporativo",
      issueDate: "8 de Marzo, 2024",
      grade: 96,
      credentialId: "DC-2024-001156",
      status: "completed",
      hours: 35,
      skills: ["Identidad Visual", "Branding", "Diseño Digital"],
      verificationUrl: "https://verify.contableapp.com/DC-2024-001156",
      instructor: "Carlos Ruiz",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Estados Financieros Avanzados",
      course: "Estados Financieros",
      issueDate: null,
      grade: 78,
      credentialId: "EF-2024-001389",
      status: "in-progress",
      hours: 45,
      progress: 85,
      skills: ["Análisis Financiero", "Ratios", "Interpretación"],
      instructor: "Ana López",
      image: "/placeholder.svg"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Estudiante Destacado",
      description: "Completaste 3 cursos con calificación superior a 90%",
      icon: Trophy,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      earned: true,
      date: "Marzo 2024"
    },
    {
      id: 2,
      title: "Aprendiz Constante",
      description: "30 días consecutivos de actividad en la plataforma",
      icon: Medal,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      earned: true,
      date: "Febrero 2024"
    },
    {
      id: 3,
      title: "Experto en Contabilidad",
      description: "Completa todos los cursos de contabilidad disponibles",
      icon: Star,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      earned: false,
      progress: 66
    }
  ];

  const filteredCertificates = certificates.filter(cert =>
    cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                  <h1 className="text-2xl font-bold text-gray-900">Certificados y Logros</h1>
                  <p className="text-gray-600">Tus certificaciones y reconocimientos obtenidos</p>
                </div>
              </div>
            </div>
          </header>

          <div className="p-6 space-y-8">
            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-gray-900">2</p>
                  <p className="text-sm text-gray-600">Certificados Obtenidos</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-gray-900">1</p>
                  <p className="text-sm text-gray-600">En Progreso</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Trophy className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-gray-900">2</p>
                  <p className="text-sm text-gray-600">Logros Desbloqueados</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Star className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-gray-900">94%</p>
                  <p className="text-sm text-gray-600">Calificación Promedio</p>
                </CardContent>
              </Card>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar certificados..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 max-w-md"
              />
            </div>

            {/* Certificates Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Mis Certificados</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredCertificates.map((cert) => (
                  <Card key={cert.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{cert.title}</CardTitle>
                        <Badge variant={cert.status === 'completed' ? 'default' : 'secondary'}>
                          {cert.status === 'completed' ? 'Completado' : 'En Progreso'}
                        </Badge>
                      </div>
                      <CardDescription>{cert.course}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {cert.status === 'completed' ? (
                        <>
                          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-2 border-dashed border-blue-200">
                            <div className="flex items-center justify-center mb-3">
                              <Award className="w-12 h-12 text-blue-600" />
                            </div>
                            <div className="text-center space-y-2">
                              <p className="font-semibold text-gray-900">Certificado Oficial</p>
                              <p className="text-sm text-gray-600">Expedido el {cert.issueDate}</p>
                              <Badge className="bg-green-600">Calificación: {cert.grade}%</Badge>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="font-medium text-gray-700">Duración</p>
                              <p className="text-gray-600">{cert.hours} horas</p>
                            </div>
                            <div>
                              <p className="font-medium text-gray-700">ID de Credencial</p>
                              <p className="text-gray-600 text-xs">{cert.credentialId}</p>
                            </div>
                            <div className="col-span-2">
                              <p className="font-medium text-gray-700 mb-2">Habilidades Certificadas</p>
                              <div className="flex flex-wrap gap-1">
                                {cert.skills.map((skill, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <Button size="sm">
                              <Download className="w-4 h-4 mr-2" />
                              Descargar PDF
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4 mr-2" />
                              Ver Certificado
                            </Button>
                            <Button size="sm" variant="outline">
                              <Share2 className="w-4 h-4 mr-2" />
                              Compartir
                            </Button>
                            <Button size="sm" variant="outline">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Verificar
                            </Button>
                          </div>

                          <div className="pt-3 border-t">
                            <p className="text-xs text-gray-500">
                              Instructor: {cert.instructor} | Verificación: {cert.verificationUrl}
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium">Progreso del Curso</p>
                              <p className="text-sm text-gray-600">{cert.progress}%</p>
                            </div>
                            <Progress value={cert.progress} className="h-2" />
                          </div>

                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="font-medium text-gray-700">Calificación Actual</p>
                              <p className="text-gray-600">{cert.grade}%</p>
                            </div>
                            <div>
                              <p className="font-medium text-gray-700">Duración Total</p>
                              <p className="text-gray-600">{cert.hours} horas</p>
                            </div>
                          </div>

                          <Button className="w-full" variant="outline">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Continuar Curso
                          </Button>
                        </>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Logros y Reconocimientos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement) => (
                  <Card key={achievement.id} className={`hover:shadow-md transition-shadow ${!achievement.earned ? 'opacity-75' : ''}`}>
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 rounded-full ${achievement.bgColor} flex items-center justify-center mx-auto mb-4`}>
                        <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{achievement.description}</p>
                      
                      {achievement.earned ? (
                        <div className="space-y-2">
                          <Badge className="bg-green-600">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Desbloqueado
                          </Badge>
                          <p className="text-xs text-gray-500">{achievement.date}</p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Badge variant="outline">En Progreso</Badge>
                          {achievement.progress && (
                            <div className="space-y-1">
                              <Progress value={achievement.progress} className="h-2" />
                              <p className="text-xs text-gray-500">{achievement.progress}% completado</p>
                            </div>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sharing Options */}
            <Card>
              <CardHeader>
                <CardTitle>Comparte tus Logros</CardTitle>
                <CardDescription>Muestra tus certificaciones en redes profesionales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Agregar a LinkedIn
                  </Button>
                  <Button variant="outline">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar por Email
                  </Button>
                  <Button variant="outline">
                    <Printer className="w-4 h-4 mr-2" />
                    Imprimir Certificados
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Certificates;
