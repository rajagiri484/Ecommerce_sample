import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import Toolbar from "../../controlledComponents/toolbar/Toolbar";
import useProduct from "./productHooks/useProduct";
import productStyles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/MainNavigation";
import Carousel from "../home/components/Carousel";
import homeStyles from "../home/styles";
import { icon } from "../../../assets/icon";
import { strings } from "../../../assets/strings";
import toolBarStyles from "../../controlledComponents/toolbar/styles";

export type ProductScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Product"
>;

const Product: React.FC<ProductScreenProps> = ({ route, navigation }) => {
  const {
    onBackPress,
    images,
    onAddToCart,
    selectedCount,
    cartItemsCount,
    onCartPress,
  } = useProduct(route, navigation);

  return (
    <View style={productStyles.container}>
      <Toolbar
        title={strings.detail}
        onBackPress={onBackPress}
        isHome={false}
        showBag={true}
        count={cartItemsCount}
        onCartPress={onCartPress}
      />

      <ScrollView>
        <View style={homeStyles.listContainer}>
          <Carousel data={images} />
          <View style={productStyles.marginT15}>
            <Text
              style={productStyles.categoryText}
            >{`Category - ${route.params.params.category}`}</Text>

            <Text style={productStyles.titleText}>
              {route.params.params.title}
            </Text>
            <View style={productStyles.midContainer}>
              <Text style={productStyles.priceText}>
                Price
                <Text> {` -  ${route.params.params.price} $`} </Text>
              </Text>
              <View style={productStyles.ratingsContainer}>
                <Text style={productStyles.ratingsText}>
                  {`${route.params.params.rating.count} ratings `}
                </Text>
                <Image style={productStyles.iconStar} source={icon.star} />
              </View>
            </View>

            <Text
              style={productStyles.descText}
            >{`Description - ${route.params.params.description}`}</Text>
          </View>
        </View>
      </ScrollView>

      {selectedCount > 0 ? (
        <View style={productStyles.bottomMainContainer}>
          <View style={productStyles.bottomContainer}>
            <TouchableOpacity
              onPress={() => onAddToCart(false)}
              style={productStyles.plusContainer}
            >
              <Text style={productStyles.plusText}>-</Text>
            </TouchableOpacity>
            <Text style={productStyles.countText}>{selectedCount}</Text>
            <TouchableOpacity
              onPress={() => onAddToCart(true)}
              style={productStyles.plusContainer}
            >
              <Text style={productStyles.plusText}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={onCartPress} style={toolBarStyles.row}>
            <Image style={toolBarStyles.icon} source={icon.bag} />
            <View style={toolBarStyles.circleCont}>
              <Text style={toolBarStyles.countText}>{cartItemsCount}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => onAddToCart(true)}
          activeOpacity={0.8}
          style={productStyles.buttonStyle}
        >
          <Text style={productStyles.buttontext}>Add to cart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Product;
