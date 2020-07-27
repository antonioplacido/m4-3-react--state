import React from "react";

import data from "../data";

const Typeahead = ({ suggestions, handleSelect }) => {
  const [suggestion, setSuggestion] = React.useState();
  return (
    <div style={{ fontSize: 20 }}>
      <input
        type="text"
        value={suggestion}
        onChange={(ev) => {
          setSuggestion(ev.target.value);
          //might want another hook to display list, pass ev
        }}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            handleSelect(suggestion);
          }
        }}
        style={{ fontSize: 13 }} // this is the input font size
      />
      <button onClick={() => setSuggestion("")}>Clear</button>
      <p>{suggestion}</p>
    </div>
  );
};

export default Typeahead;
