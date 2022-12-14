import * as React from "react";

const title = {
  name: "hello definition",
};

const App = () => {
  return (
    <div>

      <h1 className="title">{title.name}</h1>
      <h3 className="links">PLACEHOLDER FOR LANGUAGE LINKS - HTML CSS JAVASCRIPT REACT</h3>
      <span id="searchBar">
      <label htmlFor="search">Search:</label>
      <input type="text"></input><button>Submit</button>
      </span>

      <ul>
        {searchableWords.map(function (item) {
          return (
            <li key={item.objectID}>
              <span className="word">{item.word}</span>
              <br></br>
              <span>{item.language}</span>
              <br></br>
              <span>Definition: {item.definition}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};


// PSUEDO DATA
const searchableWords = [

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
      'The Box Model is a CSS layout mechanism that the web browser uses to render content organized by box-shaped elements.',
    objectID: 3,
  },
];

export default App;
