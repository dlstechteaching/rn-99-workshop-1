import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { MyStepper } from '../MyStepper';

describe('MyStepper tests', () => {
	let component: ShallowWrapper;

	it('should render properly', () => {
		givenComponent();
		thenItRendersProperly();
	});

	function givenComponent() {
		component = shallow(<MyStepper stepIndex={0} nbOfSteps={4} />);
	}

	function thenItRendersProperly() {
		expect(component).toMatchSnapshot();
	}
});
