import "./App.css";

import { useState } from "react";

import Header from "./Components/Header";
import AddCounterButton from "./Components/AddCounterButton";
import Button from "./Components/Button";
import Footer from "./Components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
library.add(faStopwatch);

function App() {
  const [counter, setCounter] = useState([0]);

  return (
    <div className="container">
      <Header />
      <main>
        <AddCounterButton counter={counter} setCounter={setCounter} />
        <div>
          {counter.map((elem, index) => {
            return (
              <div className="counter-element" key={index}>
                <div>
                  <Button
                    elem={elem}
                    index={index}
                    counter={counter}
                    setCounter={setCounter}
                    role={"-"}
                  />
                  <span>{elem}</span>
                  <Button
                    elem={elem}
                    index={index}
                    counter={counter}
                    setCounter={setCounter}
                    role={"+"}
                  />
                </div>
                <Button
                  elem={elem}
                  index={index}
                  counter={counter}
                  setCounter={setCounter}
                  role={"Reset"}
                />
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
