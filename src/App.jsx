import "./App.css";
import "./theme.css";
import { useState } from "react";
function App() {
  const [person, setPerson] = useState("ward");
  const [age, setAge] = useState(25);
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("");

  return (
    <div className={`App ${theme}`}>
      <div className="theme-toggle">
        <div
          className={`toggle ${theme === "Dark" ? "active" : ""}`}
          onClick={() => setTheme(theme === "Dark" ? "Light" : "Dark")}
        >
          <div className="track">
            <div className="stars"></div>
            <div className="sun-moon">
              <div className="craters"></div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setTheme(theme === "Dark" ? "Light" : "Dark")}
        style={{ marginBottom: "44px" }}
      >
        Toggle Theme
      </button>
      <div>
        <button style={{ marginTop: "26px" }} onClick={() => setTheme("Light")}>
          Light
        </button>
        <button
          style={{ marginRight: "26px" }}
          onClick={() => setTheme("Dark")}
        >
          Dark
        </button>
        <button
          style={{ marginRight: "26px" }}
          onClick={() => setTheme("Grey")}
        >
          Grey
        </button>
        <button onClick={() => setTheme("Pink")}>Pink</button>
        <h2 style={{ marginTop: "66px" }}>my name is {person}</h2>
        <button onClick={() => setPerson("ward Daraghmeh")}>change name</button>
      </div>
      <h2>My Age is {age}</h2>
      <button onClick={() => setAge(30)}>change Age</button>
      <br />
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>count is {count}</button>
    </div>
  );
}

export default App;
