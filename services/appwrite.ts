import { Client, Databases } from "react-native-appwrite";
import Constants from "expo-constants";
import { Platform } from "react-native";

const {
  appwriteEndpoint,
  appwriteProjectId,
  appwriteiOSBundleId,
  appwriteAndroidPackageName,
} = Constants.expoConfig?.extra || {};

const client = new Client()
  .setEndpoint(appwriteEndpoint)
  .setProject(appwriteProjectId);

if (Platform.OS === "ios") {
  client.setPlatform(appwriteiOSBundleId);
}

if (Platform.OS === "android") {
  client.setPlatform(appwriteAndroidPackageName);
}

const database = new Databases(client);

export { client, database };
