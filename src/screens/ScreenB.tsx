import { StyleSheet, View, TouchableOpacity, Image, Text, ScrollView  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import images from '../assets';
import { useNavigation } from '@react-navigation/native';
import { MyCard } from '../components/common/MyCard';
import { dataForBScreen } from './hardcoded_data';

export const ScreenB : React.VFC = () => {
	const { goBack } = useNavigation();

	const cards = dataForBScreen;    
    
	return (
		<View style={styles.container}>
			<StatusBar />
			<View style={styles.headerContainer}>
				<View>
					<Text style={styles.title}>
                   My Tasks
					</Text>
					<Text style={styles.subtitle}>
                    You have 4 tasks today
					</Text>
				</View>
				<Image source={images.profile} />
			</View>
			<ScrollView 
				horizontal
				style={{overflow: 'visible'}}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.contentContainer}>
				{
					cards.map((card: any) => <MyCard key={card.uid} {...card}/>)
				}
			</ScrollView>
			<TouchableOpacity onPress={goBack} style={styles.button}>
				<Ionicons name={'ios-add-sharp'} size={18} color="green" />
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
		backgroundColor: 'rgb(88, 191, 193)',
		justifyContent: 'space-between'
	},
	headerContainer: { 
		marginTop: 120,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 40
	},
	title : {
		fontSize: 32,
		color: 'white'
	},
	subtitle: {
		fontSize: 16,
		color: 'white',
		opacity: 0.7
	},
	contentContainer : {
		overflow: 'visible',
		height: '70%'
	},
	button: {
		alignSelf: 'center',
		marginBottom: 30,
		borderRadius: 35,
		flexShrink: 1,
		backgroundColor: 'rgb(236, 248, 248)',
		height: 55,
		width: 55,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity:  0.4,
		shadowRadius: 3,
		elevation: 5,
	},

});