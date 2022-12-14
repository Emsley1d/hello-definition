import * as React from "react";

const title = {
  name: "hello definition",
};

const App = () => {
  return (
    <div>
      <h1 className="title">{title.name}</h1>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
      <label htmlFor="search">Search: </label>
      <input className="search" type="text"></input>
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
];

export default App;
