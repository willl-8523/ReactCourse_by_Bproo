import { useState } from "react";
import { useHistory } from "react-router-dom";

const Ajouter = () => {
    // Use Array
    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ body, setBody ] = useState('');
    const url = 'http://localhost:8000/blogs';
    const [ isLoading, setIsLoading ] = useState(false);

    // Initialiser la page de redirection
    const history = useHistory();
    
    const handleBLogAdding = (e) => {
      e.preventDefault();

      const tmp_date = new Date().toISOString().split('T');
      const date = `${tmp_date[0]} ${tmp_date[1].split('.')[0]}`;

      // Les propiétés de chaque article dans data/db.json
      // NB la propiété id d'ajoute automatiquement
      const blog = { title, author, body, date };
      
      setIsLoading(true);

      // On utilise le setTimeout car la bdd est en local donc c'est pour simuler l'attente
      setTimeout(() => { 
        fetch(url, 
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
          }
        ).then( () => {
          console.log('article ajouter avec succes.');
          setIsLoading(false);

          // Rentre une étape en arrière
          // history.go(-1);

          // Rediriger à une autre page
          history.push('/');
        })
      }, 2000);
    }

    return (
      <div className="create">
        <h2 className="mb-5">Ajouter un nouveau article</h2>

        <form onSubmit={handleBLogAdding}>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label d-block text-start"
            >
              Titre de l'article
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="title"
              //   defaultValue={title} //   defaultValue => désigne la valeur par defaut de l'input

              // Recuperer la valeur de l'input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="exampleSelect"
              className="form-label d-block text-start"
            >
              Selectionner un auteur
            </label>
            <select
              id="exampleSelect"
              className="form-select"
              aria-label="Default select example"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            >
              <option value=""></option>
              <option value="Duplex">Duplex</option>
              <option value="Kamdem">Kamdem</option>
              <option value="Yves">Yves</option>
            </select>
          </div>

          <div className="mb-3">
            <label
              htmlFor="exampleInputContent"
              className="form-label d-block text-start"
            >
              Contenu de l'article
            </label>
            <textarea
              type="textarea"
              className="form-control"
              id="exampleInputContent"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>

          {!isLoading && (
            <button type="submit" className="btn btn-primary d-block">
              Créer article
            </button>
          )}
          {isLoading && (
            <button type="submit" className="btn btn-primary d-block" disabled>
              Encours de chargement...
            </button>
          )}
        </form>
      </div>
    );
}
 
export default Ajouter;