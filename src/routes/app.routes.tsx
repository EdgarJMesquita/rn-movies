import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '../components/Header';
import { MovieDetails } from '../screens/MovieDetails';
import { MoviesList } from '../screens/MoviesList';
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="MoviesList"
        component={MoviesList}
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
      <Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{
          headerShown: true,
          header: ({ navigation }) => (
            <Header onGoBackPress={navigation.goBack} />
          ),
        }}
      />
    </Navigator>
  );
}
