import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Upload, 
  Video, 
  FileText, 
  Image, 
  Trash2, 
  Edit, 
  Plus,
  Search,
  Filter,
  Download,
  Eye
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminContent = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const contentItems = [
    {
      id: 1,
      title: "Introducción a la Contabilidad",
      type: "video",
      course: "Contabilidad Básica",
      duration: "15:30",
      size: "125 MB",
      uploadDate: "2024-01-15",
      status: "active",
      views: 1247
    },
    {
      id: 2,
      title: "Manual de Estados Financieros",
      type: "pdf",
      course: "Estados Financieros",
      pages: 45,
      size: "12 MB",
      uploadDate: "2024-01-10",
      status: "active",
      downloads: 892
    },
    {
      id: 3,
      title: "Plantilla Balance General",
      type: "template",
      course: "Contabilidad Básica",
      format: "Excel",
      size: "2.5 MB",
      uploadDate: "2024-01-08",
      status: "active",
      downloads: 654
    },
    {
      id: 4,
      title: "Logos Empresariales Ejemplos",
      type: "image",
      course: "Diseño Corporativo",
      resolution: "1920x1080",
      size: "8.2 MB",
      uploadDate: "2024-01-05",
      status: "draft",
      views: 0
    }
  ];

  const handleUpload = (type: string) => {
    toast({
      title: "Subida iniciada",
      description: `Subiendo ${type}...`,
    });
  };

  const handleDelete = (id: number) => {
    toast({
      title: "Contenido eliminado",
      description: "El contenido ha sido eliminado exitosamente.",
    });
  };

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
                  <h1 className="text-2xl font-bold text-gray-900">Gestión de Contenido</h1>
                  <p className="text-gray-600">Administra videos, PDFs, imágenes y plantillas</p>
                </div>
              </div>
            </div>
          </header>

          <div className="p-6">
            <Tabs defaultValue="content" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="content">Contenido Existente</TabsTrigger>
                <TabsTrigger value="upload">Subir Nuevo</TabsTrigger>
              </TabsList>

              {/* Existing Content Tab */}
              <TabsContent value="content" className="space-y-6">
                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Buscar contenido..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Tipo de contenido" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los tipos</SelectItem>
                      <SelectItem value="video">Videos</SelectItem>
                      <SelectItem value="pdf">PDFs</SelectItem>
                      <SelectItem value="image">Imágenes</SelectItem>
                      <SelectItem value="template">Plantillas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {contentItems.map((item) => (
                    <Card key={item.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-2">
                            {item.type === 'video' && <Video className="w-5 h-5 text-blue-600" />}
                            {item.type === 'pdf' && <FileText className="w-5 h-5 text-red-600" />}
                            {item.type === 'image' && <Image className="w-5 h-5 text-green-600" />}
                            {item.type === 'template' && <FileText className="w-5 h-5 text-purple-600" />}
                            <Badge variant={item.status === 'active' ? 'default' : 'secondary'}>
                              {item.status === 'active' ? 'Activo' : 'Borrador'}
                            </Badge>
                          </div>
                          <div className="flex space-x-1">
                            <Button size="sm" variant="ghost">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" onClick={() => handleDelete(item.id)}>
                              <Trash2 className="w-4 h-4 text-red-600" />
                            </Button>
                          </div>
                        </div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription>Curso: {item.course}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex justify-between">
                            <span>Tamaño:</span>
                            <span>{item.size}</span>
                          </div>
                          {item.duration && (
                            <div className="flex justify-between">
                              <span>Duración:</span>
                              <span>{item.duration}</span>
                            </div>
                          )}
                          {item.pages && (
                            <div className="flex justify-between">
                              <span>Páginas:</span>
                              <span>{item.pages}</span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span>Fecha:</span>
                            <span>{item.uploadDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>{item.views ? 'Vistas:' : 'Descargas:'}</span>
                            <span>{item.views || item.downloads}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Upload New Content Tab */}
              <TabsContent value="upload" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Video Upload */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Video className="w-5 h-5 text-blue-600" />
                        <span>Subir Video</span>
                      </CardTitle>
                      <CardDescription>Formatos soportados: MP4, MOV, AVI</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Input placeholder="Título del video" />
                      <Textarea placeholder="Descripción del video" />
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar curso" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="contabilidad">Contabilidad Básica</SelectItem>
                          <SelectItem value="finanzas">Estados Financieros</SelectItem>
                          <SelectItem value="diseno">Diseño Corporativo</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Arrastra tu video aquí o haz clic para seleccionar</p>
                      </div>
                      <Button className="w-full" onClick={() => handleUpload('video')}>
                        <Upload className="w-4 h-4 mr-2" />
                        Subir Video
                      </Button>
                    </CardContent>
                  </Card>

                  {/* PDF Upload */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <FileText className="w-5 h-5 text-red-600" />
                        <span>Subir PDF</span>
                      </CardTitle>
                      <CardDescription>Documentos educativos y manuales</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Input placeholder="Título del documento" />
                      <Textarea placeholder="Descripción del documento" />
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar curso" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="contabilidad">Contabilidad Básica</SelectItem>
                          <SelectItem value="finanzas">Estados Financieros</SelectItem>
                          <SelectItem value="diseno">Diseño Corporativo</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-red-400 transition-colors cursor-pointer">
                        <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Arrastra tu PDF aquí o haz clic para seleccionar</p>
                      </div>
                      <Button className="w-full" onClick={() => handleUpload('pdf')}>
                        <Upload className="w-4 h-4 mr-2" />
                        Subir PDF
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Image Upload */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Image className="w-5 h-5 text-green-600" />
                        <span>Subir Imágenes</span>
                      </CardTitle>
                      <CardDescription>Gráficos, diagramas y ejemplos visuales</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Input placeholder="Título de la imagen" />
                      <Textarea placeholder="Descripción de la imagen" />
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar curso" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="contabilidad">Contabilidad Básica</SelectItem>
                          <SelectItem value="finanzas">Estados Financieros</SelectItem>
                          <SelectItem value="diseno">Diseño Corporativo</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors cursor-pointer">
                        <Image className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Arrastra tus imágenes aquí o haz clic para seleccionar</p>
                      </div>
                      <Button className="w-full" onClick={() => handleUpload('image')}>
                        <Upload className="w-4 h-4 mr-2" />
                        Subir Imagen
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Template Upload */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <FileText className="w-5 h-5 text-purple-600" />
                        <span>Subir Plantillas</span>
                      </CardTitle>
                      <CardDescription>Plantillas de Excel, Word y Canvas</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Input placeholder="Título de la plantilla" />
                      <Textarea placeholder="Descripción de la plantilla" />
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Tipo de plantilla" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excel">Excel</SelectItem>
                          <SelectItem value="word">Word</SelectItem>
                          <SelectItem value="canvas">Canvas</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors cursor-pointer">
                        <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Arrastra tu plantilla aquí o haz clic para seleccionar</p>
                      </div>
                      <Button className="w-full" onClick={() => handleUpload('template')}>
                        <Upload className="w-4 h-4 mr-2" />
                        Subir Plantilla
                      </Button>
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

export default AdminContent;
