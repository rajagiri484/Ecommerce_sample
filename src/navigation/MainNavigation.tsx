import React, { ReactElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../features/pages/home/HomePage";
import SearchPage from "../features/pages/search/SearchPage";
import Product from "../features/pages/product/Product";
import { Data } from "../types/ProductListInterface";
import Cart from "../features/pages/cart/Cart";

export type RootStackParamList = {
  Home: undefined;
  SearchPage: { params: string };
  Product: { params: Data };
  Cart: { params: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation = (): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="SearchPage" component={SearchPage} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
