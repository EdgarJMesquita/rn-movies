import AsyncStorage from '@react-native-async-storage/async-storage';

export async function loadWatchedFromAsyncStorage(): Promise<MoviePopular[]> {
  try {
    const store = await AsyncStorage.getItem('@watched');
    const data = store ? JSON.parse(store) : [];
    return data;
  } catch (error) {
    console.log(error);
  }
}
