import { useState } from 'react'

const Home = () => {
    // const contenu = "Page d'acceuil";
    // const colorText = {
    //   color: '#rgba(0,0,0,.9)',
    // };

    // const HandleClick = () => {
    //     console.log('click');
    // }

    // // Declarer une useState ou Hooks
    // const [lastName, setLastName] = useState('Abouchou');

    // const anotherClick = (firstName, e) => {
    //     const home = document.querySelector('.home');
    //     const p = document.createElement('p');
    //     const el = e.target.localName;

    //     // Modifier le Hooks pour qu'il soit réactif
    //     setLastName('Moting');
        
    //     // p.textContent = `Bonjour ${firstName} ${lastName} tu as cliqué sur l'element ${el}`;

    //     // home.append(p);

    // }

    // return (
    //   <div className="home" style={colorText}>
    //     <h2> {contenu} </h2>
    //     <button className="me-2" onClick={HandleClick}>
    //       Cliquer moi!
    //     </button>
    //     <button
    //       className="anotherClick"
    //       onClick={(e) => {
    //         anotherClick('Vincent', e);
    //       }}
    //     >
    //       Cliquez encore
    //     </button>
    //     <p>
    //       Bonjour Vincent {lastName}
    //     </p>
    //   </div>
    // );

    // ************************ AFFICHER UNE LISTE ***************************

    const [blogs, setBLog] = useState([
      {
        id: 1,
        title: 'Lorem ipsum dolor sit ame',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        author: 'Cheick',
        date: '07/02/2023',
      },
      {
        id: 2,
        title: 'Consectetur adipiscing elit',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue mauris rhoncus aenean vel elit scelerisque mauris.',
        author: 'Eget',
        date: '07/02/2023',
      },
    ]);

    return (
      <div className="home">
        <div className="bloglist">
          {
            blogs.map( (blog) => (
              <div className="blog">
                <a href="\" className="blog-titre">
                  { blog.title }
                </a>
                <p className="blog-author">
                  Publier par { blog.author }
                  <small className="blog-date"> le { blog.date }</small>
                </p>
              </div>
            ))
          }
        </div>
      </div>
    );

}
 
export default Home;