import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row"
  },
  left: {},
  center: {},
  right: {},

  logo: {
    height: Dimensions.get("window").height * 0.1,
    marginVertical: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").height * 0.1 * (1950 / 662)
  },
  back: {
    height: 30,
    width: 30,
    marginHorizontal: 20
  }
});

export default styles;
