import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { MyTitle } from "../MyTitle";

describe("MyTitle tests", () => {
  let component: ShallowWrapper;

  it("should render properly", () => {
    givenComponent();
    thenItRendersProperly();
  });

  function givenComponent() {
    component = shallow(
      <MyTitle label={"label"} />
    );
  }

  function thenItRendersProperly() {
    expect(component).toMatchSnapshot();
  }

});