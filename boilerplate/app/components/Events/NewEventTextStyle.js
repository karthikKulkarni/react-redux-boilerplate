import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#44f5fd"
  },
  item1: {
    width: 50,
    height: 50,
    flex: 1,
    backgroundColor: "#EE2C38"
  },
  item2: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    flex: 0.4,
    backgroundColor: "#FAA030"
  }
});
