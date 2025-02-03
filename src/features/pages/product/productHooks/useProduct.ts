import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useEffect, useMemo, useState } from "react";
import { RootStackParamList } from "../../../../navigation/MainNavigation";
import { Data } from "../../../../types/ProductListInterface";
import { mockImages } from "../../home/state/homedata.thunk";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import {
  checkAndInsertInCart,
  getCountAllCartItems,
  getCountSelectedItem,
} from "../../../../utils/Utility";
import { addToCart } from "../state/cartdata.thunk";

const useProduct = (
  route: { params: { params: Data } },
  navigation: NativeStackNavigationProp<RootStackParamList, "Product">
) => {
  const dispatch = useAppDispatch();
  const [images, setImages] = useState<string[]>([]);
  const { cartdata } = useAppSelector((state) => state.cartList);

  useEffect(() => {
    const images =
      mockImages[0] === route.params.params.image
        ? [...mockImages]
        : [route.params.params.image, ...mockImages];
    setImages(images);
  }, []);

  const onBackPress = () => {
    navigation.goBack();
  };

  const onAddToCart = useCallback(
    (isAddToCart = true) => {
      // add items to cart reducer
      const cartData = JSON.parse(JSON.stringify(cartdata));
      const itemID = route.params.params.id;
      const dataItem = route.params.params;
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

  const selectedCount = useMemo(() => {
    return getCountSelectedItem(cartdata, route.params.params.id);
  }, [cartdata]);

  const cartItemsCount = useMemo(() => {
    return getCountAllCartItems(cartdata);
  }, [cartdata]);

  const onCartPress = () => navigation.navigate("Cart", { params: "" });

  return {
    onBackPress,
    images,
    onAddToCart,
    selectedCount,
    cartItemsCount,
    onCartPress,
  };
};
export default useProduct;
