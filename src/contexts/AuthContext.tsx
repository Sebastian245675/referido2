
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'empresa' | 'admin';
  company?: string;
  avatar?: string;
  subscription?: {
    plan: string;
    status: 'active' | 'inactive' | 'expired';
    expiresAt: string;
  };
  referralCode: string;
  referredBy?: string;
  permissions?: string[];
  lastLogin?: string;
  createdAt?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular verificación de sesión
    const token = localStorage.getItem('auth-token');
    const userData = localStorage.getItem('user-data');
    
    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (error) {
        localStorage.removeItem('auth-token');
        localStorage.removeItem('user-data');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simular delay de autenticación
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    let mockUser: User;
    
    // Credenciales específicas del administrador
    if (email === 'admin@gmail.com' && password === '123') {
      mockUser = {
        id: 'admin-001',
        name: 'Administrador Principal',
        email: 'admin@gmail.com',
        role: 'admin',
        referralCode: 'ADMIN2024',
        permissions: ['all'],
        lastLogin: new Date().toISOString(),
        createdAt: '2023-01-01T00:00:00Z',
        subscription: {
          plan: 'Enterprise',
          status: 'active',
          expiresAt: '2025-12-31'
        }
      };
    } else {
      // Usuario empresa regular
      mockUser = {
        id: `user-${Date.now()}`,
        name: email.includes('admin') ? 'Admin Usuario' : 'Usuario Empresa',
        email,
        role: email.includes('admin') ? 'admin' : 'empresa',
        company: email.includes('admin') ? 'ContableApp Admin' : 'Mi Empresa SAS',
        referralCode: `USER${Date.now()}`,
        lastLogin: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        subscription: {
          plan: 'Premium',
          status: 'active',
          expiresAt: '2024-12-31'
        }
      };
    }
    
    setUser(mockUser);
    localStorage.setItem('auth-token', 'mock-token');
    localStorage.setItem('user-data', JSON.stringify(mockUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user-data');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isLoading,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
