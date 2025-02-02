export type ProductResponse = Data[];

export interface Data {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  images?: Array<string>;
  cartCount: number;
}

export interface Rating {
  rate: number;
  count: number;
}
