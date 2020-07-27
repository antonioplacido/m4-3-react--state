import React from "react";

import data from "../data";

import GlobalStyles from "./GlobalStyles";
import Typeahead from "./Typeahead";

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      {/* TODO */}
      <Wrapper>
        <Typeahead
          suggestions={data.books} ///assigning props to Typeahead
          handleSelect={(suggestion) => {
            window.alert(suggestion);
          }}
        />
      </Wrapper>
    </>
  );
};

export default App;
