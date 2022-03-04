import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import images from '../assets';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export const ScreenA: React.VFC = () => {
	const { goBack } = useNavigation();

	return (
		<View style={styles.container}>
			<StatusBar />
			<Image source={images.woman} style={styles.woman} />
			<View style={styles.textContainer}>
				<Text style={styles.title} numberOfLines={2}>
					Never more in rush
				</Text>
				<Text style={styles.subtitle}>
					Check and keep up under control your daily task, is a creative way.
				</Text>
			</View>
			<TouchableOpacity onPress={goBack} style={styles.button}>
				<Ionicons name={'md-arrow-forward'} size={18} color="green" />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		padding: 30,
		width: '100%',
		backgroundColor: 'white',
		justifyContent: 'space-around',
	},
	woman: {
		marginTop: 40,
		alignSelf: 'flex-start',
		aspectRatio: 2 / 3,
		overflow: 'visible',
		marginLeft: 5,
		marginBottom: -40,
	},
	textContainer: {
		width: '70%',
		justifyContent: 'space-between',
	},
	button: {
		alignSelf: 'flex-end',
		borderRadius: 25,
		flexShrink: 1,
		backgroundColor: 'rgb(236, 248, 248)',
		height: 45,
		width: 45,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 44,
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 16,
		color: 'rgb(178, 178, 178)',
	},
});
