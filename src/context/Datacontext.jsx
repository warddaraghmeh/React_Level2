import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = {
  name: "Ward Daraghmeh",
  age: 25,
  count: 0,
  theme: "Light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };
    case "CHANGE_AGE":
      return { ...state, age: action.newValue };
    case "increment":
      return { ...state, count: state.count + 1 };
    case "CHANGE_THEME":
      return { ...state, theme: action.newValue };
    default:
      return state;
  }
};

export function DataProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  const changeName = (newName) => {
    dispatch({ type: "CHANGE_NAME", newValue: newName });
  };

  const changeAge = (newAge) => {
    dispatch({ type: "CHANGE_AGE", newValue: newAge });
  };

  const increaseBy1 = (newCount) => {
    dispatch({ type: "increment" });
  };

  const toggleTheme = (newTheme) => {
    dispatch({ type: "CHANGE_THEME", newValue: newTheme });
  };

  return (
    <ThemeContexttt.Provider
      value={{
        ...firstState,
        changeName,
        changeAge,
        increaseBy1,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
