import "./App.css";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route key={0} path={"/"} element={<Registration />} />
            <Route key={1} path={"/login"} element={<Login />} />
            <Route key={2} path={"/home"} element={<Home/>}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
