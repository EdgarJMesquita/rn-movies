import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveWatchedToAsyncStorage(movie: MoviePopular) {
  try {
    const store = await AsyncStorage.getItem('@watched');
    const data: MoviePopular[] = store ? JSON.parse(store) : [];

    const alreadyInList = data.find((item) => item.title === movie.title);

    if (alreadyInList) {
      const updatedData = data.filter((item) => item.title !== movie.title);
      await AsyncStorage.setItem('@watched', JSON.stringify(updatedData));
      return updatedData;
    }

    const updatedData = [...data, movie];

    await AsyncStorage.setItem('@watched', JSON.stringify(updatedData));
    return updatedData;
  } catch (error) {
    console.log(error);
  }
}