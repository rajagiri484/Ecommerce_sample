import { StyleSheet } from "react-native";
import { colors } from "../../../assets/colors";

const cartListStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: "hidden",
    padding: 5,
  },
  image: {
    width: 100,
    height: 120,
  },
  marginL8: {
    marginLeft: 8,
  },
  titleText: {
    marginTop: 10,
    color: colors.black,
    fontWeight: "800",
    fontSize: 15,
  },
  categoryText: {
    marginTop: 5,
    color: colors.grey,
    fontWeight: "600",
    fontSize: 14,
  },
  priceText: {
    marginTop: 5,
    color: colors.black,
    fontWeight: "800",
    fontSize: 15,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: colors.fadedWhite,
    marginTop: 5,
    height: 30,
    width: 120,
    borderRadius: 5,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  buttonText: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "bold",
  },
  countText: {
    color: colors.black,
    fontSize: 15,
    fontWeight: "bold",
  },
});
export default cartListStyle;
