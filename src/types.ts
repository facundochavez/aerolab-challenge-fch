export type WalkthroughStep = {
  position: number;
  title: string;
  description: string;
  icon: string;
  imageDesktop: string;
  imageMobile: string;
};

export type SortOption = {
  id: 'price' | 'date';
  label: string;
  upText: string;
  downText: string;
};

export type Product = {
  _id: string;
  name: string;
  cost: number;
  category: string;
  img: {
    url: string;
    hdUrl: string;
  };
};

export type ProductCardState = 'enabled' | 'disabled' | 'processing' | 'charging';

import { store } from '@/redux/store';
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export interface User {
  id: string | null;
  name: string;
  points: number | undefined;
  redeemHistory: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed' | 'processing' | undefined;

}