import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function GuessLogItem({ round, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{round}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.Primary800,
    borderWidth: 1,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.Accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    borderRadius: 24,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
