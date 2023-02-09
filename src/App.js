import './App.css';
import Home from './Home';
import './Navbar';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  // return (
  //   <div className="App">
  //     <Navbar />
  //     <div className="container">
  //       <Home />
  //     </div>
  //   </div>
  // );

  /* ************************ LES ROUTES EN REACT ***************************
    -> Installation => npm install react-router-dom@5
  */

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route path={'/'}>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
