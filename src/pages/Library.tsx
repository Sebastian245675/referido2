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
  Search, 
  Filter, 
  Download, 
  Eye, 
  Bookmark,
  BookOpen,
  FileText,
  Video,
  Image,
  Headphones,
  Star,
  Clock,
  User,
  Tag,
  Grid,
  List,
  ArrowUpDown
} from "lucide-react";

const Library = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  const libraryItems = [
    {
      id: 1,
      title: "Manual Completo de Contabilidad Empresarial",
      type: "pdf",
      category: "Contabilidad",
      author: "María González",
      description: "Guía completa con todos los principios fundamentales de contabilidad",
      size: "12.5 MB",
      pages: 248,
      duration: null,
      rating: 4.8,
      downloads: 1247,
      bookmarked: true,
      tags: ["contabilidad", "manual", "empresarial"],
      uploadDate: "2024-01-15",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Estados Financieros: Análisis Práctico",
      type: "video",
      category: "Finanzas",
      author: "Carlos Ruiz",
      description: "Video tutorial sobre análisis e interpretación de estados financieros",
      size: "485 MB",
      pages: null,
      duration: "2h 30m",
      rating: 4.9,
      downloads: 892,
      bookmarked: false,
      tags: ["estados financieros", "análisis", "tutorial"],
      uploadDate: "2024-02-01",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Plantillas Excel para Contabilidad",
      type: "file",
      category: "Recursos",
      author: "Ana López",
      description: "Colección de plantillas de Excel para diferentes procesos contables",
      size: "8.2 MB",
      pages: null,
      duration: null,
      rating: 4.7,
      downloads: 2156,
      bookmarked: true,
      tags: ["excel", "plantillas", "herramientas"],
      uploadDate: "2024-01-28",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Podcast: Tendencias en Diseño Corporativo",
      type: "audio",
      category: "Diseño",
      author: "Pedro Martínez",
      description: "Episodio sobre las últimas tendencias en identidad visual empresarial",
      size: "45 MB",
      pages: null,
      duration: "45m",
      rating: 4.6,
      downloads: 634,
      bookmarked: false,
      tags: ["podcast", "diseño", "tendencias"],
      uploadDate: "2024-02-10",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Infografías: Ratios Financieros",
      type: "image",
      category: "Finanzas",
      author: "Laura Silva",
      description: "Colección de infografías explicando los principales ratios financieros",
      size: "15.3 MB",
      pages: null,
      duration: null,
      rating: 4.5,
      downloads: 789,
      bookmarked: true,
      tags: ["infografías", "ratios", "visual"],
      uploadDate: "2024-02-05",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Casos Prácticos de Auditoría",
      type: "pdf",
      category: "Auditoría",
      author: "Roberto García",
      description: "Estudio de casos reales de auditoría con soluciones detalladas",
      size: "18.7 MB",
      pages: 156,
      duration: null,
      rating: 4.8,
      downloads: 567,
      bookmarked: false,
      tags: ["auditoría", "casos prácticos", "ejemplos"],
      uploadDate: "2024-02-12",
      thumbnail: "/placeholder.svg"
    }
  ];

  const categories = [
    { value: "all", label: "Todas las categorías" },
    { value: "contabilidad", label: "Contabilidad" },
    { value: "finanzas", label: "Finanzas" },
    { value: "diseno", label: "Diseño" },
    { value: "recursos", label: "Recursos" },
    { value: "auditoria", label: "Auditoría" }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <FileText className="w-5 h-5 text-red-600" />;
      case 'video': return <Video className="w-5 h-5 text-blue-600" />;
      case 'audio': return <Headphones className="w-5 h-5 text-green-600" />;
      case 'image': return <Image className="w-5 h-5 text-purple-600" />;
      default: return <FileText className="w-5 h-5 text-gray-600" />;
    }
  };

  const filteredItems = libraryItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || 
                           item.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
                  <h1 className="text-2xl font-bold text-gray-900">Biblioteca de Recursos</h1>
                  <p className="text-gray-600">Accede a todos tus materiales de estudio y recursos</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}>
                  {viewMode === 'grid' ? <List className="w-4 h-4" /> : <Grid className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </header>

          <div className="p-6">
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">Todo</TabsTrigger>
                <TabsTrigger value="bookmarked">Favoritos</TabsTrigger>
                <TabsTrigger value="recent">Recientes</TabsTrigger>
                <TabsTrigger value="downloaded">Descargados</TabsTrigger>
                <TabsTrigger value="trending">Populares</TabsTrigger>
              </TabsList>

              {/* Search and Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Buscar en la biblioteca..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  Ordenar
                </Button>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtros
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <BookOpen className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold">{libraryItems.length}</p>
                    <p className="text-sm text-gray-600">Total Recursos</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Bookmark className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold">{libraryItems.filter(item => item.bookmarked).length}</p>
                    <p className="text-sm text-gray-600">Favoritos</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Download className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold">
                      {libraryItems.reduce((sum, item) => sum + item.downloads, 0).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">Descargas</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Star className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold">4.7</p>
                    <p className="text-sm text-gray-600">Rating Promedio</p>
                  </CardContent>
                </Card>
              </div>

              {/* All Content Tab */}
              <TabsContent value="all">
                {viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item) => (
                      <Card key={item.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-2">
                              {getTypeIcon(item.type)}
                              <Badge variant="outline">{item.category}</Badge>
                            </div>
                            <Button size="sm" variant="ghost">
                              <Bookmark className={`w-4 h-4 ${item.bookmarked ? 'fill-yellow-400 text-yellow-400' : ''}`} />
                            </Button>
                          </div>
                          <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
                          <CardDescription className="line-clamp-2">
                            {item.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <User className="w-3 h-3" />
                              <span>{item.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span>{item.rating}</span>
                            </div>
                            {item.duration && (
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{item.duration}</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex flex-wrap gap-1">
                            {item.tags.slice(0, 3).map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex space-x-2">
                            <Button size="sm" className="flex-1">
                              <Eye className="w-3 h-3 mr-1" />
                              Ver
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="w-3 h-3 mr-1" />
                              Descargar
                            </Button>
                          </div>
                          
                          <div className="text-xs text-gray-500 flex justify-between">
                            <span>{item.size}</span>
                            <span>{item.downloads.toLocaleString()} descargas</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredItems.map((item) => (
                      <Card key={item.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              {getTypeIcon(item.type)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-1">
                                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                <Badge variant="outline" className="text-xs">{item.category}</Badge>
                                {item.bookmarked && (
                                  <Bookmark className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                )}
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                              <div className="flex items-center space-x-4 text-xs text-gray-500">
                                <span>Por {item.author}</span>
                                <span>{item.size}</span>
                                {item.duration && <span>{item.duration}</span>}
                                <div className="flex items-center space-x-1">
                                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                  <span>{item.rating}</span>
                                </div>
                                <span>{item.downloads.toLocaleString()} descargas</span>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm">
                                <Eye className="w-3 h-3 mr-1" />
                                Ver
                              </Button>
                              <Button size="sm" variant="outline">
                                <Download className="w-3 h-3 mr-1" />
                                Descargar
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>

              {/* Bookmarked Tab */}
              <TabsContent value="bookmarked">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.filter(item => item.bookmarked).map((item) => (
                    <Card key={item.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-2">
                            {getTypeIcon(item.type)}
                            <Badge variant="outline">{item.category}</Badge>
                          </div>
                          <Bookmark className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        </div>
                        <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <User className="w-3 h-3" />
                            <span>{item.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span>{item.rating}</span>
                          </div>
                          {item.duration && (
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{item.duration}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {item.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1">
                            <Eye className="w-3 h-3 mr-1" />
                            Ver
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="w-3 h-3 mr-1" />
                            Descargar
                          </Button>
                        </div>
                        
                        <div className="text-xs text-gray-500 flex justify-between">
                          <span>{item.size}</span>
                          <span>{item.downloads.toLocaleString()} descargas</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Recent Tab */}
              <TabsContent value="recent">
                <div className="space-y-4">
                  {filteredItems.slice(0, 5).map((item) => (
                    <Card key={item.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            {getTypeIcon(item.type)}
                            <div>
                              <h3 className="font-semibold">{item.title}</h3>
                              <p className="text-sm text-gray-600">Visto {item.uploadDate}</p>
                            </div>
                          </div>
                          <Button size="sm">
                            <Eye className="w-3 h-3 mr-1" />
                            Abrir
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Downloaded Tab */}
              <TabsContent value="downloaded">
                <div className="space-y-4">
                  {filteredItems.slice(0, 4).map((item) => (
                    <Card key={item.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            {getTypeIcon(item.type)}
                            <div>
                              <h3 className="font-semibold">{item.title}</h3>
                              <p className="text-sm text-gray-600">Descargado {item.uploadDate}</p>
                            </div>
                          </div>
                          <Button size="sm">
                            <Eye className="w-3 h-3 mr-1" />
                            Abrir
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Trending Tab */}
              <TabsContent value="trending">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.sort((a, b) => b.downloads - a.downloads).slice(0, 6).map((item) => (
                    <Card key={item.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-2">
                            {getTypeIcon(item.type)}
                            <Badge variant="outline">{item.category}</Badge>
                          </div>
                          <Badge variant="destructive" className="text-xs">
                            Trending
                          </Badge>
                        </div>
                        <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <User className="w-3 h-3" />
                            <span>{item.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span>{item.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Download className="w-3 h-3" />
                            <span>{item.downloads.toLocaleString()}</span>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1">
                            <Eye className="w-3 h-3 mr-1" />
                            Ver
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="w-3 h-3 mr-1" />
                            Descargar
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Library;
