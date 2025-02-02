import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import searchStyles from "./styles";
import { strings } from "../../../assets/strings";
import { icon } from "../../../assets/icon";
import { colors } from "../../../assets/colors";
const Search = ({ value = "", onChangeText = (text: string) => {} }) => {
  return (
    <View style={searchStyles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        maxLength={30}
        style={searchStyles.textInput}
        placeholder={strings.placeHolderTextInput}
        placeholderTextColor={colors.black}
        autoFocus
      />
      <TouchableOpacity style={searchStyles.searchButton} activeOpacity={0.75}>
        <Image source={icon.searchIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
