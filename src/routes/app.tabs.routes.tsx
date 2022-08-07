import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../global/theme';
import { MoviesList } from '../screens/MoviesList';
import { Header } from '../components/Header';
import { Platform } from 'react-native';
import { Label } from '../components/Label';
import { AppRoutes } from './app.routes';
import { WatchedList } from '../screens/WatchedList';

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      sceneContainerStyle={{ backgroundColor: theme.colors.background }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.title,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          borderTopColor: 'transparent',
          backgroundColor: theme.colors.header,
        },
        tabBarIconStyle: {
          marginRight: 15,
        },
      }}
    >
      <Screen
        name="Home"
        component={AppRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Label color={color} style={{ marginTop: 3 }}>
              Início
            </Label>
          ),
        }}
      />
      <Screen
        name="Watched"
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
    </Navigator>
  );
}