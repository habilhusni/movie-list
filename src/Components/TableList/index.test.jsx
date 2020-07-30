import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";

import TableList from "./index.jsx";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Snapshot and Functional", () => {
  let component;
  let props = {
    movies: {
      isLoading: false,
      payload: {},
      error: {},
    },
    getDetails: () => {},
    willModalShow: () => {},
  };

  beforeEach(() => {
    component = shallow(<TableList {...props} />);
  });

  it("Testing TableList Snapshot", () => {
    expect(toJSON(component)).toMatchSnapshot();
  });
});
