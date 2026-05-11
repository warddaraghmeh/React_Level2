import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "./context/Datacontext";

const Page2 = () => {
  const { name, theme } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div className={`App ${theme}`}>
      <button onClick={() => navigate("/")}>Go Back</button>
      <h1>welcome to Page2</h1>
      <p>My name is {name}</p>
    </div>
  );
};

export default Page2;
