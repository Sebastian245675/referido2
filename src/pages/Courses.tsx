
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  Filter, 
  Play, 
  Clock, 
  Users, 
  Star,
  BookOpen,
  FileText,
  Video,
  Image
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Courses = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Todos los Cursos" },
    { id: "accounting", name: "Contabilidad" },
    { id: "design", name: "Diseño Empresarial" },
    { id: "finance", name: "Finanzas" },
    { id: "marketing", name: "Marketing" },
  ];

  const courses = [
    {
      id: 1,
      title: "Contabilidad Básica para Empresas",
      description: "Aprende los fundamentos de la contabilidad empresarial desde cero",
      category: "accounting",
      level: "Principiante",
      duration: "12 horas",
      students: 1247,
      rating: 4.8,
      progress: 75,
      instructor: "María González",
      price: "Incluido en tu plan",
      thumbnail: "contabilidad-basica.jpg",
      lessons: 24,
      resources: ["Videos HD", "PDFs", "Canvas"],
      enrolled: true
    },
    {
      id: 2,
      title: "Estados Financieros Avanzados",
      description: "Domina la creación y análisis de estados financieros complejos",
      category: "accounting",
      level: "Avanzado",
      duration: "18 horas",
      students: 892,
      rating: 4.9,
      progress: 45,
      instructor: "Carlos Ruiz",
      price: "Incluido en tu plan",
      thumbnail: "estados-financieros.jpg",
      lessons: 32,
      resources: ["Videos HD", "PDFs", "Plantillas"],
      enrolled: true
    },
    {
      id: 3,
      title: "Diseño de Identidad Corporativa",
      description: "Crea marcas memorables con principios de diseño profesional",
      category: "design",
      level: "Intermedio",
      duration: "15 horas",
      students: 654,
      rating: 4.7,
      progress: 90,
      instructor: "Ana Martínez",
      price: "Incluido en tu plan",
      thumbnail: "identidad-corporativa.jpg",
      lessons: 28,
      resources: ["Videos HD", "Canvas", "Plantillas"],
      enrolled: true
    },
    {
      id: 4,
      title: "Análisis Financiero Empresarial",
      description: "Herramientas y técnicas para el análisis financiero integral",
      category: "finance",
      level: "Intermedio",
      duration: "20 horas",
      students: 423,
      rating: 4.6,
      progress: 0,
      instructor: "Roberto Silva",
      price: "Incluido en tu plan",
      thumbnail: "analisis-financiero.jpg",
      lessons: 35,
      resources: ["Videos HD", "PDFs", "Calculadoras"],
      enrolled: false
    },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
                  <h1 className="text-2xl font-bold text-gray-900">Mis Cursos</h1>
                  <p className="text-gray-600">Explora y continúa tu aprendizaje</p>
                </div>
              </div>
            </div>
          </header>

          <div className="p-6">
            {/* Search and Filters */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Buscar cursos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtros
                </Button>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-12 h-12 text-blue-600" />
                    </div>
                    {course.enrolled && (
                      <Badge className="absolute top-3 left-3 bg-green-600">
                        Inscrito
                      </Badge>
                    )}
                    <Badge variant="secondary" className="absolute top-3 right-3">
                      {course.level}
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {course.students.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current text-yellow-500" />
                        {course.rating}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 text-sm">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      <span>{course.lessons} lecciones</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {course.resources.map((resource, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {resource}
                        </Badge>
                      ))}
                    </div>

                    {course.enrolled && course.progress > 0 && (
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progreso</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <p className="text-sm text-gray-600">Instructor</p>
                        <p className="font-medium">{course.instructor}</p>
                      </div>
                      <Button 
                        onClick={() => navigate(`/course/${course.id}`)}
                        size="sm"
                      >
                        {course.enrolled ? 'Continuar' : 'Inscribirse'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No se encontraron cursos
                </h3>
                <p className="text-gray-600">
                  Intenta con otros términos de búsqueda o cambia los filtros.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Courses;
