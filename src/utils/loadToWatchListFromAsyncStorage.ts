import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export async function loadToWatchListFromAsyncStorage(): Promise<
  MoviePopular[]
> {
  try {
    const store = await AsyncStorage.getItem('@toWatch');
    const data = store ? JSON.parse(store) : [];
    return data;
  } catch (error) {
    Alert.alert('Não foi possível carregar seus filmes');
    console.log(error);
  }
}
