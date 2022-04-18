import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [quote, setQuote] = React.useState([]);
  const [author, seAuthor] = React.useState([]);
  const [count, setCount] = React.useState();
  React.useEffect(() => {
    async function fetchAPI() {
      const resp = await fetch("https://type.fit/api/quotes").then((data) => {
        return data.json();
      });
      setQuote(resp);
    }
    fetchAPI();
  }, []);

  return (
    <div className="App">
      <ul></ul>
      <button>next</button>
      <button>previous</button>
    </div>
  );
}

export default App;
