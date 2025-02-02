import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/MainNavigation";

const useCart = (
  navigation: NativeStackNavigationProp<RootStackParamList, "Cart">
) => {
  const onBackPress = () => {
    navigation.goBack();
  };
  return { onBackPress };
};

export default useCart;
