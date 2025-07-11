import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  TrendingUp, 
  Calendar, 
  Clock, 
  Target, 
  Award,
  BookOpen,
  CheckCircle,
  PlayCircle,
  BarChart3,
  Activity,
  Flame,
  Trophy,
  Star,
  Timer,
  Brain
} from "lucide-react";

const ProgressPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  const overallStats = {
    coursesCompleted: 2,
    coursesInProgress: 1,
    totalHours: 75.5,
    averageGrade: 88.7,
    streak: 12,
    weeklyGoal: 8,
    weeklyProgress: 6.5
  };

  const courseProgress = [
    {
      id: 1,
      title: "Contabilidad Básica Empresarial",
      progress: 100,
      status: "completed",
      grade: 92,
      timeSpent: "24h 30m",
      modules: 12,
      completedModules: 12,
      certificate: true,
      nextLesson: null,
      streak: 8,
      lastActivity: "Hace 3 días"
    },
    {
      id: 2,
      title: "Diseño Corporativo",
      progress: 100,
      status: "completed",
      grade: 96,
      timeSpent: "32h 45m",
      modules: 10,
      completedModules: 10,
      certificate: true,
      nextLesson: null,
      streak: 12,
      lastActivity: "Hace 1 semana"
    },
    {
      id: 3,
      title: "Estados Financieros Avanzados",
      progress: 75,
      status: "in-progress",
      grade: 78,
      timeSpent: "18h 15m",
      modules: 15,
      completedModules: 11,
      certificate: false,
      nextLesson: "Módulo 12: Análisis de Ratios",
      streak: 5,
      lastActivity: "Hace 2 horas"
    }
  ];

  const weeklyActivity = [
    { day: "Lun", hours: 2.5, completed: true },
    { day: "Mar", hours: 1.8, completed: true },
    { day: "Mié", hours: 3.2, completed: true },
    { day: "Jue", hours: 0.5, completed: false },
    { day: "Vie", hours: 2.1, completed: true },
    { day: "Sáb", hours: 0, completed: false },
    { day: "Dom", hours: 1.4, completed: true }
  ];

  const achievements = [
    {
      title: "Primera Certificación",
      description: "Obtuviste tu primer certificado",
      icon: Award,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      date: "Hace 2 semanas"
    },
    {
      title: "Racha de 10 días",
      description: "10 días consecutivos estudiando",
      icon: Flame,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      date: "Hace 3 días"
    },
    {
      title: "Estudiante Destacado",
      description: "Promedio superior a 90%",
      icon: Star,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      date: "Hace 1 semana"
    }
  ];

  const skillsProgress = [
    { skill: "Contabilidad General", level: 85, progress: 85 },
    { skill: "Estados Financieros", level: 75, progress: 75 },
    { skill: "Diseño Visual", level: 90, progress: 90 },
    { skill: "Análisis Financiero", level: 60, progress: 60 },
    { skill: "Excel Avanzado", level: 70, progress: 70 }
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
                  <h1 className="text-2xl font-bold text-gray-900">Mi Progreso</h1>
                  <p className="text-gray-600">Seguimiento detallado de tu aprendizaje</p>
                </div>
              </div>
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Esta semana</SelectItem>
                  <SelectItem value="month">Este mes</SelectItem>
                  <SelectItem value="year">Este año</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </header>

          <div className="p-6 space-y-8">
            {/* Overall Progress */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Cursos Completados</p>
                      <p className="text-3xl font-bold text-gray-900">{overallStats.coursesCompleted}</p>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                        <span className="text-sm text-green-600">+1 este mes</span>
                      </div>
                    </div>
                    <Trophy className="w-8 h-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Tiempo Total</p>
                      <p className="text-3xl font-bold text-gray-900">{overallStats.totalHours}h</p>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="w-4 h-4 text-blue-600 mr-1" />
                        <span className="text-sm text-blue-600">+12h esta semana</span>
                      </div>
                    </div>
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Promedio General</p>
                      <p className="text-3xl font-bold text-gray-900">{overallStats.averageGrade}%</p>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                        <span className="text-sm text-green-600">+2.3% mejorado</span>
                      </div>
                    </div>
                    <BarChart3 className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Racha Actual</p>
                      <p className="text-3xl font-bold text-gray-900">{overallStats.streak}</p>
                      <div className="flex items-center mt-2">
                        <Flame className="w-4 h-4 text-orange-600 mr-1" />
                        <span className="text-sm text-orange-600">días consecutivos</span>
                      </div>
                    </div>
                    <Flame className="w-8 h-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Weekly Goal Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  <span>Meta Semanal</span>
                </CardTitle>
                <CardDescription>
                  Progreso hacia tu objetivo de {overallStats.weeklyGoal} horas semanales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      {overallStats.weeklyProgress} de {overallStats.weeklyGoal} horas
                    </span>
                    <span className="text-sm text-gray-600">
                      {Math.round((overallStats.weeklyProgress / overallStats.weeklyGoal) * 100)}%
                    </span>
                  </div>
                  <Progress 
                    value={(overallStats.weeklyProgress / overallStats.weeklyGoal) * 100} 
                    className="h-3"
                  />
                  <div className="grid grid-cols-7 gap-2 mt-4">
                    {weeklyActivity.map((day, index) => (
                      <div key={index} className="text-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium mb-1 ${
                          day.completed ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {day.hours > 0 ? day.hours.toFixed(1) : '0'}
                        </div>
                        <span className="text-xs text-gray-600">{day.day}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  <span>Progreso por Curso</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {courseProgress.map((course) => (
                    <div key={course.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">{course.title}</h3>
                          <div className="flex items-center space-x-4 mt-1">
                            <Badge variant={course.status === 'completed' ? 'default' : 'secondary'}>
                              {course.status === 'completed' ? 'Completado' : 'En Progreso'}
                            </Badge>
                            {course.certificate && (
                              <Badge variant="outline" className="text-green-600">
                                <Award className="w-3 h-3 mr-1" />
                                Certificado
                              </Badge>
                            )}
                            <div className="flex items-center space-x-1 text-sm text-gray-600">
                              <Flame className="w-3 h-3 text-orange-500" />
                              <span>{course.streak} días</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">{course.progress}%</div>
                          <div className="text-sm text-gray-600">Nota: {course.grade}%</div>
                        </div>
                      </div>

                      <Progress value={course.progress} className="h-2 mb-3" />

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Tiempo invertido</p>
                          <p className="font-medium">{course.timeSpent}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Módulos</p>
                          <p className="font-medium">{course.completedModules}/{course.modules}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Última actividad</p>
                          <p className="font-medium">{course.lastActivity}</p>
                        </div>
                        <div className="flex items-center">
                          {course.nextLesson ? (
                            <Button size="sm" className="w-full">
                              <PlayCircle className="w-3 h-3 mr-1" />
                              Continuar
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline" className="w-full">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Completado
                            </Button>
                          )}
                        </div>
                      </div>

                      {course.nextLesson && (
                        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                          <p className="text-sm text-blue-800">
                            <strong>Próximo:</strong> {course.nextLesson}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-indigo-600" />
                  <span>Desarrollo de Habilidades</span>
                </CardTitle>
                <CardDescription>Tu progreso en diferentes áreas de conocimiento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {skillsProgress.map((skill, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">{skill.skill}</span>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">Nivel {skill.level}</Badge>
                          <span className="text-sm text-gray-600">{skill.progress}%</span>
                        </div>
                      </div>
                      <Progress value={skill.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                  <span>Logros Recientes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`w-10 h-10 rounded-full ${achievement.bgColor} flex items-center justify-center`}>
                        <achievement.icon className={`w-5 h-5 ${achievement.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{achievement.title}</p>
                        <p className="text-xs text-gray-600">{achievement.description}</p>
                        <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
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

export default ProgressPage;
