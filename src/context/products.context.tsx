'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { showToast } from '@/utils/showToast';

interface Product {
  _id: string;
  name: string;
  cost: number;
  category: string;
  img: {
    url: string;
    hdUrl: string;
  };
}

interface ProductsContextProps {
  products: Product[] | null;
  sortedBy: 'price' | 'date';
  setSortedBy: React.Dispatch<React.SetStateAction<'price' | 'date'>>;
  sortDirection: 'up' | 'down';
  setSortDirection: React.Dispatch<React.SetStateAction<'up' | 'down'>>;
  selectedProductId: string | null;
  setSelectedProductId: React.Dispatch<React.SetStateAction<string | null>>;
}

const ProductsContext = createContext<ProductsContextProps | undefined>(
  undefined
);

interface ProductsProviderProps {
  children: React.ReactNode;
}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const INITIAL_PRODUCTS = Array.from(
    { length: 6 },
    (_) =>
      ({
        _id: '',
        name: '',
        cost: 0,
        category: '',
        img: { url: '', hdUrl: '' },
      } as Product)
  );
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const [sortedBy, setSortedBy] = useState<'price' | 'date'>('date');
  const [sortDirection, setSortDirection] = useState<'up' | 'down'>('up');

  // FETCHING PRODUCTS THE FIRST TIME
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://coding-challenge-api.aerolab.co/products',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_AEROLAB_CHALLENGE_API_KEY}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to get products: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error instanceof Error ? error.message : 'Unknown error');
        showToast('error', '', 'Failed to get products.');
        throw error;
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        sortedBy,
        setSortedBy,
        sortDirection,
        setSortDirection,
        selectedProductId,
        setSelectedProductId,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error(
      'useProductsContext must be used within a ProductsProvider'
    );
  }
  return context;
};

export default ProductsProvider;
