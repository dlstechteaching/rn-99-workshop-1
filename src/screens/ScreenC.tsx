import {
	StyleSheet,
	View,
	Text,
	SectionList,
	TouchableOpacity,
	ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { dataForCScreen } from './hardcoded_data';
import { MyEntryPoint } from '../components/common/MyEntryPoint';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../assets';

export const ScreenC: React.VFC = () => {
	const { goBack } = useNavigation();

	const sections = dataForCScreen;

	return (
		<View style={styles.container}>
			<StatusBar hidden={true} />
			<View style={styles.navbarWrapper}>
				<SafeAreaView edges={['left', 'top', 'right']} style={styles.navbar}>
					<View style={styles.navLeft}>
						<TouchableOpacity onPress={goBack} style={styles.button}>
							<Ionicons name={'arrow-back'} size={32} color="grey" />
						</TouchableOpacity>
					</View>
					<View style={styles.navCenter}>
						<Text>Settings</Text>
					</View>
					<View style={styles.navRight} />
				</SafeAreaView>
			</View>

			<View style={styles.header}>
				<ImageBackground
					source={images.settings}
					resizeMode="contain"
					style={styles.image}
					imageStyle={{ height: '100%', width: 'auto', right: -100 }}
				>
					<View style={styles.textHeader}>
						<Text style={styles.titleHeader}>Check your profile</Text>
						<Text style={styles.subtitleHeader}>jonathansmith@gmail.com</Text>
						<TouchableOpacity onPress={goBack} style={styles.buttonHeader}>
							<Text style={{ color: 'black' }}>View</Text>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</View>

			<SectionList
				sections={sections}
				keyExtractor={(item, index) => item.title + index}
				renderItem={({ item }) => <MyEntryPoint {...item} />}
				renderSectionHeader={({ section: { title } }) => (
					<Text style={styles.sectionTitle}>{title}</Text>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		padding: 30,
		width: '100%',
		backgroundColor: 'rgb(253, 246, 239)',
		justifyContent: 'space-between',
	},
	navbarWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	navbar: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
	},
	navLeft: {
		alignItems: 'flex-start',
		flex: 1,
	},
	navCenter: {
		alignItems: 'center',
		flex: 3,
	},
	navRight: {
		alignItems: 'flex-end',
		flex: 1,
	},
	header: {
		backgroundColor: 'white',
		marginVertical: 10,
		borderRadius: 10,
		height: '20%',
		overflow: 'hidden',
	},
	image: {
		flex: 1,
		justifyContent: 'flex-start',
		overflow: 'hidden',
	},
	textHeader: {
		paddingLeft: 30,
		paddingVertical: 15,
		flexDirection: 'column',
	},
	titleHeader: {
		fontSize: 22,
		marginBottom: 5,
	},
	subtitleHeader: {
		fontSize: 12,
		color: 'rgb(152, 152, 152)',
		marginBottom: 20,
	},
	buttonHeader: {
		height: 45,
		width: '40%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgb(241, 170, 105)',
		borderRadius: 15,
	},
	sectionTitle: {
		padding: 10,
	},
	button: {
		borderRadius: 35,
		flexShrink: 1,
		backgroundColor: 'rgb(220, 205, 207)',
		height: 55,
		width: 55,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
