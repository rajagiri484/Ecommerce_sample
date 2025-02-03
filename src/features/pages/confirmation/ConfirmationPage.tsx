import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import confirmationStyles from "./styles";
import { icon } from "../../../assets/icon";
import cartStyles from "../cart/styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/MainNavigation";
import { CommonActions } from "@react-navigation/native";

export type ConfirmationScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Confirmation"
>;

const ConfirmationPage: React.FC<ConfirmationScreenProps> = ({
  navigation,
}) => {
  return (
    <View style={confirmationStyles.container}>
      <Image source={icon.thumbsUp} />
      <Text style={confirmationStyles.text}>Order Successfully placed !</Text>

      <TouchableOpacity
        onPress={() =>
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "Home", params: {} }],
            })
          )
        }
        activeOpacity={0.8}
        style={confirmationStyles.buttonStyle}
      >
        <Text style={cartStyles.buttontext}>Go to home</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ConfirmationPage;
