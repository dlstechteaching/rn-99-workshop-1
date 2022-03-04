import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { MyEntryPoint } from "../MyEntryPoint";

describe("MyEntryPoint tests", () => {
  let component: ShallowWrapper;

  it("should render properly", () => {
    givenComponent();
    thenItRendersProperly();
  });

  function givenComponent() {
    component = shallow(
      <MyEntryPoint 
        iconName={'label'} 
        title={'title'} 
        desc={'desc'} />
    );
  }

  function thenItRendersProperly() {
    expect(component).toMatchSnapshot();
  }

});