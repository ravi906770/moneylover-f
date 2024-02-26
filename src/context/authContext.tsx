import { createContext, useState, useEffect, useContext, ReactNode } from 'react';


interface AuthData {
  user : {
    email: string;
    password : string;
  }
 // Define your user type here
  access_token: string;
}

interface AuthContextType {
  auth: AuthData;
  setAuth: React.Dispatch<React.SetStateAction<AuthData>>;
  logout: () => void;
}



const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<AuthData>({
    user : {
      email : '',
      password : ''
    },
    access_token: localStorage.getItem('access_token') || '', // Initialize with token from local storage
  });

  const logout = () => {
    // Clear user session without removing details from local storage
    setAuth({ user: {
      email : '',
      password : ''
    }, access_token: '' });
    localStorage.removeItem('access_token'); 
  };

  useEffect(() => {
    // Check if token exists in local storage on app initialization
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      setAuth((prevAuth) => ({ ...prevAuth,  access_token}));
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
