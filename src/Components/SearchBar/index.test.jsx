import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";

import SearchBar from "./index.jsx";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Snapshot and Functional", () => {
  let component;
  let props = {
    getMovies: () => {},
  };

  beforeEach(() => {
    component = shallow(<SearchBar {...props} />);
  });

  it("Testing SearchBar Snapshot", () => {
    expect(toJSON(component)).toMatchSnapshot();
  });
});
