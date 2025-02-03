import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/MainNavigation";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { useCallback, useMemo } from "react";
import {
  checkAndInsertInCart,
  getPriceAllCartItems,
} from "../../../../utils/Utility";
import { Data } from "../../../../types/ProductListInterface";
import { addToCart } from "../../product/state/cartdata.thunk";
import { CommonActions } from "@react-navigation/native";

const useCart = (
  navigation: NativeStackNavigationProp<RootStackParamList, "Cart">
) => {
  const dispatch = useAppDispatch();
  const { cartdata } = useAppSelector((state) => state.cartList);

  const onBackPress = () => {
    navigation.goBack();
  };

  const onAddToCart = useCallback(
    (isAddToCart = true, item: Data) => {
      // add items to cart reducer
      const cartData = JSON.parse(JSON.stringify(cartdata));
      const itemID = item.id;
      const dataItem = item;
      const response = checkAndInsertInCart(
        cartData,
        itemID,
        dataItem,
        isAddToCart
      );
      dispatch(addToCart(response));
    },
    [cartdata]
  );

  const cartItemsPrice = useMemo(() => {
    return getPriceAllCartItems(cartdata);
  }, [cartdata]);

  const onCheckout = () => navigation.navigate("CartReview", { params: "" });

  const onPlaceOrder = () => {
    // clear cart reducer data and navigation
    dispatch(addToCart([]));
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Confirmation", params: {} }],
      })
    );
  };

  return {
    onBackPress,
    cartdata,
    cartItemsPrice,
    onAddToCart,
    onCheckout,
    onPlaceOrder,
  };
};

export default useCart;
