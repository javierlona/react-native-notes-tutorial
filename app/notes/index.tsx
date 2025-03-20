import { NoteList } from "@/components/NoteList";
import { Note } from "@/types/Note";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AddNoteModal from "@/components/AddNoteModal";

export default function NotesScreen() {
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, text: "Note 1" },
    { id: 2, text: "Note 2" },
    { id: 3, text: "Note 3" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [noteText, setNoteText] = useState("");

  const addNote = () => {
    if (noteText.trim() === "") {
      return;
    }

    setNotes([
      ...notes,
      {
        id: notes.length + 1,
        text: noteText,
      },
    ]);

    setNoteText("");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <NoteList notes={notes} />

      <TouchableOpacity
        style={styles.addNoteButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Add Note</Text>
      </TouchableOpacity>

      <AddNoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        noteText={noteText}
        setNoteText={setNoteText}
        addNote={addNote}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  addButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  addNoteButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
});
