import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [quote, setQuote] = React.useState([]);
  const [count1, setCount1] = React.useState(1);
  const [count2, setCount2] = React.useState(2);
  const status = React.useRef(null);
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
      <div className="content">
        <ul ref={status}>
          {quote.slice(count1, count2).map((data, index) => (
            <li key={index}>
              <p className="quote">{data.text}</p>
              <p className="author">{data.author}</p>
            </li>
          ))}
        </ul>
      </div>

      <nav>
        <button
          onClick={() => {
            if (count1 === 1) {
              setCount1(quote.length - 1);
              setCount2(quote.length);
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
            if (count1 === quote.length - 1) {
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
      </nav>
    </div>
  );
}
export default App;
