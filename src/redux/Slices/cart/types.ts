export type CartItem = {
    id: string;
    price: number;
    title: string;
    imageUrl: string;
    types: string;
    sizes: number;
    count: number;
  };
  
  export interface cartSliceState {
    totalPrica: number;
    items: CartItem[];
  }