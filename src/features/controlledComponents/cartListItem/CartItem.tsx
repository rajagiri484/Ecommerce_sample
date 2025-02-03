import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { icon } from "../../../assets/icon";
import { colors } from "../../../assets/colors";
import cartListStyle from "./styles";

const CartItem = ({
  image = "",
  title = "",
  count = 0,
  category = "",
  price = 0,
  showQuantity = false,
  onAddToCart = (isAdd = true) => {},
}) => {
  return (
    <View style={cartListStyle.container}>
      <Image
        resizeMode="stretch"
        style={cartListStyle.image}
        source={{ uri: image }}
      />
      <View style={cartListStyle.marginL8}>
        <Text style={cartListStyle.titleText}>
          {title.length > 32 ? `${title.substring(0, 30)}...` : title}
        </Text>
        <Text style={cartListStyle.categoryText}>{category}</Text>

        <Text style={cartListStyle.priceText}>{`${price} $`}</Text>

        {showQuantity ? (
          <Text style={cartListStyle.priceText}>{`Quantity - ${count}`}</Text>
        ) : (
          <View style={cartListStyle.bottomContainer}>
            <TouchableOpacity
              onPress={() => onAddToCart(false)}
              style={cartListStyle.buttonContainer}
            >
              <Text style={cartListStyle.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={cartListStyle.countText}>{count}</Text>
            <TouchableOpacity
              onPress={() => onAddToCart(true)}
              style={cartListStyle.buttonContainer}
            >
              <Text style={cartListStyle.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};
export default CartItem;
