import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";

import Detail from "./index.jsx";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Snapshot and Functional", () => {
  let component;
  let props = {
    details: {
      payload: {
        data: {
          Title: "Kucing",
          Actors: "Actors",
          Awards: "Awards",
          BoxOffice: "BoxOffice",
          Country: "Country",
          DVD: "DVD",
          Director: "Director",
          Genre: "Genre",
          Language: "Language",
          Metascore: "Metascore",
          Plot: "Plot",
          Poster: "Poster",
          Production: "Production",
          Rated: "Rated",
          Released: "Released",
          Response: "Response",
          Runtime: "Runtime",
          Type: "Type",
          Website: "Website",
          Writer: "Writer",
          Year: "Year",
          imdbID: "imdbID",
          imdbRating: "imdbRating",
          imdbVotes: "imdbVotes",
        },
      },
    },
  };

  beforeEach(() => {
    component = shallow(<Detail {...props} />);
  });

  it("Testing Detail Snapshot", () => {
    expect(toJSON(component)).toMatchSnapshot();
  });
});
