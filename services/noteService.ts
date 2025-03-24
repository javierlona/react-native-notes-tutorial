import Constants from "expo-constants";
import databaseService from "./databaseService";

const { appwriteDatabaseId, appwriteCollectionNotes } =
  Constants.expoConfig?.extra || {};

const noteService = {
  async getNotes() {
    try {
      const response = await databaseService.listDocuments(
        appwriteDatabaseId,
        appwriteCollectionNotes
      );
      return { data: response };
    } catch (error) {
      console.error("Error getting notes", error);
      return [];
    }
  },
};

export default noteService;
