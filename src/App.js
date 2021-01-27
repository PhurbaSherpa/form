import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [calculus, setCalculus] = useState(false);
  const [error, setError] = useState("");
  const [submmited, setSubmitted] = useState("");
  const [choices, setChoices] = useState({
    choice1: "",
    choice2: "",
    choice3: "",
  });

  const submitAnswers = (e) => {
    e.preventDefault();
    if (checkChoices()) {
      if (calculus) {
        axios.post("http://localhost:8080/api/submit", {});
        setSubmitted("choices have been submitted");
      } else {
        setError("must have the course calculus");
      }
    } else {
      setError("fill all three options");
    }
  };

  const checkChoices = () => {
    let completed = true;
    Object.keys(choices).map((key) => {
      if (!choices[key]) {
        completed = false;
      }
    });
    return completed;
  };

  const checkCalculus = (e) => {
    if (error) {
      setError("");
    }
    let option = e.target.value.toLowerCase();
    console.log(option);
    if (option === "calculus") {
      setCalculus(true);
    }
    setChoices({ ...choices, [e.target.id]: e.target.value });
  };

  return (
    <div className="App">
      <form onSubmit={submitAnswers}>
        <input onChange={checkCalculus} id="choice1" />
        <input onChange={checkCalculus} id="choice2" />
        <input onChange={checkCalculus} id="choice3" />
        <button type="submit">Submit</button>
        {error ? <div>{error}</div> : null}
        {submmited ? <div>{submmited}</div> : null}
      </form>
    </div>
  );
}

export default App;
