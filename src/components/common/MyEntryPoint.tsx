import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MyEntryPointProps {
    iconName: string;
    title: string;
    desc?: string;
}

export const MyEntryPoint: React.VFC<MyEntryPointProps> = ({ iconName, title, desc }) => {
	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<View style={styles.icon}>
					<Ionicons name={iconName as any} size={18} color="green"/>
				</View>
				<View style={styles.text}>
					<Text>{title}</Text>
					{ desc && <Text style={styles.desc}>{desc}</Text>}
				</View>
			</View>
			<TouchableOpacity style={styles.button}>
				<Ionicons name={'md-arrow-forward'} size={14} color="green" />
			</TouchableOpacity>
		</View>
	); 
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 10,
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginBottom: 7,
		alignItems: 'center'
	},
	main: {
		width: '70%',
		flexDirection: 'row',
		alignItems: 'center'
	},
	icon: {
		backgroundColor: 'rgb(253, 246, 239)',
		padding: 5,
		borderRadius: 12
	},
	text: {
		marginLeft: 10
	},
	desc : {
		color: 'rgb(152, 152, 152)'
	},
	button: {
		borderRadius: 25,
		flexShrink: 1,
		backgroundColor: 'rgb(236, 248, 248)',
		height: 35,
		width: 35,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
});