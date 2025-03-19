import { Note } from "@/types/Note";
import { View, Text, StyleSheet } from "react-native";

export default function NoteItem({ item }: { item: Note }) {
  return (
    <View style={styles.noteItem}>
      <Text style={styles.noteText}>{item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  noteItem: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    marginVertical: 5,
  },
  noteText: {
    fontSize: 18,
  },
});
