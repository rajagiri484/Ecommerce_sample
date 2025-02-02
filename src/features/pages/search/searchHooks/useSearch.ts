import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { debounce } from "lodash";
import { useNavigation } from "@react-navigation/native";
import { updateSearchItems } from "../../home/state/homedata.thunk";
import { Data } from "../../../../types/ProductListInterface";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/MainNavigation";
import { getCountAllCartItems } from "../../../../utils/Utility";

const useSearch = (
  navigation: NativeStackNavigationProp<RootStackParamList, "SearchPage">
) => {
  const dispatch = useAppDispatch();
  const { data, immutableData } = useAppSelector((state) => state.productlist);
  const { cartdata } = useAppSelector((state) => state.cartList);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    return () => {
      // unmount TO-DO
      dispatch(updateSearchItems([...immutableData]));
    };
  }, [dispatch]);

  const performSearch = (text: string) => {
    const arr = [...immutableData];
    const newarr = arr.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    dispatch(updateSearchItems(newarr));
  };

  const handleDebounce = useCallback(
    debounce((text: string) => performSearch(text), 500),
    [data]
  );

  const onChangeText = useCallback(
    (text: string) => {
      setSearchText(text);
      handleDebounce(text);
    },
    [searchText, data]
  );

  const onBackPress = () => {
    navigation.goBack();
  };

  const goToProduct = (item: Data) =>
    navigation.navigate("Product", { params: item });

  const onCartPress = () => navigation.navigate("Cart", { params: "" });

  const cartItemsCount = useMemo(() => {
    return getCountAllCartItems(cartdata);
  }, [cartdata]);

  return {
    data,
    onChangeText,
    searchText,
    onBackPress,
    goToProduct,
    cartItemsCount,
    onCartPress,
  };
};
export default useSearch;
