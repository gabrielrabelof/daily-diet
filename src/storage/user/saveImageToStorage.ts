import AsyncStorage from "@react-native-async-storage/async-storage";

import { USER_PICTURE_COLLECTION } from "@storage/storageConfig";

export async function saveImageToStorage(uri: string) {
  try {
    await AsyncStorage.setItem(USER_PICTURE_COLLECTION, uri)    
  } catch (error) {
    throw error
  }
}