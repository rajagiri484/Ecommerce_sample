import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import listStyles from "./styles";

const ProductListItem = ({
  image = "",
  title = "",
  price = 0,
  onItemPressed = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={onItemPressed}
      activeOpacity={0.8}
      style={listStyles.itemContainer}
    >
      <Image
        resizeMode="stretch"
        source={{ uri: image }}
        style={listStyles.productImage}
      />
      <Text numberOfLines={2} style={listStyles.productName}>
        {title}
      </Text>
      <Text style={listStyles.productPrice}>{price + " $"}</Text>
    </TouchableOpacity>
  );
};

export default ProductListItem;
