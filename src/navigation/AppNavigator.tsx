import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { ScreenC } from '../screens/ScreenC';
import { Navigation } from './Navigation';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
	return (
		<Stack.Navigator initialRouteName={Navigation.Home} screenOptions={{ headerShown: false }}>
			<Stack.Screen name={Navigation.Home} component={HomeScreen} />
			<Stack.Screen name={Navigation.A} component={ScreenA} />
			<Stack.Screen name={Navigation.B} component={ScreenB} />
			<Stack.Screen name={Navigation.C} component={ScreenC} />
			<Stack.Screen name={Navigation.Onboarding} component={OnboardingScreen} />
		</Stack.Navigator>
	);
};
