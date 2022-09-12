import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { useFonts } from 'expo-font';
import {
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
	Inter_400Regular,
} from '@expo-google-fonts/inter';
import { AppLoading } from './src/components/AppLoading';
import { Routes } from './src/routes';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
	let [fontsLoaded] = useFonts({
		Inter_500Medium,
		Inter_600SemiBold,
		Inter_700Bold,
		Inter_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<Provider store={store}>
			<AuthProvider>
				<StatusBar style="light" />
				<Routes />
			</AuthProvider>
		</Provider>
	);
}

LogBox.ignoreLogs([
	`ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.`,
]);
