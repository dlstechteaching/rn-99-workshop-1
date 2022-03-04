import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet  } from 'react-native';
import { MyButton } from '../components/common/MyButton';
import { MyTitle } from '../components/common/MyTitle';
import { Navigation } from '../navigation/Navigation';
import { HomeStackScreenProps } from '../navigation/types';
import { dataForOnboardingScreen } from './hardcoded_data';

export const HomeScreen : React.VFC = () => {

	const { navigate } = useNavigation<HomeStackScreenProps['navigation']>();
	const DATA = [
		{ id: '0', label: 'Screen a', screenName: Navigation.A },
		{ id: '1', label: 'Screen b', screenName: Navigation.B },
		{ id: '2', label: 'Screen c', screenName: Navigation.C },
		{ id: '3', label: 'Onboarding', screenName: Navigation.Onboarding, params: { stepIndex: 0, data: dataForOnboardingScreen} },
	];
    
	return (
		<SafeAreaView style={styles.container}>
			<MyTitle label={'Workshop #1'} />
			<FlatList
				style={{ padding: 20 }}
				data={DATA}
				renderItem={({ item }) => 
					<MyButton 
						label={item.label} 
						onPress={() => navigate(item.screenName, item.params)} 
					/>
				}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 0,
		padding: 20
	},
});