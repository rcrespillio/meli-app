import Author from './author';

export default interface ProductsList {
  author: Author,
  categories: string[],
  items: Product[]
}

export interface Product {
  id: string,
  title: string,
  price: {
    currency: string,
    amount: 32999,
    decimals: 2
  },
  picture: string,
  condition: string,
  free_shipping: boolean
}
