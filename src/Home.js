import { useState, useEffect } from 'react'
import BlogList from './BLogList';

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
  // const [blogs, setBLog] = useState([
  //   {
  //     id: 1,
  //     title: 'Lorem ipsum dolor sit ame',
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //     author: 'Cheick',
  //     date: '07/02/2023',
  //   },
  //   {
  //     id: 2,
  //     title: 'Consectetur adipiscing elit',
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue mauris rhoncus aenean vel elit scelerisque mauris.',
  //     author: 'Eget',
  //     date: '07/02/2023',
  //   },
  //   {
  //     id: 3,
  //     title: 'La nuit des codeurs',
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue mauris rhoncus aenean vel elit scelerisque mauris.',
  //     author: 'Eget',
  //     date: '07/02/2023',
  //   },
  // ]);
  //   // return (
  //   //   <div className="home">
  //   //     <BlogList blogs={blogs} title={'Liste des blogs'} />
  //   //     {/* Afficher les articles d'Eget (avec la fction filter de js) */}
  //   //     <BlogList
  //   //       blogs={blogs.filter((blog) => blog.author === 'Eget')}
  //   //       title={"Liste des blogs d'Eget"}
  //   //     />
  //   //   </div>
  //   // );
  //   // ************** AJOUTER UNE FONCTON COMME PROPS EN REACT *****************
  //   // Supprimer un article uniquement dans le DOM
  const deleteOneArticle = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBLog(newBlogs);
  };
  //   // return (
  //   //   <div className="home">
  //   //     <BlogList
  //   //       blogs={blogs}
  //   //       title={'Liste des blogs'}
  //   //       deleteOneArticle={deleteOneArticle}
  //   //     />
  //   //   </div>
  //   // );
  //   // *********** UTILISATION DE USEEFFECT (doit être importé) ***************
  //   // Est executé chaque fois qu'on actualise la page ou à chaque MAJ
  //   // Si useEffect a un param dans son tableau il sera aussi executer
  //   // useEffect(() => {
  //   //   console.log('useEffect a été appelé');
  //   // });

  //   // ***************** AJOUTER DES DEPENDANCES DANS USEEFFECT *****************

  //   // Afficher uniquement au premier chargement de la page
  // const [name, setName] = useState('Guy');
  // useEffect(() => {
  //   console.log('useEffect a été appelé');
  // }, [name]);
  // return (
  //   <div className="home">
  //     <BlogList
  //       blogs={blogs}
  //       title={'Liste des blogs'}
  //       deleteOneArticle={deleteOneArticle}
  //     />
  //     <button className="btn btn-primary" onClick={() => setName('Yves')}>
  //       Changer le nom
  //     </button>
  //     <p>{name}</p>
  //   </div>
  // );

  // *** UTILISATION DE JSON SERVER (https://github.com/typicode/json-server) ***
  // -> Lancer le json server => npx json-server --watch data/db.json --port 8000

  // ************** RECUPERATION DES DONNEES COTE SERVEUR *****************

  const [blogs, setBLog] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBLog(data);
      });
  }, []);

  return (
    <div className="home">
      { blogs && <BlogList
        blogs={blogs}
        title={'Liste des blogs'}
        deleteOneArticle={deleteOneArticle}
      />}
    </div>
  );
}

 
export default Home;