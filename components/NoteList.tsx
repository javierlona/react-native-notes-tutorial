import { FlatList, View } from "react-native";
import NoteItem from "./NoteItem";

type Note = {
  id: number;
  text: string;
};

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
