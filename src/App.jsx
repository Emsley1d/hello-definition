import * as React from "react";

const title = {
  name: "hello definition",
};

const App = () => {
  const wordDefs = [
    {
      word: "Array",
      language: "JavaScript",
      definition:
        "An array is an ordered collection of data. Arrays are used to store multiple values in a single variable. This is compared to a variable that can store only one value.",
      objectID: 0,
    },
    {
      word: "Functions",
      language: "JavaScript",
      definition:
        "A function is a reusable set of statements to perform a task or calculate a value. Functions can be passed one or more values and can return a value at the end of their execution.",
      objectID: 1,
    },
    {
      word: "Attributes",
      language: "HTML",
      definition:
        'Attributes can be added to the opening tag of an HTML element to change its default behavior or provide additional data about it. Attributes consist of a name and a value in the format name="value":',
      objectID: 2,
    },
    {
      word: "Box Model",
      language: "CSS",
      definition:
        "The Box Model is a CSS layout mechanism that the web browser uses to render content organized by box-shaped elements.",
      objectID: 3,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const Search = (props) => (
    <div className="searchBar">
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={props.onSearch}></input>
      <button>Submit</button>

      <p>
        Searching for... <strong>{searchTerm}</strong>
      </p>
    </div>
  );

  const Definitions = (props) => (
    <ul>
      {props.definitions.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );

  const Item = (props) => (
    <li>
      <span className="word">{props.item.word}</span>
      <br></br>
      <span>{props.item.language}</span>
      <br></br>
      <span>Definition: {props.item.definition}</span>
    </li>
  );

  const searchedWordDefs = wordDefs.filter((wordDef) =>
    wordDef.word.toLowerCase().includes(searchTerm.toLowerCase())
    //! AND LANGUAGE 
  );

  return (
    <div>
      <h1 className="title">{title.name}</h1>
      <h3 className="links">
        PLACEHOLDER FOR LANGUAGE LINKS - HTML CSS JAVASCRIPT REACT
      </h3>
      <br />

      <Search onSearch={handleSearch} />

      <br />

      <Definitions definitions={wordDefs} />
    </div>
  );

};

export default App;
