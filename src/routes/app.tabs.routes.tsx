import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../global/theme';
import { MoviesList } from '../screens/MoviesList';
import { Header } from '../components/Header';
import { Platform } from 'react-native';
import { Label } from '../components/Label';
import { AppRoutes } from './app.routes';
import { WatchedList } from '../screens/WatchedList';
import { ToWatchList } from '../screens/ToWatchList';

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      sceneContainerStyle={{ backgroundColor: theme.colors.background }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.title,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          borderTopColor: 'transparent',
          backgroundColor: theme.colors.header,
          height: 50,
        },
        tabBarIconStyle: {
          marginRight: 15,
        },
        tabBarShowLabel: false,
      }}
    >
      <Screen
        name="Home"
        component={AppRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
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
          headerShown: true,
          header: () => <Header />,
        }}
      />
    </Navigator>
  );
}
