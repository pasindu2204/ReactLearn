
import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
<Router>
      <Navbar />
      <Switch>
<Route path="/" exact Component= {Home} />

      </Switch>
      </Router>
      
    </div>
  );
  
  
}

export default App;
