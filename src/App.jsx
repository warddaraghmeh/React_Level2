import "./App.css";
import "./theme.css";

import { useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Page2 from "./Page2";
import DataContext from "./context/Datacontext";

// const initialDate = {
//   name: "Ward Daraghmeh",
//   age: 25,
//   count: 0,
//   theme: "Light",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "CHANGE_NAME":
//       return { ...state, name: action.newValue };
//     case "CHANGE_AGE":
//       return { ...state, age: action.newValue };
//     case "increment":
//       return { ...state, count: state.count + 1 };
//     case "CHANGE_THEME":
//       return { ...state, theme: action.newValue };
//     default:
//       return state;
//   }
// };

function App() {
  const {
    name,
    theme,
    age,
    count,
    changeName,
    toggleTheme,
    changeAge,
    increaseBy1,
  } = useContext(DataContext);

  const navigate = useNavigate();

  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* ===== Go to Page2 - Fixed ===== */}
              <button
                onClick={() => navigate("/page2")}
                style={{ position: "fixed", top: "20px", left: "20px" }}
              >
                Go to Page2
              </button>

              {/* ===== Theme Toggle Button ===== */}
              <button
                onClick={() =>
                  toggleTheme(theme === "Light" ? "Dark" : "Light")
                }
                style={{ marginBottom: "44px" }}
              >
                Toggle Theme
              </button>

              {/* ===== Switch UI ===== */}
              <div
                onChange={() =>
                  toggleTheme(theme === "Light" ? "Dark" : "Light")
                }
                style={{ marginBottom: "44px" }}
                className="btn-container"
              >
                <i className="fa fa-sun-o" aria-hidden="true" />
                <label className="switch btn-color-mode-switch">
                  <input
                    type="checkbox"
                    name="color_mode"
                    id="color_mode"
                    defaultValue={1}
                  />
                  <label
                    htmlFor="color_mode"
                    data-on="Dark"
                    data-off="Light"
                    className="btn-color-mode-switch-inner"
                  />
                </label>
                <i className="fa fa-moon-o" aria-hidden="true" />
              </div>

              {/* ===== Theme Buttons ===== */}
              <div>
                <button
                  onClick={() => toggleTheme("Light")}
                  style={{ marginRight: "26px" }}
                >
                  Light
                </button>
                <button
                  onClick={() => toggleTheme("Dark")}
                  style={{ marginRight: "26px" }}
                >
                  Dark
                </button>
                <button
                  onClick={() => toggleTheme("Grey")}
                  style={{ marginRight: "26px" }}
                >
                  Grey
                </button>
                <button onClick={() => toggleTheme("Pink")}>Pink</button>
              </div>

              {/* ===== Name ===== */}
              <h2 style={{ marginTop: "66px" }}>My name is {name}</h2>
              <button onClick={() => changeName("Ward2000")}>
                Change name
              </button>

              <br />
              <br />

              {/* ===== Age ===== */}
              <h2>My Age is {age}</h2>
              <button onClick={() => changeAge(33)}>Change Age</button>

              <br />
              <br />
              <br />
              <br />

              {/* ===== Counter ===== */}
              <button onClick={() => increaseBy1()}>count is {count}</button>
            </>
          }
        />

        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </div>
  );
}

export default App;
