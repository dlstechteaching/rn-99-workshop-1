import { useNavigation } from '@react-navigation/native';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../HomeScreen';

jest.mock('@react-navigation/native');

describe('HomeScreen tests', () => {
	let component: ShallowWrapper;
	const navigationMock = {
		navigate: jest.fn(),
	};

	const itemMock = {
		label: 'test',
		screenName: 'screen',
	};

	beforeEach(() => {
		(useNavigation as jest.Mock).mockReturnValue(navigationMock);
	});

	it('should render properly', () => {
		givenComponent();
		thenItRendersProperly();
	});

	it('should navigato to specific screen', () => {
		givenComponent();
		whenFirstMyButtonIsClicked();
		thenItNavigates();
	});

	function givenComponent() {
		component = shallow(<HomeScreen />);
	}

	function whenFirstMyButtonIsClicked() {
		component
			.find('FlatList')
			.props()
			// @ts-ignore
			.keyExtractor({ id: 1 }, 0);

		const firstButton = shallow(
			component
				.find('FlatList')
				.props()
				// @ts-ignore
				.renderItem({ item: itemMock }),
		);
		// @ts-ignore
		firstButton.props().onPress();
	}

	function thenItRendersProperly() {
		expect(component).toMatchSnapshot();
	}

	function thenItNavigates() {
		expect(navigationMock.navigate).toHaveBeenCalled();
	}
});
