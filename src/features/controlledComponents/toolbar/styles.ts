import { StyleSheet } from "react-native";
import { colors } from "../../../assets/colors";

const toolBarStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.primaryColor,
    elevation: 2,
    padding: 16,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black,
  },
  icon: { width: 28, height: 28 },
  circleCont: {
    width: 16,
    height: 16,
    borderRadius: 8,
    overflow: "hidden",
    borderColor: colors.black,
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  countText: {
    color: colors.black,
    fontSize: 9,
    fontWeight: "500",
  },
  row: { flexDirection: "row", marginLeft: 12 },
  rowDirection: { flexDirection: "row" },
  iconsContainer: { flexDirection: "row", alignItems: "center" },
  searchIcon: {
    width: 24,
    height: 24,
  },
  marginR10: { marginRight: 10 },
});
export default toolBarStyles;
