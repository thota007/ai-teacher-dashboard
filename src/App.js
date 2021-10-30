import './App.css';
import Login from "./Login"
import Home from "./Home"
import Challenge from "./Challenge"
import Start from "./Start"
import {Route} from 'react-router-dom'


function App() {
  return (
    <div className="App" >
      <Route exact path= "/" component={Login}/>
      <Route exact path= "/home" component={Home}/>
      <Route exact path= "/challenge" component={Challenge}/>
      <Route exact path= "/start" component={Start}/>
    </div>
  );
}

export default App;
