import { createContext, useState, useEffect, useContext, ReactNode } from 'react';


interface AuthData {
  user: any; // Define your user type here
  token: string;
}

interface AuthContextType {
  auth: AuthData;
  setAuth: React.Dispatch<React.SetStateAction<AuthData>>;
  logout: () => void;
}



const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<AuthData>({
    user: null,
    token: localStorage.getItem('token') || '', // Initialize with token from local storage
  });

  const logout = () => {
    // Clear user session without removing details from local storage
    setAuth({ user: null, token: '' });
    localStorage.removeItem('token'); 
  };

  useEffect(() => {
    // Check if token exists in local storage on app initialization
    const token = localStorage.getItem('token');
    if (token) {
      setAuth((prevAuth) => ({ ...prevAuth, token }));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth,  setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { useAuth, AuthProvider };
