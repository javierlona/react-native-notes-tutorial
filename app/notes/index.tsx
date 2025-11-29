import { NoteList } from "@/components/NoteList";
import { Note } from "@/types/Note";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import AddNoteModal from "@/components/AddNoteModal";
import noteService from "@/services/noteService";

export default function NotesScreen() {
  const [notes, setNotes] = useState<Note[]>([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetechedNotes();
  }, []);

  const fetechedNotes = async () => {
    setLoading(true);
    const response = await noteService.getNotes();
    if (response) {
      setError("error");
      Alert.alert("Error", "error");
    } else {
      setNotes(response);
      setError("");
    }
    setLoading(false);
  };

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
