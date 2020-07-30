import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";

import Loading from "./index.jsx";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Snapshot and Functional", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Loading />);
  });

  it("Testing Loading Snapshot", () => {
    expect(toJSON(component)).toMatchSnapshot();
  });
});
