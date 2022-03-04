import { useNavigation } from "@react-navigation/native";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { ScreenC } from "../ScreenC";

jest.mock('@react-navigation/native');

describe("ScreenC tests", () => {
  let component: ShallowWrapper;
  const navigationMock = {
      navigate: jest.fn()
  };

  const itemMock = {
    title: 'test',
    iconName: 'iconName'
  };

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue(navigationMock);
  });

  it("should render properly", () => {
    givenComponent();
    thenItRendersProperly();
  });

  it("should render section list properly", () => {
    givenComponent();
    thenItRendersListProperly();
  });

  function givenComponent() {
    component = shallow(<ScreenC />);
  }

  function thenItRendersListProperly() {

    shallow(component
      .find('SectionList')
      .props()
      // @ts-ignore
      .renderSectionHeader({
          section: {
              title: 'title'
          }
      }));
    
    component
      .find('SectionList')
      .props()
      // @ts-ignore
      .keyExtractor({ title: 't'}, 0);

    shallow(component
      .find('SectionList')
      .props()
      // @ts-ignore
      .renderItem({ item: itemMock}));
  }

  function thenItRendersProperly() {
    expect(component).toMatchSnapshot();
  }

});