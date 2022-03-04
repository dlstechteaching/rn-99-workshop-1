import { useNavigation } from "@react-navigation/native";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { ScreenA } from "../ScreenA";

jest.mock('@react-navigation/native');

describe("ScreenA tests", () => {
  let component: ShallowWrapper;
  const navigationMock = {
      navigate: jest.fn()
  };

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue(navigationMock);
  });

  it("should render properly", () => {
    givenComponent();
    thenItRendersProperly();
  });

  function givenComponent() {
    component = shallow(<ScreenA />);
  }

  function thenItRendersProperly() {
    expect(component).toMatchSnapshot();
  }

});