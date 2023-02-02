import { useState } from 'react'

const Home = () => {
    const contenu = "Page d'acceuil";
    const colorText = {
      color: '#rgba(0,0,0,.9)',
    };

    const HandleClick = () => {
        console.log('click');
    }

    // Declarer une useState ou Hooks
    const [lastName, setLastName] = useState('Abouchou');

    const anotherClick = (firstName, e) => {
        const home = document.querySelector('.home');
        const p = document.createElement('p');
        const el = e.target.localName;

        // Modifier le Hooks pour qu'il soit réactif
        setLastName('Moting');
        
        // p.textContent = `Bonjour ${firstName} ${lastName} tu as cliqué sur l'element ${el}`;

        // home.append(p);

    }

    return (
      <div className="home" style={colorText}>
        <h2> {contenu} </h2>
        <button className="me-2" onClick={HandleClick}>
          Cliquer moi!
        </button>
        <button
          className="anotherClick"
          onClick={(e) => {
            anotherClick('Vincent', e);
          }}
        >
          Cliquez encore
        </button>
        <p>
          Bonjour Vincent {lastName}
        </p>
      </div>
    );
}
 
export default Home;