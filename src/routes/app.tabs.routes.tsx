import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
	Entypo,
	MaterialCommunityIcons,
	FontAwesome,
	Feather,
} from '@expo/vector-icons';
import { theme } from '../global/theme';
import { Header } from '../components/Header';
import { Dimensions, Platform } from 'react-native';
import { Label } from '../components/Label';
import { AppRoutes } from './app.routes';
import { WatchedList } from '../screens/WatchedList';
import { ToWatchList } from '../screens/ToWatchList';
import { Search } from '../screens/Search';
import { Profile } from '../screens/Profile';
import { HeaderDetails } from '../components/HeaderDetails';
import { MovieDetails } from '../screens/MovieDetails';
import { MoviesList } from '../screens/MoviesList';

const { Navigator, Screen, Group } = createBottomTabNavigator();

export function TabRoutes() {
	const { height, width } = Dimensions.get('window');
	return (
		<Navigator
			sceneContainerStyle={{
				backgroundColor: theme.colors.background,
				height,
				width,
			}}
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: theme.colors.primary,
				tabBarInactiveTintColor: theme.colors.title,
				tabBarStyle: {
					paddingVertical: Platform.OS === 'ios' ? 20 : 5,
					borderTopColor: 'transparent',
					backgroundColor: theme.colors.header,
				},
				tabBarHideOnKeyboard: true,
			}}
		>
			<Screen
				name="Home"
				component={MoviesList}
				options={{
					tabBarIcon: ({ color }) => (
						<Entypo name="home" size={24} color={color} />
					),
					tabBarLabel: ({ color }) => <Label color={color}>Home</Label>,
					headerShown: true,
					header: () => <Header />,
				}}
			/>
			<Screen
				name="ToWatchList"
				component={ToWatchList}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="movie-open-play"
							size={25}
							color={color}
						/>
					),
					tabBarLabel: ({ color }) => (
						<Label color={color}>Para assistir</Label>
					),
					headerShown: true,
					header: () => <Header />,
				}}
			/>
			<Screen
				name="WatchedList"
				component={WatchedList}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="movie-check"
							size={25}
							color={color}
						/>
					),
					tabBarLabel: ({ color }) => <Label color={color}>Assistidos</Label>,
					headerShown: true,
					header: () => <Header />,
				}}
			/>
			<Screen
				name="Search"
				component={Search}
				options={{
					tabBarIcon: ({ color }) => (
						<Feather name="search" size={25} color={color} />
					),
					tabBarLabel: ({ color }) => <Label color={color}>Pesquisar</Label>,
					headerShown: true,
					header: () => <Header />,
				}}
			/>

			<Group
				screenOptions={{
					headerShown: true,
					header: ({ navigation, options }) => (
						<HeaderDetails
							onGoBackPress={navigation.goBack}
							title={options.title}
						/>
					),
					tabBarItemStyle: {
						display: 'none',
					},
					tabBarIcon: null,
					tabBarShowLabel: false,
				}}
			>
				<Screen name="Profile" component={Profile} />
				<Screen name="MovieDetails" component={MovieDetails} />
			</Group>
		</Navigator>
	);
}
