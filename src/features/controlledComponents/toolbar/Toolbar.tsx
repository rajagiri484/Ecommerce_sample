import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import toolBarStyles from "./styles";
import { strings } from "../../../assets/strings";
import { icon } from "../../../assets/icon";

interface ToolbarInterface {
  isHome: boolean;
  showBag: boolean;
  count?: number;
  onBackPress?: () => void;
  onSearchClick?: () => void;
  onCartPress?: () => void;
  title: string;
}
const Toolbar: React.FC<ToolbarInterface> = ({
  isHome = true,
  showBag = false,
  count = 0,
  onBackPress = () => {},
  onSearchClick = () => {},
  onCartPress = () => {},
  title = strings.appname,
}) => {
  return (
    <View style={toolBarStyles.container}>
      {isHome ? (
        <Text style={toolBarStyles.titleText}>{title}</Text>
      ) : (
        <View style={toolBarStyles.rowDirection}>
          <TouchableOpacity
            style={toolBarStyles.marginR10}
            onPress={onBackPress}
            activeOpacity={0.75}
          >
            <Image source={icon.backArrowBlack} />
          </TouchableOpacity>
          <Text style={toolBarStyles.titleText}>{title}</Text>
        </View>
      )}

      <View style={toolBarStyles.iconsContainer}>
        {isHome && (
          <TouchableOpacity onPress={onSearchClick} activeOpacity={0.75}>
            <Image style={toolBarStyles.searchIcon} source={icon.searchIcon} />
          </TouchableOpacity>
        )}

        {showBag ? (
          <TouchableOpacity onPress={onCartPress} style={toolBarStyles.row}>
            <Image style={toolBarStyles.icon} source={icon.bag} />
            {count ? (
              <View style={toolBarStyles.circleCont}>
                <Text style={toolBarStyles.countText}>{count}</Text>
              </View>
            ) : null}
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default Toolbar;
