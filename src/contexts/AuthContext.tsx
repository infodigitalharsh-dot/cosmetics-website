import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  addresses: Address[];
  orders: Order[];
}

export interface Address {
  id: string;
  type: 'home' | 'work' | 'other';
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
  addAddress: (address: Omit<Address, 'id'>) => void;
  updateAddress: (id: string, updates: Partial<Address>) => void;
  deleteAddress: (id: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Bypass authentication - accept any email/password
    const mockUser: User = {
      id: '1',
      name: email.split('@')[0],
      email,
      addresses: [],
      orders: []
    };
    setUser(mockUser);
    return true;
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // Bypass authentication - accept any credentials
    const mockUser: User = {
      id: '1',
      name,
      email,
      addresses: [],
      orders: []
    };
    setUser(mockUser);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (updates: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updates });
    }
  };

  const addAddress = (address: Omit<Address, 'id'>) => {
    if (user) {
      const newAddress: Address = {
        ...address,
        id: Date.now().toString(),
      };
      setUser({ ...user, addresses: [...user.addresses, newAddress] });
    }
  };

  const updateAddress = (id: string, updates: Partial<Address>) => {
    if (user) {
      const updatedAddresses = user.addresses.map(addr =>
        addr.id === id ? { ...addr, ...updates } : addr
      );
      setUser({ ...user, addresses: updatedAddresses });
    }
  };

  const deleteAddress = (id: string) => {
    if (user) {
      const filteredAddresses = user.addresses.filter(addr => addr.id !== id);
      setUser({ ...user, addresses: filteredAddresses });
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
    updateProfile,
    addAddress,
    updateAddress,
    deleteAddress,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};