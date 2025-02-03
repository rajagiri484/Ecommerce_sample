import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { CartScreenProps } from "../cart/Cart";
import useCart from "../cart/cartHooks/useCart";
import cartStyles from "../cart/styles";
import CartListComponent from "../cart/components/CartListComponent";
import Toolbar from "../../controlledComponents/toolbar/Toolbar";
import { strings } from "../../../assets/strings";
import { icon } from "../../../assets/icon";

const CartReview: React.FC<CartScreenProps> = ({ navigation }) => {
  const { onBackPress, cartdata, cartItemsPrice, onAddToCart, onPlaceOrder } =
    useCart(navigation);
  return (
    <View style={cartStyles.container}>
      <Toolbar
        isHome={false}
        title={strings.cartReview}
        showBag={false}
        onBackPress={onBackPress}
      />
      <View style={cartStyles.listContainer}>
        <CartListComponent
          showOnlyQuantity={true}
          onAddToCart={onAddToCart}
          data={cartdata}
        />
      </View>

      <View>
        <View style={cartStyles.paymentContainer}>
          <View style={cartStyles.cardContainer}>
            <Text style={cartStyles.textCard}>{strings.mastercard}</Text>
            <Image source={icon.checkboxGreen} />
          </View>

          <Text style={cartStyles.textCardNo}>{strings.cardNo}</Text>
          <View style={cartStyles.cvvContainer}>
            <Text style={cartStyles.expirytext}>{strings.expiry}</Text>
            <Text style={cartStyles.cvvText}>{strings.cvv}</Text>
          </View>

          <Text style={cartStyles.nameText}>{strings.name}</Text>
        </View>

        <View style={cartStyles.summary}>
          <Text style={cartStyles.textSummary}>{strings.order_total}</Text>
          <Text style={cartStyles.textSummary}>{`${cartItemsPrice} $`}</Text>
        </View>
        <View style={cartStyles.summary}>
          <Text style={cartStyles.textSummary}>{strings.taxes}</Text>
          <Text style={cartStyles.textSummary}>{`10 $`}</Text>
        </View>
        <View style={cartStyles.summary}>
          <Text style={cartStyles.textSummary}>
            {strings.total_amount_payable}
          </Text>
          <Text style={cartStyles.textSummary}>{`${
            Math.round((cartItemsPrice + 10) * 100) / 100
          } $`}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={onPlaceOrder}
        activeOpacity={0.8}
        style={cartStyles.buttonStyle}
      >
        <Text style={cartStyles.buttontext}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CartReview;
