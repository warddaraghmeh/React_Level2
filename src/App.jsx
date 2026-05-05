import "./App.css";
import "./theme.css";
import { useReducer } from "react";
const initialDate = {
  name: "Ward Daraghmeh",
  age: 25,
  count: 0,
  theme: "Light",
};
const reduser = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };
    case "CHANGE_AGE":
      return { ...state, age: action.newValue };
    default:
      return state;
    case "increment":
      return { ...state, count: state.count + 1 };

    case "CHANGE_THEME":
      return { ...state, theme: action.newValue };
  }
};
function App() {
  const [allDate, dispatch] = useReducer(reduser, initialDate);
  return (
    <div className={`App ${allDate.theme}`}>
      <button
        onClick={() =>
          dispatch({
            type: "CHANGE_THEME",
            newValue: allDate.theme === "Light" ? "Dark" : "Light",
          })
        }
        style={{ marginBottom: "44px" }}
      >
        Toggle Theme
      </button>

      <div
        onChange={() =>
          dispatch({
            type: "CHANGE_THEME",
            newValue: allDate.theme === "Light" ? "Dark" : "Light",
          })
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

      <div>
        <button
          onClick={() => dispatch({ type: "CHANGE_THEME", newValue: "Light" })}
          style={{ marginRight: "26px" }}
        >
          Light
        </button>
        <button
          onClick={() => dispatch({ type: "CHANGE_THEME", newValue: "Dark" })}
          style={{ marginRight: "26px" }}
        >
          Dark
        </button>
        <button
          onClick={() => dispatch({ type: "CHANGE_THEME", newValue: "Grey" })}
          style={{ marginRight: "26px" }}
        >
          Grey
        </button>
        <button
          onClick={() => dispatch({ type: "CHANGE_THEME", newValue: "Pink" })}
        >
          Pink
        </button>
      </div>

      <h2 style={{ marginTop: "66px" }}>My name is {allDate.name}</h2>
      <button
        onClick={() => dispatch({ type: "CHANGE_NAME", newValue: "ward" })}
      >
        Change name
      </button>
      <br />
      <br />

      <h2>My Age is {allDate.age}</h2>
      <button onClick={() => dispatch({ type: "CHANGE_AGE", newValue: 26 })}>
        Change Age
      </button>

      <br />
      <br />
      <br />
      <br />
      <button onClick={() => dispatch({ type: "increment" })}>
        count is {allDate.count}
      </button>
    </div>
  );
}

export default App;
