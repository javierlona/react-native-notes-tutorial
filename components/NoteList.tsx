import { FlatList, View } from "react-native";
import NoteItem from "./NoteItem";
import { Note } from "@/types/Note";

export const NoteList = ({ notes }: { notes: Note[] }) => {
  return (
    <View>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NoteItem item={item} />}
      />
    </View>
  );
};
