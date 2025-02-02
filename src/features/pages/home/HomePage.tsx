import React from "react";
import { View, ActivityIndicator } from "react-native";
import useHome from "./homePageHooks/useHome";
import homeStyles from "./styles";
import Toolbar from "../../controlledComponents/toolbar/Toolbar";
import Search from "../../controlledComponents/search/Search";
import ListComponent from "./components/ListComponent";
import { colors } from "../../../assets/colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/MainNavigation";
import { strings } from "../../../assets/strings";

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

const HomePage: React.FC<HomeScreenProps> = ({ navigation }) => {
  const {
    data,
    onChangeText,
    searchText,
    onBackPress,
    onSearchClick,
    goToProduct,
    cartItemsCount,
    onCartPress,
  } = useHome(navigation);

  return (
    <View style={homeStyles.container}>
      <Toolbar
        onBackPress={onBackPress}
        onSearchClick={onSearchClick}
        onCartPress={onCartPress}
        isHome={true}
        showBag={true}
        count={cartItemsCount}
        title={strings.appname}
      />
      {data?.length > 0 ? (
        <View style={homeStyles.listContainer}>
          <ListComponent goToProduct={goToProduct} data={data} />
        </View>
      ) : (
        <View style={homeStyles.loader}>
          <ActivityIndicator size={"large"} color={colors.black} />
        </View>
      )}
    </View>
  );
};

export default HomePage;
