import './App.css';
import Home from './Home';
import './Navbar';
import Navbar from './Navbar';

function App() {

  const titre = 'turpis massa tincidunt dui ut';
  const contenu =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat.';
  const likes = 150;
  const google = 'https://www.google.com';

  return (
    <div className="App">
      <Navbar />
      <Home />
      <br></br>
      <hr></hr>
      <br></br>
      <div className="contenu">
        <h1>{titre}</h1>

        <p>{contenu}</p>

        <small>{likes} personnes ont aimé ton contenu </small>

        <div>
          <a href={google} target="_blank">
            Go to google
          </a>
        </div>
      </div>
    </div>
  );
}


export default App;
