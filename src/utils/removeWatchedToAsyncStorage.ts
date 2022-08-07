import AsyncStorage from '@react-native-async-storage/async-storage';

export async function removeWatchedToAsyncStorage(movie: MoviePopular) {
  try {
    const store = await AsyncStorage.getItem('@watched');
    const data: MoviePopular[] = store ? JSON.parse(store) : [];

    const updatedWatchedList = data.filter(
      (item) => item.title !== movie.title,
    );

    await AsyncStorage.setItem('@watched', JSON.stringify(updatedWatchedList));
    return updatedWatchedList;
  } catch (error) {
    console.log(error);
  }
}
