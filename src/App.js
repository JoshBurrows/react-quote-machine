import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  }, []);
  const getNewQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  };
  return (
    <div className="App">
      <section className="quote">
        <h2>
          <i className="fa-solid fa-quote-left"></i>
          &nbsp;
          {quote}
          &nbsp;
          <i className="fa-solid fa-quote-right"></i>
        </h2>
        <br />
        <small>-{author}-</small>
      </section>
      <br />
      <div className="container-fluid">
        <button className="btn btn-dark" onClick={getNewQuote}>
          Get New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
