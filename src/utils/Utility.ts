import { Data } from "../types/ProductListInterface";

export const checkAndInsertInCart = (
  data: Data[],
  itemID: number,
  dataItem: Data,
  isAddToCart = true
): Data[] => {
  let check = false;
  let removeIndex = -1;
  data.map((item, index) => {
    if (item.id === itemID) {
      if (isAddToCart) {
        item?.cartCount ? (item.cartCount += 1) : (item.cartCount = 1);
      } else {
        item.cartCount -= 1;
        if (item.cartCount === 0) {
          removeIndex = index;
        }
      }

      check = true;
    }
  });
  // check For index to be removed
  if (removeIndex !== -1) {
    data.splice(removeIndex, 1);
  }
  // check for item is whether or not in cart data then insert
  if (!check) {
    data.push({ ...dataItem, cartCount: 1 });
  }
  return data;
};

export const getCountSelectedItem = (data: Data[], itemID: number): number => {
  let count: number = 0;
  for (let i = 0; i < data?.length; i++) {
    if (itemID === data[i].id) {
      count = data[i].cartCount;
    }
  }
  return count;
};

export const getCountAllCartItems = (data: Data[]): number => {
  let count: number = 0;
  for (let i = 0; i < data?.length; i++) {
    count += data[i].cartCount;
  }
  return count;
};

export const getPriceAllCartItems = (data: Data[]): number => {
  let price: number = 0;
  for (let i = 0; i < data?.length; i++) {
    price += data[i].price * data[i].cartCount;
  }
  return Math.round(price * 100) / 100;
};
