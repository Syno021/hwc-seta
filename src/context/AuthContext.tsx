import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export type Role = 'admin' | 'student';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
}

interface AuthContextValue {
  user: User | null;
  login: (email: string, password: string, role: Role) => void;
  logout: () => void;
  register: (data: RegisterData) => void;
  isAuthenticated: boolean;
}

interface RegisterData {
  fullName: string;
  idNumber: string;
  email: string;
  phone: string;
  programme: string;
  password: string;
  idDocument?: File;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const MOCK_ADMIN = { id: '1', email: 'admin@hwcseta.gov.za', name: 'Admin User', role: 'admin' as Role };
const MOCK_STUDENT = { id: '2', email: 'student@example.com', name: 'Student User', role: 'student' as Role };

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((email: string, _password: string, role: Role) => {
    // Demo: accept any password and use selected role
    if (role === 'admin') {
      setUser({ ...MOCK_ADMIN, email, name: 'Admin User' });
    } else {
      setUser({ ...MOCK_STUDENT, email, name: 'Student User' });
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const register = useCallback((_data: RegisterData) => {
    setUser({
      id: 'new',
      email: _data.email,
      name: _data.fullName,
      role: 'student',
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
