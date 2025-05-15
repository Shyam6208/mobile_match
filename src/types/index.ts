export interface Smartphone {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  processor: string;
  ram: string[];
  storage: string[];
  camera: string;
  battery: string;
  display: string;
  os: string;
  releaseDate: string;
  rating: number;
  popular: boolean;
  features: string[];
  category: string[];
}

export type PriceRange = {
  min: number;
  max: number;
};

export type FilterOptions = {
  priceRange: PriceRange;
  brands: string[];
  features: string[];
  category: string[];
  search: string;
};