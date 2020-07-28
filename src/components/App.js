import React from "react";

import data from "../data";

import GlobalStyles from "./GlobalStyles";
import Typeahead from "./Typeahead";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 50%;
  margin: 30px auto;
  /* vertical-align: center; */
  ul {
    padding: 5px;
    border-radius: 2px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
  }
`;

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
