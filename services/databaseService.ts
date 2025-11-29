import { database } from "./appwrite";

const databaseService = {
  async listDocuments(dbId: string, colId: string) {
    try {
      const response = await database.listDocuments(dbId, colId);
      return response || [];
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error listing documents", error.message);
      } else {
        console.error("Error listing documents", error);
      }
      return [];
    }
  },
};

export default databaseService;
