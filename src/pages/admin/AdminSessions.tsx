
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  CalendarDays, 
  Clock, 
  Users, 
  Video, 
  Plus, 
  Edit, 
  Trash2,
  Play,
  Pause,
  UserCheck,
  MessageCircle,
  BarChart3
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const AdminSessions = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || user?.role !== 'admin')) {
      navigate('/');
    }
  }, [isAuthenticated, isLoading, user, navigate]);

  const sessions = [
    {
      id: 1,
      title: "Introducción a Estados Financieros",
      course: "Contabilidad Avanzada",
      instructor: "María González",
      date: "2024-07-15",
      time: "10:00",
      duration: 90,
      attendees: 45,
      maxAttendees: 50,
      status: "scheduled",
      type: "live",
      recording: false
    },
    {
      id: 2,
      title: "Diseño de Logo Empresarial",
      course: "Diseño Corporativo",
      instructor: "Carlos Ruiz",
      date: "2024-07-15",
      time: "14:00",
      duration: 120,
      attendees: 32,
      maxAttendees: 40,
      status: "in-progress",
      type: "live",
      recording: true
    },
    {
      id: 3,
      title: "Análisis de Ratios Financieros",
      course: "Contabilidad Avanzada",
      instructor: "Pedro López",
      date: "2024-07-16",
      time: "16:00",
      duration: 75,
      attendees: 28,
      maxAttendees: 35,
      status: "completed",
      type: "recorded",
      recording: true
    },
    {
      id: 4,
      title: "Branding y Posicionamiento",
      course: "Marketing Digital",
      instructor: "Ana Martínez",
      date: "2024-07-17",
      time: "11:00",
      duration: 100,
      attendees: 0,
      maxAttendees: 60,
      status: "scheduled",
      type: "live",
      recording: false
    }
  ];

  const handleCreateSession = () => {
    toast({
      title: "Sesión creada",
      description: "La nueva sesión ha sido programada exitosamente.",
    });
  };

  const handleStartSession = (sessionId: number) => {
    toast({
      title: "Sesión iniciada",
      description: "La sesión en vivo ha comenzado.",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'scheduled': return 'Programada';
      case 'in-progress': return 'En Vivo';
      case 'completed': return 'Completada';
      case 'cancelled': return 'Cancelada';
      default: return 'Desconocido';
    }
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
                  <h1 className="text-2xl font-bold text-gray-900">Gestión de Sesiones</h1>
                  <p className="text-gray-600">Administra clases en vivo y grabadas</p>
                </div>
              </div>
              <Button onClick={handleCreateSession}>
                <Plus className="w-4 h-4 mr-2" />
                Nueva Sesión
              </Button>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Sesiones Hoy</p>
                      <p className="text-3xl font-bold text-gray-900">4</p>
                    </div>
                    <CalendarDays className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">En Vivo Ahora</p>
                      <p className="text-3xl font-bold text-gray-900">1</p>
                    </div>
                    <Video className="w-8 h-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Participantes Totales</p>
                      <p className="text-3xl font-bold text-gray-900">105</p>
                    </div>
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Promedio Asistencia</p>
                      <p className="text-3xl font-bold text-gray-900">87%</p>
                    </div>
                    <BarChart3 className="w-8 h-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Calendar */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Calendario</CardTitle>
                  <CardDescription>Selecciona una fecha</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              {/* Sessions List */}
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Sesiones Programadas</CardTitle>
                  <CardDescription>Gestiona tus clases y webinars</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sessions.map((session) => (
                      <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            {session.type === 'live' ? (
                              <Video className="w-6 h-6 text-blue-600" />
                            ) : (
                              <Play className="w-6 h-6 text-gray-600" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-semibold text-gray-900">{session.title}</h3>
                              <Badge className={getStatusColor(session.status)}>
                                {getStatusText(session.status)}
                              </Badge>
                              {session.recording && (
                                <Badge variant="outline" className="text-red-600">
                                  🔴 Grabando
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span>{session.course}</span>
                              <span>•</span>
                              <span>{session.instructor}</span>
                              <span>•</span>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{session.date} - {session.time}</span>
                              </div>
                              <span>•</span>
                              <div className="flex items-center space-x-1">
                                <Users className="w-3 h-3" />
                                <span>{session.attendees}/{session.maxAttendees}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {session.status === 'scheduled' && (
                            <Button size="sm" onClick={() => handleStartSession(session.id)}>
                              <Play className="w-3 h-3 mr-1" />
                              Iniciar
                            </Button>
                          )}
                          {session.status === 'in-progress' && (
                            <Button size="sm" variant="destructive">
                              <Pause className="w-3 h-3 mr-1" />
                              Finalizar
                            </Button>
                          )}
                          <Button size="sm" variant="outline">
                            <UserCheck className="w-3 h-3 mr-1" />
                            Participantes
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageCircle className="w-3 h-3 mr-1" />
                            Chat
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Session Creation Form */}
            <Card>
              <CardHeader>
                <CardTitle>Crear Nueva Sesión</CardTitle>
                <CardDescription>Programa una nueva clase o webinar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Título de la Sesión</label>
                    <Input placeholder="Ej: Introducción a React" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Curso</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar curso" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="contabilidad">Contabilidad Avanzada</SelectItem>
                        <SelectItem value="diseno">Diseño Corporativo</SelectItem>
                        <SelectItem value="marketing">Marketing Digital</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Fecha</label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Hora</label>
                    <Input type="time" />
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Crear Sesión
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

export default AdminSessions;
