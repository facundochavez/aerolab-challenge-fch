export type WalkthroughStep = {
  position: number;
  title: string;
  description: string;
  icon: string;
  imageDesktop: string;
  imageMobile: string;
}

export type SortOption = {
  id: 'price' | 'date';
  label: string;
  upText: string;
  downText: string;
}