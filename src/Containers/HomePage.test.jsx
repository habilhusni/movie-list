import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import store from "../common/mockStore";

import HomePage from "./HomePage";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Snapshot and Functional", () => {
  let component;

  beforeEach(() => {
    component = shallow(<HomePage store={store} />);
  });

  it("Testing HomePage Snapshot", () => {
    expect(toJSON(component)).toMatchSnapshot();
  });
});
