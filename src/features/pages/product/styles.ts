import { StyleSheet } from "react-native";
import { colors } from "../../../assets/colors";

const productStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marginT15: {
    marginTop: 15,
  },
  categoryText: {
    fontSize: 13,
    fontWeight: "400",
    color: colors.black,
    marginTop: 10,
  },
  titleText: {
    fontSize: 18,
    color: colors.black,
    fontWeight: "bold",
    marginTop: 10,
  },
  midContainer: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceText: {
    fontSize: 15,
    color: colors.black,
    fontWeight: "800",
  },
  ratingsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  ratingsText: {
    fontSize: 15,
    color: colors.black,
    fontWeight: "800",
  },
  iconStar: {
    width: 20,
    height: 20,
  },
  descText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.black,
    marginTop: 10,
  },
  buttonStyle: {
    height: 45,
    backgroundColor: colors.black,
    marginHorizontal: 16,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  buttontext: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "800",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 5,
    backgroundColor: colors.fadedWhite,
    borderRadius: 10,
    overflow: "hidden",
    alignSelf: "center",
    width: 200,
    elevation: 4,
  },
  plusContainer: {
    width: 50,
    height: 45,
    backgroundColor: colors.black,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  plusText: {
    fontSize: 16,
    fontWeight: "800",
    color: colors.white,
  },
  countText: {
    fontSize: 18,
    color: colors.black,
    fontWeight: "bold",
  },
});
export default productStyles;
