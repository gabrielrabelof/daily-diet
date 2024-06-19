import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_PICTURE_COLLECTION } from "@storage/storageConfig";

type SetImageCallback = (image: string) => void;

export async function loadImageFromStorage(setImageCallback: SetImageCallback) {
  try {
    const savedImage = await AsyncStorage.getItem(USER_PICTURE_COLLECTION);
    if (savedImage !== null) {
      setImageCallback(savedImage)
    }
  } catch (error) {
    throw error;
  }
}
