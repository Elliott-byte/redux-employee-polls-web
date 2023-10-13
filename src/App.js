import { Fragment } from "react";
import Login from "./components/Login";
import { Routes, Route } from "react-router";
import Dashboard from "./components/Dashboard";
import Question from './components/Question';
import NewQuestion from "./components/NewQuestion";
import Leaderboard from "./components/Leaderboard";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

function App() {
  return (<Fragment>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/question/:id' element={<Question />} />
      <Route path='/add' element={<NewQuestion />} />
      <Route path='/leaderboard' element={<Leaderboard />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </Fragment>)
}

export default App;
