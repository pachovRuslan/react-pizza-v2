import { calcTotalPrice } from './calcTotalPrice';
export const getCatrFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrica = calcTotalPrice(items);
  return {
    items,
    totalPrica,
  };
};
