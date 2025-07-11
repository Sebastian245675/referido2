
import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  Gift, 
  Copy, 
  Share, 
  Users, 
  DollarSign,
  Calendar,
  TrendingUp,
  Mail,
  MessageSquare,
  Facebook,
  Twitter,
  Linkedin
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Referrals = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const referralStats = [
    { title: "Referidos Activos", value: "8", icon: Users, color: "text-blue-600" },
    { title: "Descuentos Ganados", value: "$240", icon: DollarSign, color: "text-green-600" },
    { title: "Este Mes", value: "3", icon: Calendar, color: "text-purple-600" },
    { title: "Tasa de Conversión", value: "25%", icon: TrendingUp, color: "text-orange-600" },
  ];

  const referralHistory = [
    { 
      name: "María González", 
      email: "maria@empresa.com", 
      status: "active", 
      joinDate: "2024-01-15", 
      discount: "$30",
      plan: "Premium"
    },
    { 
      name: "Carlos Ruiz", 
      email: "carlos@miempresa.com", 
      status: "active", 
      joinDate: "2024-01-10", 
      discount: "$30",
      plan: "Pro"
    },
    { 
      name: "Ana Martínez", 
      email: "ana@startup.com", 
      status: "pending", 
      joinDate: "2024-01-08", 
      discount: "Pendiente",
      plan: "Basic"
    },
  ];

  const copyReferralCode = () => {
    navigator.clipboard.writeText(user?.referralCode || "");
    toast({
      title: "¡Código copiado!",
      description: "Tu código de referido ha sido copiado al portapapeles.",
    });
  };

  const shareReferral = (platform: string) => {
    const referralLink = `https://contableapp.com/register?ref=${user?.referralCode}`;
    const message = "¡Únete a ContableApp con mi código de referido y obtén un descuento especial!";
    
    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(referralLink)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralLink)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
  };

  const sendInvitation = () => {
    if (!email) return;
    
    // Simular envío de invitación
    toast({
      title: "¡Invitación enviada!",
      description: `Se ha enviado una invitación a ${email}`,
    });
    setEmail("");
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
                  <h1 className="text-2xl font-bold text-gray-900">Programa de Referidos</h1>
                  <p className="text-gray-600">Invita amigos y gana descuentos en tu suscripción</p>
                </div>
              </div>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {referralStats.map((stat, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Referral Code */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Gift className="w-5 h-5" />
                    <span>Tu Código de Referido</span>
                  </CardTitle>
                  <CardDescription>
                    Comparte este código con tus amigos para que obtengan un descuento
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">Tu código único:</p>
                      <p className="text-2xl font-bold text-blue-600">{user?.referralCode}</p>
                    </div>
                    <Button onClick={copyReferralCode} size="sm">
                      <Copy className="w-4 h-4 mr-2" />
                      Copiar
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold">¿Cómo funciona?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Share className="w-6 h-6 text-blue-600" />
                        </div>
                        <h4 className="font-medium mb-2">1. Comparte</h4>
                        <p className="text-sm text-gray-600">Envía tu código a amigos y colegas</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Users className="w-6 h-6 text-green-600" />
                        </div>
                        <h4 className="font-medium mb-2">2. Se Registran</h4>
                        <p className="text-sm text-gray-600">Tus amigos usan tu código al registrarse</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <DollarSign className="w-6 h-6 text-purple-600" />
                        </div>
                        <h4 className="font-medium mb-2">3. Ambos Ganan</h4>
                        <p className="text-sm text-gray-600">$30 de descuento para ambos</p>
                      </div>
                    </div>
                  </div>

                  {/* Share Buttons */}
                  <div className="space-y-3">
                    <h3 className="font-semibold">Compartir en redes sociales:</h3>
                    <div className="flex space-x-3">
                      <Button variant="outline" onClick={() => shareReferral('facebook')}>
                        <Facebook className="w-4 h-4 mr-2" />
                        Facebook
                      </Button>
                      <Button variant="outline" onClick={() => shareReferral('twitter')}>
                        <Twitter className="w-4 h-4 mr-2" />
                        Twitter
                      </Button>
                      <Button variant="outline" onClick={() => shareReferral('linkedin')}>
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Send Invitation */}
              <Card>
                <CardHeader>
                  <CardTitle>Invitar por Email</CardTitle>
                  <CardDescription>Envía una invitación directa</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    type="email"
                    placeholder="email@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button className="w-full" onClick={sendInvitation}>
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Invitación
                  </Button>
                  
                  <div className="mt-6">
                    <h4 className="font-medium mb-3">Progreso hacia el próximo nivel:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>8 de 10 referidos</span>
                        <span>80%</span>
                      </div>
                      <Progress value={80} />
                      <p className="text-xs text-gray-600">
                        Faltun 2 referidos más para desbloquear el descuento VIP
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Referral History */}
            <Card>
              <CardHeader>
                <CardTitle>Historial de Referidos</CardTitle>
                <CardDescription>Seguimiento de tus invitaciones exitosas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {referralHistory.map((referral, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{referral.name}</h3>
                        <p className="text-sm text-gray-600">{referral.email}</p>
                        <p className="text-xs text-gray-500">Se unió el {referral.joinDate}</p>
                      </div>
                      <div className="text-center">
                        <Badge variant={referral.status === 'active' ? 'default' : 'secondary'}>
                          {referral.status === 'active' ? 'Activo' : 'Pendiente'}
                        </Badge>
                        <p className="text-sm font-medium mt-1">{referral.plan}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">{referral.discount}</p>
                        <p className="text-xs text-gray-500">Descuento</p>
                      </div>
                    </div>
                  ))}
                </div>

                {referralHistory.length === 0 && (
                  <div className="text-center py-8">
                    <Gift className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Aún no tienes referidos
                    </h3>
                    <p className="text-gray-600">
                      Comienza a invitar amigos y gana descuentos en tu suscripción.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Referrals;
