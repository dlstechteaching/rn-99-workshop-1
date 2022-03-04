import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

interface MyCardProps {
	type: string;
	title: string;
	desc: string;
	badges: string[];
	comments: string[];
}

export const MyCard: React.VFC<MyCardProps> = ({ type, title, desc, badges, comments }) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.type}>{type.toUpperCase()}</Text>
				<Text style={styles.title} numberOfLines={2}>
					{title}
				</Text>
			</View>
			<View style={styles.badges}>
				{badges.map((badge, i) => (
					<View style={styles.badge} key={i}>
						<Text style={styles.badgeText}>{badge.toUpperCase()}</Text>
					</View>
				))}
			</View>
			<Text style={styles.desc}>{desc}</Text>

			<View style={styles.footer}>
				<Text style={styles.comments}>{comments.length + ' comments'} </Text>
				<TouchableOpacity style={styles.button}>
					<Ionicons name={'md-arrow-forward'} size={18} color="green" />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		padding: 20,
		borderRadius: 20,
		width: 325,
		flexDirection: 'column',
		marginRight: 20,
		justifyContent: 'space-between',
	},
	header: {
		width: '70%',
		marginBottom: -40,
	},
	type: {
		color: 'rgb(0, 148, 139)',
	},
	title: {
		marginBottom: 20,
	},
	badges: {
		flexDirection: 'row',
	},
	badge: {
		paddingVertical: 5,
		paddingHorizontal: 10,
		backgroundColor: 'rgb(255, 242, 215)',
		marginRight: 5,
		borderRadius: 10,
	},
	badgeText: {
		color: 'rgb(255, 175, 77)',
	},
	desc: {
		marginTop: -30,
		width: '80%',
		color: 'rgb(152, 152, 152)',
	},
	footer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	comments: {
		color: 'rgb(152, 152, 152)',
	},
	button: {
		borderRadius: 25,
		flexShrink: 1,
		backgroundColor: 'rgb(236, 248, 248)',
		height: 45,
		width: 45,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
