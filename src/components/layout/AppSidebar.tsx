
import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  BookOpen, 
  CreditCard, 
  Users, 
  User, 
  LogOut,
  Gift,
  BarChart3,
  FileText,
  UsersRound,
  Crown,
  Calendar,
  Settings,
  Video,
  MessageSquare,
  Bell,
  HelpCircle,
  Award,
  Library,
  TrendingUp,
  Globe,
  BookMarked,
  ClipboardList
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const { user, logout } = useAuth();
  const currentPath = location.pathname;

  const isCollapsed = state === 'collapsed';

  const userMenuItems = [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { title: "Cursos", url: "/courses", icon: BookOpen },
    { title: "Mi Progreso", url: "/progress", icon: TrendingUp },
    { title: "Biblioteca", url: "/library", icon: Library },
    { title: "Certificados", url: "/certificates", icon: Award },
    { title: "Calendario", url: "/calendar", icon: Calendar },
    { title: "Comunidad", url: "/community", icon: Globe },
    { title: "Mensajes", url: "/messages", icon: MessageSquare },
    { title: "Reportes", url: "/reports", icon: ClipboardList },
    { title: "Suscripción", url: "/subscription", icon: CreditCard },
    { title: "Referidos", url: "/referrals", icon: Gift },
    { title: "Notificaciones", url: "/notifications", icon: Bell },
    { title: "Ayuda", url: "/help", icon: HelpCircle },
    { title: "Perfil", url: "/profile", icon: User },
  ];

  const adminMenuItems = [
    { title: "Dashboard Admin", url: "/admin", icon: LayoutDashboard },
    { title: "Usuarios", url: "/admin/users", icon: UsersRound },
    { title: "Cursos", url: "/admin/courses", icon: BookOpen },
    { title: "Contenido", url: "/admin/content", icon: FileText },
    { title: "Planes", url: "/admin/plans", icon: Crown },
    { title: "Sesiones", url: "/admin/sessions", icon: Video },
    { title: "Analíticas", url: "/admin/analytics", icon: BarChart3 },
    { title: "Configuración", url: "/admin/settings", icon: Settings },
  ];

  const menuItems = user?.role === 'admin' ? adminMenuItems : userMenuItems;

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent>
        {/* Logo */}
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            {!isCollapsed && (
              <div>
                <h2 className="font-bold text-lg">ContableApp</h2>
                <Badge variant="secondary" className="text-xs">
                  {user?.subscription?.plan || 'Free'}
                </Badge>
              </div>
            )}
          </div>
        </div>

        {/* User Info */}
        {!isCollapsed && user && (
          <div className="p-4 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{user.name}</p>
                <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant={user.role === 'admin' ? 'default' : 'secondary'} className="text-xs">
                    {user.role === 'admin' ? 'Super Admin' : 'Empresa'}
                  </Badge>
                  {user.role === 'admin' && (
                    <Badge variant="outline" className="text-xs text-green-600">
                      Acceso Total
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>
            {user?.role === 'admin' ? 'Panel de Administración' : 'Menú Principal'}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) => 
                        isActive 
                          ? "bg-primary text-primary-foreground font-medium" 
                          : "hover:bg-muted/50"
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Admin Status Indicator */}
        {!isCollapsed && user?.role === 'admin' && (
          <div className="px-4 py-2">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg border">
              <div className="flex items-center space-x-2">
                <Crown className="w-4 h-4 text-blue-600" />
                <div>
                  <p className="text-xs font-medium text-gray-900">Modo Administrador</p>
                  <p className="text-xs text-gray-600">Control total del sistema</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Logout */}
        <div className="mt-auto p-4">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
            onClick={logout}
          >
            <LogOut className="h-4 w-4" />
            {!isCollapsed && <span className="ml-2">Cerrar Sesión</span>}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
