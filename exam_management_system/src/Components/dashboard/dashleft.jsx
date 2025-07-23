import Leftside from "../sidebar/leftside";
import Dashboard from "./dashboard";
import classes from "./dashleft.module.css";
const Main = () => {
  return (
    <div className={classes.appContainer}>
      <Leftside />
      <Dashboard />
    </div>
  );
};

export default Main;
