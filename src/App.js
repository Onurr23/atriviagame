import React from 'react';
import './CSS/App.css';
import {Switch,Route} from "react-router-dom";
import Home from "./Components/Home";
import Questions from "./Components/Questions";
import CorrectAnswer from "./Components/CorrectAnswer";
import IncorrectAnswer from "./Components/IncorrectAnswer";
import Navi from "./Components/Navi";
import GameFinished from "./Components/GameFinished";

function App() {
  return (
    <div className="App">

     <Navi/>

            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/questions' component={Questions}/>
                <Route exact path='/failed' component={IncorrectAnswer}/>
                <Route exact path='/success' component={CorrectAnswer} />
                <Route exact path='/over' component={GameFinished}/>

            </Switch>
    </div>
  );
}

export default App;
