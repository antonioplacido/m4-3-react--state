import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: purple;
  /* height: 40px; */
  padding-top: 8px;
  color: white;
`;

const Booklist = styled.p``;

const Input = styled.input`
  border-radius: 4px;
  padding: 8px;
  border: 1px solid grey;
  margin: 5px;
`;

const AutoComplete = styled.span`
  font-weight: bold;
`;

const SearchResults = styled.div`
  padding-top: 15px;
`;

const BookGenre = styled.text`
  color: purple;
  font-family: italic;
`;

const Entry = styled.p`
  padding-top: 20px;
  font-size: 12px;
`;

const Suggestion = styled.li`
  &:hover {
    background: rgba(0, 151, 19, 0.1);
  }
`;

const Prediction = styled.span`
  font-weight: bold;
`;

const Typeahead = ({ suggestions, handleSelect }) => {
  const [suggestion, setSuggestion] = React.useState("");
  let filteredSuggestions = suggestions.filter((book) => {
    if (suggestion.length > 1) {
      return book.title.toLowerCase().includes(suggestion.toLowerCase());
    }
  });
  return (
    <div style={{ fontSize: 12 }}>
      <input
        type="text"
        value={suggestion}
        onChange={(ev) => {
          setSuggestion(ev.target.value);
        }}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            handleSelect(suggestion);
          }
        }}
        style={{ fontSize: 20 }} // this is the input font size
      />
      <Button onClick={() => setSuggestion("")}>Clear</Button>

      {filteredSuggestions.length > 0 ? ( /// if my suggestion input has at least 1 character, do below
        <SearchResults>
          <ul>
            <span>
              {filteredSuggestions.map((book) => {
                return (
                  <Entry>
                    <Suggestion
                      key={book.id}
                      onClick={() => handleSelect(book.title)}
                    >
                      <AutoComplete>
                        {book.title.slice(
                          0,
                          book.title
                            .toLowerCase()
                            .indexOf(suggestion.toLowerCase())
                        )}
                      </AutoComplete>
                      {book.title.slice(
                        book.title
                          .toLowerCase()
                          .indexOf(suggestion.toLowerCase()),
                        book.title
                          .toLowerCase()
                          .indexOf(suggestion.toLowerCase()) + suggestion.length
                      )}
                      <AutoComplete>
                        {book.title.slice(
                          book.title
                            .toLowerCase()
                            .indexOf(suggestion.toLowerCase()) +
                            suggestion.length
                          // book.title.length
                        )}
                        {""}
                      </AutoComplete>
                      {/* {book.title} // this gets re */}
                      <i> in </i>
                      <BookGenre>{book.categoryId}</BookGenre>
                    </Suggestion>
                  </Entry>
                );
              })}
            </span>
          </ul>
        </SearchResults>
      ) : (
        <></> // Else don't render!
      )}
    </div>
  );
  return (
    <>
      <Input
        type="text"
        name="searchBox"
        value={suggestion}
        onChange={(ev) => {
          setSuggestion(ev.target.value);
        }}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            return suggestion;
          }
        }}
      />
      <Button onClick={() => setSuggestion("")}>Clear</Button>
    </>
  );
};

export default Typeahead;

//PERSONAL NOTES

//for Exercise 2: needs the toLowerCase();
//at least 2 values --> suggestion.length >=
//
