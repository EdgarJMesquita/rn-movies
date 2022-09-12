import { createContext, useEffect, useState } from 'react';
import { GoogleSignin, User } from '@react-native-google-signin/google-signin';

type AuthContextProps = {
	user: User | null;
	signIn: () => Promise<void>;
	signOut: () => Promise<void>;
};

type AuthProviderProps = {
	children: React.ReactNode;
};

GoogleSignin.configure();

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(false);

	async function signIn() {
		if (loading) return;
		try {
			setLoading(true);
			await GoogleSignin.hasPlayServices();
			const user = await GoogleSignin.signIn();
			setUser(user);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	async function signOut() {
		try {
			await GoogleSignin.signOut();
			setUser(null);
		} catch (error) {
			console.log(error);
		}
	}

	async function handleSignIn() {
		try {
			const isSignIn = await GoogleSignin.isSignedIn();
			if (isSignIn) {
				const user = await GoogleSignin.getCurrentUser();
				setUser(user);
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		handleSignIn();
	}, []);

	return (
		<AuthContext.Provider value={{ user, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
}
