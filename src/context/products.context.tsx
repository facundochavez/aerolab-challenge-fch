'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { showToast } from '@/utils/showToast';
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '@/utils/localStorageUtils';

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
  groupedProducts: Product[][];
  orderBy: 'date' | 'price' | 'name';
  setOrderBy: React.Dispatch<React.SetStateAction<'date' | 'price' | 'name'>>;
  orderDirection: 'up' | 'down';
  setOrderDirection: React.Dispatch<React.SetStateAction<'up' | 'down'>>;
  selectedProductId: string | null;
  setSelectedProductId: React.Dispatch<React.SetStateAction<string | null>>;
  categories: string[];
  filterCategory: string;
  setFilterCategory: React.Dispatch<React.SetStateAction<string>>;
  currentProductsPage: number;
  setCurrentProductsPage: React.Dispatch<React.SetStateAction<number>>;
  totalProductsPages: number;
  orderedProductsLen: number;
}

const ProductsContext = createContext<ProductsContextProps | undefined>(
  undefined
);

interface ProductsProviderProps {
  children: React.ReactNode;
}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [orderedProducts, setOrderedProducts] = useState<Product[]>([]);
  const orderedProductsLen = orderedProducts.length;
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  // READ VALUES FROM LOCALSTORAGE
  const [orderBy, setOrderBy] = useState<'date' | 'price' | 'name'>(
    () => getFromLocalStorage('orderBy', 'date') as 'price' | 'date'
  );
  const [orderDirection, setOrderDirection] = useState<'up' | 'down'>(
    () => getFromLocalStorage('orderDirection', 'up') as 'up' | 'down'
  );
  const [filterCategory, setFilterCategory] = useState<string>(() =>
    getFromLocalStorage('filterCategory', '')
  );
  const [categories, setCategories] = useState<string[]>([]);

  // SAVE VALUES TO LOCALSTORAGE
  useEffect(() => {
    saveToLocalStorage('orderBy', orderBy);
  }, [orderBy]);

  useEffect(() => {
    saveToLocalStorage('orderDirection', orderDirection);
  }, [orderDirection]);

  useEffect(() => {
    saveToLocalStorage('filterCategory', filterCategory);
  }, [filterCategory]);

  // FETCH PRODUCTS THE FIRST TIME
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

  // GET CATEGORIES
  useEffect(() => {
    if (products) {
      const uniqueCategories = [
        ...new Set(products.map((product) => product.category)),
      ];
      uniqueCategories.sort((a, b) => {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      });
      setCategories(uniqueCategories);
    }
  }, [products]);

  // FILTER PRODUCTS

  useEffect(() => {
    const handleFilter = () => {
      if (!products) return;
      if (filterCategory === 'All Products' || filterCategory === '') {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(
          products.filter((product) => product.category === filterCategory)
        );
      }
    };

    handleFilter();
  }, [filterCategory, products]);

  // ORDER PRODUCTS
  useEffect(() => {
    const handleOrder = () => {
      let sorted;

      switch (orderBy) {
        case 'price':
          sorted = [...filteredProducts].sort((a, b) => {
            if (orderDirection === 'up') {
              return b.cost - a.cost; // LOW TO HIGH
            } else {
              return a.cost - b.cost; // HIGH TO LOW
            }
          });
          break;

        case 'name':
          sorted = [...filteredProducts].sort((a, b) => {
            if (orderDirection === 'up') {
              return a.name.localeCompare(b.name); // A-Z
            } else {
              return b.name.localeCompare(a.name); // Z-A
            }
          });
          break;

        case 'date':
          sorted =
            orderDirection === 'up'
              ? [...filteredProducts] // MOST RECENT
              : [...filteredProducts].reverse(); // MOST ANCIENT
          setOrderedProducts(sorted);
          break;
      }

      setOrderedProducts(sorted);
    };

    handleOrder();
  }, [orderBy, orderDirection, filteredProducts]);

  // PAGINATE PRODUCTS
  const INITIAL_PRODUCTS = Array.from(
    { length: 8 },
    (_) =>
      ({
        _id: '',
        name: '',
        cost: 0,
        category: '',
        img: { url: '', hdUrl: '' },
      } as Product)
  );
  const [groupedProducts, setGroupedProducts] = useState<Product[][]>([
    INITIAL_PRODUCTS,
  ]);

  useEffect(() => {
    const handleGroupProducts = () => {
      if (orderedProducts.length > 0) {
        const grouped = orderedProducts.reduce((acc, _, index) => {
          if (index % 16 === 0) {
            acc.push(orderedProducts.slice(index, index + 16));
          }
          return acc;
        }, [] as Product[][]);
        setGroupedProducts([...grouped]);
      }
    };

    handleGroupProducts();
  }, [orderedProducts]);

  const totalProductsPages = groupedProducts?.length || 0;
  const [currentProductsPage, setCurrentProductsPage] = useState(1);

  useEffect(() => {
    setCurrentProductsPage(1);
  }, [filterCategory, orderBy, orderDirection, selectedProductId]);

  return (
    <ProductsContext.Provider
      value={{
        groupedProducts,
        orderBy,
        setOrderBy,
        orderDirection,
        setOrderDirection,
        selectedProductId,
        setSelectedProductId,
        categories,
        filterCategory,
        setFilterCategory,
        currentProductsPage,
        setCurrentProductsPage,
        totalProductsPages,
        orderedProductsLen,
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
