import { StyleSheet } from "react-native";
import { colors } from "../../../assets/colors";

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flatlistContainer: { paddingBottom: 110 },
  divider: {
    height: 10,
    backgroundColor: colors.primaryColor,
  },
  carouselContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  dotsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: colors.black,
  },
  inactiveDot: {
    backgroundColor: colors.grey,
  },
});
export default homeStyles;
