import "./App.css";
import Header from "./Components/Header/header";
// import Leftside from "./Components/sidebar/leftside";
// import Dashboard from "./Components/dashboard/dashboard";
import Main from "./Components/dashboard/dashleft";
import Add from "./Components/manageAccount/add";
// import Exams from "./Components/Exam/js";
// import Registration from "./Components/Registratin/examinee";
// import AddExam from "./Components/manageExam/addexam";
// import AddQuestion from "./Components/managequestion/addquestion";
// import AddUser from "./Components/manageAccount/adduser";
// import Status from "./Components/status/status";
// import Department from "./Components/manageExam/department";
// import Subject from "./Components/manageExam/subject";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <AddUser /> */}
      {/* <Registration /> */}
      {/* <AddQuestion /> */}
      {/* <AddExam /> */}
      {/* <Exams />  */}
      {/* <Status /> */}
      {/* <Department /> */}
      {/* <Subject /> */}
      {/* <Add /> */}
    </div>
  );
}

export default App;
