import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [quote, setQuote] = React.useState([]);
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(1);
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
      <ul>
        {quote.slice(count1, count2).map((data, i) => (
          <li key={i}>
            <p>{data.text}</p>
            <p>{data.author}</p>
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          console.log(count1);
          if (count1 == 0) {
            setCount1(quote.length);
            setCount2(quote.length + 1);
          } else {
            setCount1(count1 - 1);
            setCount2(count2 - 1);
          }
        }}
      >
        previous
      </button>
      <button
        onClick={() => {
          console.log(count1);
          if (count1 == quote.length) {
            setCount1(0);
            setCount2(1);
          } else {
            setCount1(count1 + 1);
            setCount2(count2 + 1);
          }
        }}
      >
        next
      </button>
    </div>
  );
}

export default App;
