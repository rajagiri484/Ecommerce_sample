import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import cartStyles from "./styles";
import Toolbar from "../../controlledComponents/toolbar/Toolbar";
import { strings } from "../../../assets/strings";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/MainNavigation";
import useCart from "./cartHooks/useCart";
import CartListComponent from "./components/CartListComponent";

export type CartScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Cart"
>;

const Cart: React.FC<CartScreenProps> = ({ navigation }) => {
  const { onBackPress, cartdata, cartItemsPrice, onAddToCart, onCheckout } =
    useCart(navigation);
  return (
    <View style={cartStyles.container}>
      <Toolbar
        isHome={false}
        title={strings.cart}
        showBag={false}
        onBackPress={onBackPress}
      />
      <View style={cartStyles.listContainer}>
        <CartListComponent
          showOnlyQuantity={false}
          onAddToCart={onAddToCart}
          data={cartdata}
        />
      </View>

      <View style={cartStyles.summary}>
        <Text style={cartStyles.textSummary}>{strings.order_total}</Text>
        <Text style={cartStyles.textSummary}>{`${cartItemsPrice} $`}</Text>
      </View>

      <TouchableOpacity
        onPress={onCheckout}
        activeOpacity={0.8}
        style={cartStyles.buttonStyle}
      >
        <Text style={cartStyles.buttontext}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Cart;
