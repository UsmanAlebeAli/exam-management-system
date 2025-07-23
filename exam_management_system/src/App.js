import "./App.css";
import Header from "./Components/Header/header";
import Leftside from "./Components/sidebar/leftside";
import Dashboard from "./Components/dashboard/dashboard";
import Main from "./Components/dashboard/dashleft";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
