import React from "react";
import { View } from "react-native";
import homeStyles from "../home/styles";
import Toolbar from "../../controlledComponents/toolbar/Toolbar";
import Search from "../../controlledComponents/search/Search";
import ListComponent from "../home/components/ListComponent";
import useSearch from "./searchHooks/useSearch";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/MainNavigation";

export type SearchScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "SearchPage"
>;

const SearchPage: React.FC<SearchScreenProps> = ({ navigation }) => {
  const {
    data,
    onChangeText,
    searchText,
    onBackPress,
    goToProduct,
    cartItemsCount,
    onCartPress,
  } = useSearch(navigation);

  return (
    <View style={homeStyles.container}>
      <Toolbar
        onBackPress={onBackPress}
        isHome={false}
        showBag={true}
        count={cartItemsCount}
        title="Search"
        onCartPress={onCartPress}
      />
      <Search value={searchText} onChangeText={onChangeText} />
      <View style={homeStyles.listContainer}>
        <ListComponent
          goToProduct={goToProduct}
          fromSearch={true}
          data={data}
        />
      </View>
    </View>
  );
};

export default SearchPage;
