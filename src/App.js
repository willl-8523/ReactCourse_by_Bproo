import './App.css';
import Home from './Home';
import './Navbar';
import Navbar from './Navbar';

function App() {

  return (
    <div className="App">
        <Navbar />
      <div className='container'>
        <Home />
      </div>
    </div>
  );
}

export default App;
