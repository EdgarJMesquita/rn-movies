import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveToWatchListToAsyncStorage(movie: MoviePopular) {
  try {
    const title = movie?.title || movie?.movie?.title || movie?.show?.title;

    const store = await AsyncStorage.getItem('@toWatch');
    const data: MoviePopular[] = store ? JSON.parse(store) : [];

    const alreadyInList = data.find(
      (item) =>
        (item?.title || item?.movie?.title || item?.show?.title) === title,
    );

    if (alreadyInList) {
      const updatedData = data.filter(
        (item) =>
          (item?.title || item?.movie?.title || item?.show?.title) !== title,
      );
      await AsyncStorage.setItem('@toWatch', JSON.stringify(updatedData));
      return updatedData;
    }

    const updatedData = [...data, movie].filter((item) => !!item);

    await AsyncStorage.setItem('@toWatch', JSON.stringify(updatedData));
    return updatedData;
  } catch (error) {
    console.log(error);
  }
}
