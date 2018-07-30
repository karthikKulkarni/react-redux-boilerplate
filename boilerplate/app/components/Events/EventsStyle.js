import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#722C38"
  },

  activityIndicatorContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },

  row: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 10
  },

  author: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8 * 2
  },

  quote: {
    marginTop: 5,
    fontSize: 14
  },
  listContainer: {
    backgroundColor: "#ecf5fd",
    height: 50
  }
});
