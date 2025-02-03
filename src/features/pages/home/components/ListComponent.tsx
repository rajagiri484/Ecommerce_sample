import React from "react";
import { FlatList, Text, View } from "react-native";
import { Data } from "../../../../types/ProductListInterface";
import ProductListItem from "../../../controlledComponents/ListItem.tsx/ProductListItem";
import { colors } from "../../../../assets/colors";
import homeStyles from "../styles";
import { mockImages, offerMockImages } from "../state/homedata.thunk";
import Carousel from "./Carousel";

interface ListInterface {
  data: Data[];
  fromSearch?: boolean;
  goToProduct: (item: Data) => void;
}

const ListComponent: React.FC<ListInterface> = ({
  data = [],
  fromSearch = false,
  goToProduct = (item: Data) => {},
}) => {
  const renderItem = ({ item }: { item: Data }) => (
    <ProductListItem
      image={item.image}
      title={item.title}
      price={item.price}
      onItemPressed={() => goToProduct(item)}
    />
  );

  const ItemSeparater = () => <View style={homeStyles.divider} />;

  const renderHeader = () =>
    !fromSearch ? <Carousel data={offerMockImages} /> : null;

  return (
    <FlatList
      contentContainerStyle={homeStyles.flatlistContainer}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      data={data}
      ListHeaderComponent={renderHeader}
      ItemSeparatorComponent={ItemSeparater}
    />
  );
};

export default React.memo(ListComponent);
