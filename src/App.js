import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Ajouter from './Ajouter';
import BlogDetail from './BlogDetail';

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
    -> Redemarrer le serveur local
  */

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path={'/'}>
              <Home />
            </Route>
            <Route path={'/ajouter'}>
              <Ajouter />
            </Route>
            {/* Pour dire que l'id est dynamique */}
            <Route path={'/blogs/:id'}>
              <BlogDetail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
