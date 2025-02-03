import { StyleSheet } from "react-native";
import { colors } from "../../../assets/colors";

const cartStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flex: 1,
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
  summary: {
    backgroundColor: colors.grey,
    flexDirection: "row",
    paddingVertical: 5,
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  textSummary: {
    fontSize: 14,
    fontWeight: "800",
    color: colors.black,
  },
  paymentContainer: {
    backgroundColor: colors.white,
    padding: 10,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textCard: { fontSize: 16, color: "blue", fontWeight: "bold" },
  textCardNo: {
    fontSize: 14,
    color: colors.black,
    fontWeight: "800",
    marginTop: 10,
    letterSpacing: 2,
  },
  cvvContainer: { flexDirection: "row", marginTop: 4, alignItems: "center" },
  expirytext: {
    fontSize: 14,
    color: colors.grey,
    fontWeight: "800",
    letterSpacing: 2,
  },
  cvvText: {
    fontSize: 14,
    color: colors.grey,
    fontWeight: "800",
    marginLeft: 15,
    letterSpacing: 2,
  },
  nameText: {
    fontSize: 14,
    color: colors.grey,
    fontWeight: "800",
    letterSpacing: 2,
    marginTop: 8,
  },
});
export default cartStyles;
