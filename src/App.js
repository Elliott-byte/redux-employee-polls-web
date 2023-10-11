import { Fragment } from "react";
import Login from "./components/Login";
import { Routes, Route } from "react-router";
import Dashboard from "./components/Dashboard";
import Question from './components/Question';

function App() {
  return (<Fragment>
    <Routes>
      <Route path='/' exact element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/question/:id' element={<Question />} />
    </Routes>
  </Fragment>)
}

export default App;
