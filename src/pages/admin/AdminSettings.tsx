
import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Settings, 
  Shield, 
  Database, 
  Mail, 
  Bell, 
  Palette,
  Globe,
  Key,
  Users,
  CreditCard,
  FileText,
  Save,
  Upload,
  Download,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Server,
  Cloud
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminSettings = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    general: {
      siteName: "ContableApp",
      siteDescription: "Plataforma de aprendizaje contable y empresarial",
      timezone: "America/Bogota",
      language: "es",
      maintenanceMode: false
    },
    security: {
      twoFactorAuth: true,
      sessionTimeout: 60,
      passwordExpiry: 90,
      maxLoginAttempts: 5,
      ipWhitelist: false
    },
    email: {
      provider: "smtp",
      smtpHost: "smtp.gmail.com",
      smtpPort: 587,
      smtpUser: "noreply@contableapp.com",
      smtpPassword: "••••••••",
      fromName: "ContableApp",
      fromEmail: "noreply@contableapp.com"
    },
    notifications: {
      emailNotifications: true,
      pushNotifications: true,
      smsNotifications: false,
      marketingEmails: true,
      systemAlerts: true
    },
    payments: {
      stripeEnabled: true,
      paypalEnabled: false,
      currency: "USD",
      taxRate: 19,
      invoicePrefix: "CA-"
    },
    backup: {
      autoBackup: true,
      backupFrequency: "daily",
      retentionDays: 30,
      cloudStorage: true
    }
  });

  const handleSave = (section: string) => {
    toast({
      title: "Configuración guardada",
      description: `Las configuraciones de ${section} han sido actualizadas exitosamente.`,
    });
  };

  const handleTestEmail = () => {
    toast({
      title: "Email de prueba enviado",
      description: "Revisa tu bandeja de entrada para confirmar la configuración.",
    });
  };

  const handleBackup = () => {
    toast({
      title: "Backup iniciado",
      description: "Se ha iniciado el proceso de respaldo de la base de datos.",
    });
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
                  <h1 className="text-2xl font-bold text-gray-900">Configuración del Sistema</h1>
                  <p className="text-gray-600">Administra todas las configuraciones de la plataforma</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-green-600">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Sistema Operativo
                </Badge>
              </div>
            </div>
          </header>

          <div className="p-6">
            <Tabs defaultValue="general" className="space-y-6">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="security">Seguridad</TabsTrigger>
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
                <TabsTrigger value="payments">Pagos</TabsTrigger>
                <TabsTrigger value="backup">Respaldos</TabsTrigger>
              </TabsList>

              {/* General Settings */}
              <TabsContent value="general" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Settings className="w-5 h-5" />
                      <span>Configuración General</span>
                    </CardTitle>
                    <CardDescription>Configuraciones básicas de la plataforma</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="siteName">Nombre del Sitio</Label>
                        <Input 
                          id="siteName" 
                          value={settings.general.siteName}
                          onChange={(e) => setSettings({
                            ...settings,
                            general: { ...settings.general, siteName: e.target.value }
                          })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Zona Horaria</Label>
                        <Select value={settings.general.timezone}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="America/Bogota">América/Bogotá</SelectItem>
                            <SelectItem value="America/Mexico_City">América/Ciudad de México</SelectItem>
                            <SelectItem value="America/Lima">América/Lima</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="siteDescription">Descripción del Sitio</Label>
                      <Textarea 
                        id="siteDescription" 
                        value={settings.general.siteDescription}
                        onChange={(e) => setSettings({
                          ...settings,
                          general: { ...settings.general, siteDescription: e.target.value }
                        })}
                        rows={3}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <Label className="text-base font-medium">Modo Mantenimiento</Label>
                        <p className="text-sm text-gray-600">Desactiva el acceso para usuarios regulares</p>
                      </div>
                      <Switch 
                        checked={settings.general.maintenanceMode}
                        onCheckedChange={(checked) => setSettings({
                          ...settings,
                          general: { ...settings.general, maintenanceMode: checked }
                        })}
                      />
                    </div>

                    <Button onClick={() => handleSave('general')}>
                      <Save className="w-4 h-4 mr-2" />
                      Guardar Cambios
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Settings */}
              <TabsContent value="security" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="w-5 h-5" />
                      <span>Configuración de Seguridad</span>
                    </CardTitle>
                    <CardDescription>Configuraciones de seguridad y autenticación</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="sessionTimeout">Timeout de Sesión (minutos)</Label>
                        <Input 
                          id="sessionTimeout" 
                          type="number"
                          value={settings.security.sessionTimeout}
                          onChange={(e) => setSettings({
                            ...settings,
                            security: { ...settings.security, sessionTimeout: parseInt(e.target.value) }
                          })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="maxLoginAttempts">Máximo Intentos de Login</Label>
                        <Input 
                          id="maxLoginAttempts" 
                          type="number"
                          value={settings.security.maxLoginAttempts}
                          onChange={(e) => setSettings({
                            ...settings,
                            security: { ...settings.security, maxLoginAttempts: parseInt(e.target.value) }
                          })}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <Label className="text-base font-medium">Autenticación de Dos Factores</Label>
                          <p className="text-sm text-gray-600">Requiere 2FA para administradores</p>
                        </div>
                        <Switch 
                          checked={settings.security.twoFactorAuth}
                          onCheckedChange={(checked) => setSettings({
                            ...settings,
                            security: { ...settings.security, twoFactorAuth: checked }
                          })}
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <Label className="text-base font-medium">Lista Blanca de IPs</Label>
                          <p className="text-sm text-gray-600">Restringe acceso por dirección IP</p>
                        </div>
                        <Switch 
                          checked={settings.security.ipWhitelist}
                          onCheckedChange={(checked) => setSettings({
                            ...settings,
                            security: { ...settings.security, ipWhitelist: checked }
                          })}
                        />
                      </div>
                    </div>

                    <Button onClick={() => handleSave('security')}>
                      <Save className="w-4 h-4 mr-2" />
                      Guardar Cambios
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Email Settings */}
              <TabsContent value="email" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Mail className="w-5 h-5" />
                      <span>Configuración de Email</span>
                    </CardTitle>
                    <CardDescription>Configuraciones del servidor de correo</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="smtpHost">Servidor SMTP</Label>
                        <Input 
                          id="smtpHost" 
                          value={settings.email.smtpHost}
                          onChange={(e) => setSettings({
                            ...settings,
                            email: { ...settings.email, smtpHost: e.target.value }
                          })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="smtpPort">Puerto SMTP</Label>
                        <Input 
                          id="smtpPort" 
                          type="number"
                          value={settings.email.smtpPort}
                          onChange={(e) => setSettings({
                            ...settings,
                            email: { ...settings.email, smtpPort: parseInt(e.target.value) }
                          })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="smtpUser">Usuario SMTP</Label>
                        <Input 
                          id="smtpUser" 
                          value={settings.email.smtpUser}
                          onChange={(e) => setSettings({
                            ...settings,
                            email: { ...settings.email, smtpUser: e.target.value }
                          })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="smtpPassword">Contraseña SMTP</Label>
                        <Input 
                          id="smtpPassword" 
                          type="password"
                          value={settings.email.smtpPassword}
                          onChange={(e) => setSettings({
                            ...settings,
                            email: { ...settings.email, smtpPassword: e.target.value }
                          })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="fromName">Nombre del Remitente</Label>
                        <Input 
                          id="fromName" 
                          value={settings.email.fromName}
                          onChange={(e) => setSettings({
                            ...settings,
                            email: { ...settings.email, fromName: e.target.value }
                          })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="fromEmail">Email del Remitente</Label>
                        <Input 
                          id="fromEmail" 
                          type="email"
                          value={settings.email.fromEmail}
                          onChange={(e) => setSettings({
                            ...settings,
                            email: { ...settings.email, fromEmail: e.target.value }
                          })}
                        />
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button onClick={() => handleSave('email')}>
                        <Save className="w-4 h-4 mr-2" />
                        Guardar Cambios
                      </Button>
                      <Button variant="outline" onClick={handleTestEmail}>
                        <Mail className="w-4 h-4 mr-2" />
                        Enviar Email de Prueba
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notifications Settings */}
              <TabsContent value="notifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Bell className="w-5 h-5" />
                      <span>Configuración de Notificaciones</span>
                    </CardTitle>
                    <CardDescription>Configuraciones de notificaciones del sistema</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <Label className="text-base font-medium">Notificaciones por Email</Label>
                          <p className="text-sm text-gray-600">Enviar notificaciones importantes por correo</p>
                        </div>
                        <Switch 
                          checked={settings.notifications.emailNotifications}
                          onCheckedChange={(checked) => setSettings({
                            ...settings,
                            notifications: { ...settings.notifications, emailNotifications: checked }
                          })}
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <Label className="text-base font-medium">Notificaciones Push</Label>
                          <p className="text-sm text-gray-600">Notificaciones en tiempo real en el navegador</p>
                        </div>
                        <Switch 
                          checked={settings.notifications.pushNotifications}
                          onCheckedChange={(checked) => setSettings({
                            ...settings,
                            notifications: { ...settings.notifications, pushNotifications: checked }
                          })}
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <Label className="text-base font-medium">Alertas del Sistema</Label>
                          <p className="text-sm text-gray-600">Notificaciones críticas del sistema</p>
                        </div>
                        <Switch 
                          checked={settings.notifications.systemAlerts}
                          onCheckedChange={(checked) => setSettings({
                            ...settings,
                            notifications: { ...settings.notifications, systemAlerts: checked }
                          })}
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <Label className="text-base font-medium">Emails de Marketing</Label>
                          <p className="text-sm text-gray-600">Enviar promociones y actualizaciones</p>
                        </div>
                        <Switch 
                          checked={settings.notifications.marketingEmails}
                          onCheckedChange={(checked) => setSettings({
                            ...settings,
                            notifications: { ...settings.notifications, marketingEmails: checked }
                          })}
                        />
                      </div>
                    </div>

                    <Button onClick={() => handleSave('notifications')}>
                      <Save className="w-4 h-4 mr-2" />
                      Guardar Cambios
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Payments Settings */}
              <TabsContent value="payments" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CreditCard className="w-5 h-5" />
                      <span>Configuración de Pagos</span>
                    </CardTitle>
                    <CardDescription>Configuraciones de pasarelas de pago y facturación</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <Label className="text-base font-medium">Stripe</Label>
                          <p className="text-sm text-gray-600">Procesar pagos con tarjeta de crédito</p>
                        </div>
                        <Switch 
                          checked={settings.payments.stripeEnabled}
                          onCheckedChange={(checked) => setSettings({
                            ...settings,
                            payments: { ...settings.payments, stripeEnabled: checked }
                          })}
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <Label className="text-base font-medium">PayPal</Label>
                          <p className="text-sm text-gray-600">Procesar pagos a través de PayPal</p>
                        </div>
                        <Switch 
                          checked={settings.payments.paypalEnabled}
                          onCheckedChange={(checked) => setSettings({
                            ...settings,
                            payments: { ...settings.payments, paypalEnabled: checked }
                          })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="currency">Moneda</Label>
                        <Select value={settings.payments.currency}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="USD">USD - Dólar</SelectItem>
                            <SelectItem value="COP">COP - Peso Colombiano</SelectItem>
                            <SelectItem value="MXN">MXN - Peso Mexicano</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="taxRate">Tasa de Impuesto (%)</Label>
                        <Input 
                          id="taxRate" 
                          type="number"
                          value={settings.payments.taxRate}
                          onChange={(e) => setSettings({
                            ...settings,
                            payments: { ...settings.payments, taxRate: parseFloat(e.target.value) }
                          })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="invoicePrefix">Prefijo de Factura</Label>
                        <Input 
                          id="invoicePrefix" 
                          value={settings.payments.invoicePrefix}
                          onChange={(e) => setSettings({
                            ...settings,
                            payments: { ...settings.payments, invoicePrefix: e.target.value }
                          })}
                        />
                      </div>
                    </div>

                    <Button onClick={() => handleSave('payments')}>
                      <Save className="w-4 h-4 mr-2" />
                      Guardar Cambios
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Backup Settings */}
              <TabsContent value="backup" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Database className="w-5 h-5" />
                      <span>Configuración de Respaldos</span>
                    </CardTitle>
                    <CardDescription>Configuraciones de backup y recuperación</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <Label className="text-base font-medium">Backup Automático</Label>
                          <p className="text-sm text-gray-600">Crear respaldos automáticamente</p>
                        </div>
                        <Switch 
                          checked={settings.backup.autoBackup}
                          onCheckedChange={(checked) => setSettings({
                            ...settings,
                            backup: { ...settings.backup, autoBackup: checked }
                          })}
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <Label className="text-base font-medium">Almacenamiento en la Nube</Label>
                          <p className="text-sm text-gray-600">Subir backups a almacenamiento externo</p>
                        </div>
                        <Switch 
                          checked={settings.backup.cloudStorage}
                          onCheckedChange={(checked) => setSettings({
                            ...settings,
                            backup: { ...settings.backup, cloudStorage: checked }
                          })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="backupFrequency">Frecuencia de Backup</Label>
                        <Select value={settings.backup.backupFrequency}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hourly">Cada hora</SelectItem>
                            <SelectItem value="daily">Diario</SelectItem>
                            <SelectItem value="weekly">Semanal</SelectItem>
                            <SelectItem value="monthly">Mensual</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="retentionDays">Días de Retención</Label>
                        <Input 
                          id="retentionDays" 
                          type="number"
                          value={settings.backup.retentionDays}
                          onChange={(e) => setSettings({
                            ...settings,
                            backup: { ...settings.backup, retentionDays: parseInt(e.target.value) }
                          })}
                        />
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle className="w-5 h-5 text-yellow-600" />
                        <h4 className="font-medium text-yellow-800">Última Copia de Seguridad</h4>
                      </div>
                      <p className="text-sm text-yellow-700">
                        Última copia: Hace 2 horas | Tamaño: 1.2 GB | Estado: Exitoso
                      </p>
                    </div>

                    <div className="flex space-x-2">
                      <Button onClick={() => handleSave('backup')}>
                        <Save className="w-4 h-4 mr-2" />
                        Guardar Cambios
                      </Button>
                      <Button variant="outline" onClick={handleBackup}>
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Crear Backup Ahora
                      </Button>
                      <Button variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Descargar Último Backup
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminSettings;
