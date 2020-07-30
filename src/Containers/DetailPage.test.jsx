import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import store from "../common/mockStore";

import DetailPage from "./DetailPage";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Snapshot and Functional", () => {
  let component;

  beforeEach(() => {
    component = shallow(<DetailPage store={store} />);
  });

  it("Testing DetailPage Snapshot", () => {
    expect(toJSON(component)).toMatchSnapshot();
  });
});
