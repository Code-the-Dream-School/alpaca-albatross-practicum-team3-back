import React from "react";

const SuggestionsList = props => {
    const {
      suggestions,
      inputValue,
      onSelectSuggestion,
      displaySuggestions,
      selectedSuggestion
    } = props;
  
    if (inputValue && displaySuggestions) {
      if (suggestions.length > 0) {
        return (
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => {
              const isSelected = selectedSuggestion === index;
              const classname = `suggestion ${isSelected ? "selected" : ""}`;
              return (
                <li
                  key={index}
                  className={classname}
                  onClick={() => onSelectSuggestion(index)}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      }
    }
    return <></>;
  };
  const Autocomplete = () => {
    const [inputValue, setInputValue] = React.useState("");
    const [filteredSuggestions, setFilteredSuggestions] = React.useState([]);
    const [selectedSuggestion, setSelectedSuggestion] = React.useState(0);
    const [displaySuggestions, setDisplaySuggestions] = React.useState(false);
    
  
    // const suggestions = [
    //   "Google",
    //   "Google Drive"
    // ];
  
    const onChange = event => {
      const value = event.target.value;
      setInputValue(value);
  
      const filteredSuggestions = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
  
      setFilteredSuggestions(filteredSuggestions);
      setDisplaySuggestions(true);
    };
  
    const onSelectSuggestion = index => {
      setSelectedSuggestion(index);
      setInputValue(filteredSuggestions[index]);
      setFilteredSuggestions([]);
      setDisplaySuggestions(false);
    };
  
    return (
      <>
        <form action="/search" method="post">
        <div class="search-bar">
        <input
          className="user-input"
          id="reset-this-parent"
          type="text"
          name="q"
          onChange={onChange}
          value={inputValue}
          autocomplete="off"
        />
        </div>
       </form>
        <SuggestionsList
          inputValue={inputValue}
          selectedSuggestion={selectedSuggestion}
          onSelectSuggestion={onSelectSuggestion}
          displaySuggestions={displaySuggestions}
          suggestions={filteredSuggestions}
        />
      </>
    );
  };
  
  
export default SuggestionsList