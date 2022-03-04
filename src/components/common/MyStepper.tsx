import { View, StyleSheet } from 'react-native';

interface MyStepperProps {
    stepIndex: number;
    nbOfSteps: number;
    width?: string;
}

export const MyStepper: React.VFC<MyStepperProps> = ({ stepIndex, nbOfSteps, width }) => {

	return (
		<View style={[styles.container, { width: width ?? '100%'}]}>
			{
				Array.from(Array(nbOfSteps), (_, index: number) => {
					return <View key={index} style={[ styles.bullet, stepIndex === index ? styles.selected : undefined]} />;
				})
			}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	bullet: {
		height: 15,
		width: 15,
		borderRadius: 15,
		backgroundColor: 'rgb(239, 183, 114)'
	},
	selected: {
		backgroundColor: 'rgb(81, 53, 81)',
		height: 20, 
		width: 20,
		borderColor: 'rgb(98, 62, 97)',
		borderWidth: 1
	}
});