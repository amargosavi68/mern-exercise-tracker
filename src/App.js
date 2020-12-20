import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component";
import CreateUser from "./components/create-user.component";
import CreateExercise from "./components/create-exercise.component";
import ExerciseList from "./components/exercises-list.component";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExerciseList}/>
        {/* <Route path="/edit/:id" component={EditExercise}/> */}
        <Route path="/create" component={CreateExercise}/>
        <Route path="/user" component={CreateUser}/>
      </div>
    </Router>
  );
}

export default App;
