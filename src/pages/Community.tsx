
import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageSquare, 
  ThumbsUp, 
  ThumbsDown,
  Share2,
  Bookmark,
  Search,
  Filter,
  Plus,
  Users,
  Trophy,
  Star,
  Calendar,
  Globe,
  Lock,
  Eye,
  Heart,
  MessageCircle
} from "lucide-react";

const Community = () => {
  const [newPost, setNewPost] = useState("");

  const forumPosts = [
    {
      id: 1,
      title: "¿Cómo registro una factura de exportación?",
      content: "Necesito ayuda con el registro contable de facturas de exportación. ¿Alguien puede explicarme el proceso paso a paso?",
      author: "María González",
      avatar: "MG",
      category: "Contabilidad",
      tags: ["exportación", "facturas", "registro"],
      likes: 24,
      replies: 8,
      views: 156,
      timeAgo: "Hace 2 horas",
      isHot: true,
      isPinned: false
    },
    {
      id: 2,
      title: "Plantilla de Balance General actualizada",
      content: "Comparto una plantilla de Balance General que he creado siguiendo las nuevas normativas. Espero que les sea útil.",
      author: "Carlos Ruiz",
      avatar: "CR",
      category: "Recursos",
      tags: ["plantilla", "balance", "normativas"],
      likes: 45,
      replies: 12,
      views: 298,
      timeAgo: "Hace 4 horas",
      isHot: true,
      isPinned: true
    },
    {
      id: 3,
      title: "Dudas sobre el curso de Estados Financieros",
      content: "Estoy en el módulo 3 del curso y tengo algunas dudas sobre el análisis de ratios. ¿Podrían ayudarme?",
      author: "Ana López",
      avatar: "AL",
      category: "Cursos",
      tags: ["estados financieros", "ratios", "análisis"],
      likes: 18,
      replies: 6,
      views: 89,
      timeAgo: "Ayer",
      isHot: false,
      isPinned: false
    }
  ];

  const studyGroups = [
    {
      id: 1,
      name: "Contabilidad Avanzada 2024",
      description: "Grupo de estudio para profundizar en temas avanzados de contabilidad",
      members: 45,
      activity: "Muy activo",
      nextSession: "Mañana 7:00 PM",
      isJoined: true,
      category: "Contabilidad"
    },
    {
      id: 2,
      name: "Preparación Certificación",
      description: "Nos preparamos juntos para la certificación profesional",
      members: 28,
      activity: "Activo",
      nextSession: "Viernes 6:00 PM",
      isJoined: false,
      category: "Certificaciones"
    },
    {
      id: 3,
      name: "Diseño para Empresas",
      description: "Compartimos tips y técnicas de diseño corporativo",
      members: 67,
      activity: "Muy activo",
      nextSession: "Lunes 8:00 PM",
      isJoined: true,
      category: "Diseño"
    }
  ];

  const topContributors = [
    { name: "María González", points: 2450, badge: "Experto", avatar: "MG" },
    { name: "Carlos Ruiz", points: 2100, badge: "Mentor", avatar: "CR" },
    { name: "Ana López", points: 1890, badge: "Colaborador", avatar: "AL" },
    { name: "Pedro Martínez", points: 1650, badge: "Ayudante", avatar: "PM" },
    { name: "Laura Silva", points: 1420, badge: "Participante", avatar: "LS" }
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
                  <h1 className="text-2xl font-bold text-gray-900">Comunidad</h1>
                  <p className="text-gray-600">Conecta, comparte y aprende con otros estudiantes</p>
                </div>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Nueva Publicación
              </Button>
            </div>
          </header>

          <div className="p-6">
            <Tabs defaultValue="forum" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="forum">Foro</TabsTrigger>
                <TabsTrigger value="groups">Grupos de Estudio</TabsTrigger>
                <TabsTrigger value="ranking">Ranking</TabsTrigger>
                <TabsTrigger value="events">Eventos</TabsTrigger>
              </TabsList>

              {/* Forum Tab */}
              <TabsContent value="forum" className="space-y-6">
                {/* Search and Filters */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Buscar en el foro..."
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filtros
                  </Button>
                </div>

                {/* Create Post */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Crear Nueva Publicación</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input placeholder="Título de tu publicación" />
                    <Textarea 
                      placeholder="¿Qué quieres compartir con la comunidad?"
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      rows={3}
                    />
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <Badge variant="outline">Contabilidad</Badge>
                        <Badge variant="outline">Recursos</Badge>
                        <Badge variant="outline">Cursos</Badge>
                      </div>
                      <Button>Publicar</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Forum Posts */}
                <div className="space-y-4">
                  {forumPosts.map((post) => (
                    <Card key={post.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Avatar>
                            <AvatarFallback>{post.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-3">
                            <div className="flex items-center space-x-2">
                              {post.isPinned && (
                                <Badge variant="default" className="bg-yellow-600">
                                  Fijado
                                </Badge>
                              )}
                              {post.isHot && (
                                <Badge variant="destructive">
                                  Trending
                                </Badge>
                              )}
                              <Badge variant="outline">{post.category}</Badge>
                            </div>
                            
                            <div>
                              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                              <p className="text-gray-600 mb-3">{post.content}</p>
                              
                              <div className="flex flex-wrap gap-2 mb-3">
                                {post.tags.map((tag, index) => (
                                  <Badge key={index} variant="secondary" className="text-xs">
                                    #{tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <div className="flex items-center space-x-4">
                                <span className="font-medium">{post.author}</span>
                                <span>{post.timeAgo}</span>
                              </div>
                              
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-1">
                                  <Eye className="w-4 h-4" />
                                  <span>{post.views}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MessageCircle className="w-4 h-4" />
                                  <span>{post.replies}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Heart className="w-4 h-4" />
                                  <span>{post.likes}</span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center space-x-2 pt-2">
                              <Button size="sm" variant="ghost">
                                <ThumbsUp className="w-4 h-4 mr-1" />
                                Me gusta
                              </Button>
                              <Button size="sm" variant="ghost">
                                <MessageSquare className="w-4 h-4 mr-1" />
                                Responder
                              </Button>
                              <Button size="sm" variant="ghost">
                                <Share2 className="w-4 h-4 mr-1" />
                                Compartir
                              </Button>
                              <Button size="sm" variant="ghost">
                                <Bookmark className="w-4 h-4 mr-1" />
                                Guardar
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Study Groups Tab */}
              <TabsContent value="groups" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {studyGroups.map((group) => (
                    <Card key={group.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{group.name}</CardTitle>
                          <Badge variant="outline">{group.category}</Badge>
                        </div>
                        <CardDescription>{group.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-gray-500" />
                            <span>{group.members} miembros</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Globe className="w-4 h-4 text-gray-500" />
                            <span>{group.activity}</span>
                          </div>
                          <div className="flex items-center space-x-2 col-span-2">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            <span>Próxima sesión: {group.nextSession}</span>
                          </div>
                        </div>
                        
                        <Button 
                          className="w-full" 
                          variant={group.isJoined ? "outline" : "default"}
                        >
                          {group.isJoined ? "Ya eres miembro" : "Unirse al grupo"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Ranking Tab */}
              <TabsContent value="ranking" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Trophy className="w-5 h-5 text-yellow-600" />
                      <span>Top Colaboradores del Mes</span>
                    </CardTitle>
                    <CardDescription>Los miembros más activos y útiles de la comunidad</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topContributors.map((contributor, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full text-white font-bold">
                              {index + 1}
                            </div>
                            <Avatar>
                              <AvatarFallback>{contributor.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{contributor.name}</p>
                              <Badge variant="outline">{contributor.badge}</Badge>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="font-bold">{contributor.points} pts</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Events Tab */}
              <TabsContent value="events" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Webinar: Nuevas Normativas 2024</CardTitle>
                        <Badge className="bg-blue-600">Próximo</Badge>
                      </div>
                      <CardDescription>Aprende sobre los cambios normativos que afectarán tu trabajo</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>Viernes 15 de Marzo, 7:00 PM</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>126 inscritos</span>
                      </div>
                      <Button className="w-full">Inscribirse Gratis</Button>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Taller de Casos Prácticos</CardTitle>
                        <Badge className="bg-green-600">En vivo</Badge>
                      </div>
                      <CardDescription>Resuelve casos reales de contabilidad con expertos</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>Hoy, 8:00 PM - 9:30 PM</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>45 participantes activos</span>
                      </div>
                      <Button className="w-full" variant="outline">Unirse Ahora</Button>
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

export default Community;
