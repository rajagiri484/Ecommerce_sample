import { StyleSheet } from "react-native";
import { colors } from "../../../assets/colors";

const confirmationStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 20,
    fontSize: 15,
    color: colors.black,
    fontWeight: "bold",
  },
  buttonStyle: {
    width: 120,
    height: 45,
    backgroundColor: colors.black,
    marginHorizontal: 16,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginTop: 10,
  },
});
export default confirmationStyles;
