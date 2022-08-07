import AsyncStorage from '@react-native-async-storage/async-storage';

export async function loadToWatchListFromAsyncStorage(): Promise<
  MoviePopular[]
> {
  try {
    const store = await AsyncStorage.getItem('@toWatch');
    const data = store ? JSON.parse(store) : [];
    return data;
  } catch (error) {
    console.log(error);
  }
}
