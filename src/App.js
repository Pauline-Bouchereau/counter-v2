import "./App.css";

import { useState } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
library.add(faStopwatch);

function App() {
  const [counter, setCounter] = useState([0, 1]);

  return (
    <div className="container">
      <Header />
      <main>
        <button
          onClick={() => {
            const newTab = [...counter];
            newTab.push(0);
            setCounter(newTab);
          }}
        >
          Add Counter
        </button>

        {counter.map((elem, index) => {
          return (
            <div key={index}>
              <button
                onClick={() => {
                  setCounter(elem - 1);
                }}
              >
                -
              </button>
              <span>{elem}</span>
              <button
                onClick={() => {
                  setCounter(elem + 1);
                }}
              >
                +
              </button>
            </div>
          );
        })}
        <button
          onClick={() => {
            setCounter(0);
          }}
        >
          Reset
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
