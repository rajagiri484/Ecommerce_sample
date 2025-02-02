import React from "react";
import { View } from "react-native";
import cartStyles from "./styles";
import Toolbar from "../../controlledComponents/toolbar/Toolbar";
import { strings } from "../../../assets/strings";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/MainNavigation";
import useCart from "./cartHooks/useCart";

export type CartScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Cart"
>;

const Cart: React.FC<CartScreenProps> = ({ navigation }) => {
  const { onBackPress } = useCart(navigation);
  return (
    <View style={cartStyles.container}>
      <Toolbar
        isHome={false}
        title={strings.cart}
        showBag={false}
        onBackPress={onBackPress}
      />
    </View>
  );
};
export default Cart;
