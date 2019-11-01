import Author from './author';

export default interface ProductsList {
  author: Author;
  categories: string[];
  items: Product[]
}

export interface ProductList {
  author: Author;
  item: Product
}

export interface Product {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: 32999;
    decimals: 2
  };
  categories?: string[];
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity? : number;
  description? : string;
}
