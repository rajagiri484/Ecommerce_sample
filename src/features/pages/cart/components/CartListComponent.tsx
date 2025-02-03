import React from "react";
import { FlatList, View } from "react-native";
import cartStyles from "../styles";
import { Data } from "../../../../types/ProductListInterface";
import CartItem from "../../../controlledComponents/cartListItem/CartItem";

interface CartListInterface {
  data: Data[];
  onAddToCart: (isAddToCart: boolean, item: Data) => void;
  showOnlyQuantity: boolean;
}

const CartListComponent: React.FC<CartListInterface> = ({
  data = [],
  onAddToCart,
  showOnlyQuantity = false,
}) => {
  const renderItem = ({ item }: { item: Data }) => (
    <CartItem
      price={item.price}
      category={item.category}
      count={item.cartCount}
      title={item.title}
      image={item.image}
      onAddToCart={(isAdd) => onAddToCart(isAdd ? true : false, item)}
      showQuantity={showOnlyQuantity}
    />
  );
  return (
    <FlatList
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      data={data}
    />
  );
};
export default React.memo(CartListComponent);
