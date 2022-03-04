import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { MyCard } from '../MyCard';

describe('MyCard tests', () => {
	let component: ShallowWrapper;

	it('should render properly', () => {
		givenComponent();
		thenItRendersProperly();
	});

	function givenComponent() {
		component = shallow(
			<MyCard 
				type={'label'} 
				title={'title'} 
				desc={'desc'} 
				badges={['test']} 
				comments={['test', 'test']} />
		);
	}

	function thenItRendersProperly() {
		expect(component).toMatchSnapshot();
	}

});