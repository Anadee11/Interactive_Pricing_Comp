import { useState } from "react";
import "./App.css";
import Top from "./components/top";
import pattern from "./assets/pattern-circles.svg";

function App() {
  const themes = {
    light: {
      backgroundColor: "hsl(230, 100%, 99%)",
      color: "#000",
    },

    dark: {
      backgroundImage: `url(${pattern})`,
      backgroundColor: "black",
      color: "#fff",
    },
  };

  const [act, setAct] = useState(false);
  const [thm, setThm] = useState(themes.light);

  const clickHandler = () => {
    act ? setThm(themes.light) : setThm(themes.dark);
    setAct((prev) => !prev);
  };

  return (
    <div className="container" style={thm}>
      <div className="theme">
        <p className="themeSwitch">{act ? "Light" : "Dark"}</p>
        <div
          className={`btn ${act ? "active" : undefined}`}
          onClick={clickHandler}
        >
          <div className="inner_circle"></div>
        </div>
      </div>
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial. No credit card required</p>
      <Top />
    </div>
  );
}

export default App;
