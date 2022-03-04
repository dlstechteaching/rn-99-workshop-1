import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MyStepper } from '../components/common/MyStepper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { OnboardingScreenProps } from '../navigation/types';
import { Navigation } from '../navigation/Navigation';

export const OnboardingScreen: React.VFC = () => {
	const navigation = useNavigation<OnboardingScreenProps['navigation']>();
	const route = useRoute<OnboardingScreenProps['route']>();

	const data = route.params.data;
	const stepIndex = route.params.stepIndex;

	const currentStep = data[stepIndex];

	const navigateToStep = (step: number) =>
		navigation.navigate(Navigation.Onboarding, {
			stepIndex: step,
			data,
		});

	return (
		<View style={styles.container}>
			<StatusBar hidden />
			<Text style={styles.title} numberOfLines={2}>
				{currentStep.title.toUpperCase()}
			</Text>
			<Image source={currentStep.image as any} style={styles.image} />
			<Text style={styles.desc}>{currentStep.desc.toUpperCase()}</Text>
			<View style={styles.footer}>
				{stepIndex != data.length - 1 ? (
					<>
						<TouchableOpacity onPress={() => navigateToStep(data.length - 1)}>
							<Text>Skip</Text>
						</TouchableOpacity>
						<MyStepper stepIndex={stepIndex} nbOfSteps={data.length} width={'30%'} />
						<TouchableOpacity onPress={() => navigateToStep(stepIndex + 1)}>
							<Text>Next</Text>
						</TouchableOpacity>
					</>
				) : (
					<>
						<TouchableOpacity style={styles.cta} onPress={() => navigation.goBack()}>
							<Text>Get Started</Text>
						</TouchableOpacity>
					</>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		padding: 40,
		width: '100%',
		backgroundColor: 'white',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	title: {
		marginTop: 20,
		fontSize: 22,
		textAlign: 'center',
		height: '7%',
	},
	image: {
		width: '80%',
		height: '40%',
		justifyContent: 'space-between',
		overflow: 'visible',
	},
	desc: {
		marginTop: 20,
		fontSize: 16,
		textAlign: 'center',
	},
	footer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
	},
	cta: {
		padding: 20,
		width: '100%',
		alignItems: 'center',
		backgroundColor: 'rgb(241, 170, 102)',
		borderRadius: 10,
	},
});
