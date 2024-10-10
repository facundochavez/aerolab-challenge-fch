'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProductsContextProps {
  sortedBy: 'price' | 'date';
  setSortedBy: React.Dispatch<React.SetStateAction<'price' | 'date'>>;
  sortDirection: 'up' | 'down';
  setSortDirection: React.Dispatch<React.SetStateAction<'up' | 'down'>>;
}

const ProductsContext = createContext<ProductsContextProps | undefined>(undefined);

interface ProductsProviderProps {
  children: React.ReactNode;
}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [sortedBy, setSortedBy] = useState<'price' | 'date'>('price');
  const [sortDirection, setSortDirection] = useState<'up' | 'down'>('up');

  return (
    <ProductsContext.Provider
      value={{
        sortedBy,
        setSortedBy,
        sortDirection,
        setSortDirection,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProductsContext must be used within a ProductsProvider');
  }
  return context;
};

export default ProductsProvider;
