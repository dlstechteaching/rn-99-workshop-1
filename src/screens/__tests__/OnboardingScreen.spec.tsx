import { useNavigation, useRoute } from '@react-navigation/native';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { Navigation } from '../../navigation/Navigation';
import { dataForOnboardingScreen } from '../hardcoded_data';
import { OnboardingScreen } from '../OnboardingScreen';

jest.mock('@react-navigation/native');

describe('OnboardingScreen tests', () => {
	let component: ShallowWrapper;
	const navigationMock = {
		navigate: jest.fn(),
		goBack: jest.fn()
	};
	const routeMockDefault = {
		params: {
			stepIndex: 0,
			data: dataForOnboardingScreen
		}
	};

	beforeEach(() => {
		(useNavigation as jest.Mock).mockReturnValue(navigationMock);
	});

	it('should render properly', () => {
		givenUseRoute(routeMockDefault);
		givenComponent();
		thenItRendersProperly();
	});

	it('should render properly last step', () => {
		givenUseRoute({
			params: {
				stepIndex: dataForOnboardingScreen.length - 1,
				data: dataForOnboardingScreen
			}
		});
		givenComponent();
		thenItRendersProperly();
	});

	it('should skip and go to last step', () => {
		givenUseRoute(routeMockDefault);
		givenComponent();
		whenSkipButtonIsClicked();
		thenItNavigatesTo(3);
	});

	it('should go to next step', () => {
		givenUseRoute(routeMockDefault);
		givenComponent();
		whenNextButtonIsClicked();
		thenItNavigatesTo(1);
	});

	it('should go back in last step', () => {
		givenUseRoute({
			params: {
				stepIndex: dataForOnboardingScreen.length - 1,
				data: dataForOnboardingScreen
			}
		});
		givenComponent();
		whenCtaIsClicked();
		thenItGoesBack();
	});

	function givenComponent() {
		component = shallow(<OnboardingScreen />);
	}

	function givenUseRoute(routeMock: any) {
		(useRoute as jest.Mock).mockReturnValue(routeMock);
	}

	function whenSkipButtonIsClicked() {
		component.find('ForwardRef').at(0).simulate('press');
	}

	function whenNextButtonIsClicked() {
		component.find('ForwardRef').at(1).simulate('press');
	}

	function whenCtaIsClicked() {
		component.find('ForwardRef').at(0).simulate('press');
	}

	function thenItRendersProperly() {
		expect(component).toMatchSnapshot();
	}

	function thenItNavigatesTo(step: number){
		expect(navigationMock.navigate).toHaveBeenCalledWith(Navigation.Onboarding, {
			stepIndex: step,
			data: dataForOnboardingScreen
		});
	}

	function thenItGoesBack(){
		expect(navigationMock.goBack).toHaveBeenCalled();
	}

});