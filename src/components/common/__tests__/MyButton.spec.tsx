import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { TouchableOpacity } from "react-native";
import { MyButton } from "../MyButton";

describe("MyButton tests", () => {
  let component: ShallowWrapper;

  const onPressMock = jest.fn();
  it("should render properly", () => {
    givenComponent();
    thenItRendersProperly();
  });

  it("should call onPressMock", () => {
    givenComponent();
    whenButtonIsPressed();
    thenOnPressHasBeenCalled();
  });

  function givenComponent() {
    component = shallow(
      <MyButton label={"label"} onPress={onPressMock} />
    );
  }

  function whenButtonIsPressed() {
    component.find(TouchableOpacity).simulate('press');
  }

  function thenItRendersProperly() {
    expect(component).toMatchSnapshot();
  }

  function thenOnPressHasBeenCalled() {
    expect(onPressMock).toHaveBeenCalled();
  }
});