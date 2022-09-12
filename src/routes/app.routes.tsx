import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '../components/Header';
import { HeaderDetails } from '../components/HeaderDetails';
import { MovieDetails } from '../screens/MovieDetails';
import { MoviesList } from '../screens/MoviesList';
import { Profile } from '../screens/Profile';
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
					header: ({ navigation, options }) => (
						<HeaderDetails
							onGoBackPress={navigation.goBack}
							title={options.title}
						/>
					),
				}}
			/>
			{/* <Screen
				name="Profile"
				component={Profile}
				options={{
					headerShown: true,
					header: ({ navigation, options }) => (
						<HeaderDetails
							onGoBackPress={navigation.goBack}
							title={options.title}
						/>
					),
				}}
			/> */}
		</Navigator>
	);
}
