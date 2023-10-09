import { Fragment } from "react";
import Login from "./components/Login";
import { Routes, Route } from "react-router";
import Dashboard from "./components/Dashboard";

function App() {
  return (<Fragment>
    <Routes>
      <Route path='/' exact element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  </Fragment>)
}

export default App;
