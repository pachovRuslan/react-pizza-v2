
export type Pizza = {
    id: string;
    title: string;
    imageUrl: string;
    price: number;
    count: number;
    types: number[];
    sizes: number[];
  }
  
  export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
  }
  
  export interface PizzaSliceState {
    items:Pizza[];
    status: Status
  }