'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface GlobalContextProps {
  aerocoins: number;
  setAerocoins: React.Dispatch<React.SetStateAction<number>>;
  selectedProductID: string;
  setSelectedProductID: React.Dispatch<React.SetStateAction<string>>;
  isProcessing: boolean;
  setIsProcessing: React.Dispatch<React.SetStateAction<boolean>>;
  handleAerocoins: (coins: number) => void;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [aerocoins, setAerocoins] = useState(62500
/*     localStorage.getItem('aerocoins')
      ? Number(localStorage.getItem('aerocoins'))
      : 62500 */
  );
  const [selectedProductID, setSelectedProductID] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleAerocoins = (coins: number) => {
    setIsProcessing(true);
    setTimeout(() => {
      setAerocoins((prev) => prev + coins);
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <GlobalContext.Provider
      value={{
        aerocoins,
        setAerocoins,
        selectedProductID,
        setSelectedProductID,
        isProcessing,
        setIsProcessing,
        handleAerocoins,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

export default GlobalProvider;
