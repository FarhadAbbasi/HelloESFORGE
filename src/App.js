import logo from "./logo.svg";
import "./App.css";
import MyApp from "./MyApp";
import Admin from "./Components/Admin";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element= {<MyApp /> } />
        <Route path="admin" element= {<Admin /> } />
      </Routes>
      
    </div>
  );
}

export default App;
