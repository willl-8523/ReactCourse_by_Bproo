import { useState } from "react";

const Ajouter = () => {
    // Use Array
    const [ title, setTitle ] = useState();
    const [ author, setAuthor ] = useState();
    const [ content, setContent ] = useState();

    return (
      <div className="create">
        <h2 className="mb-5">Ajouter un nouveau article</h2>

        <form>
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
              value={ title }
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
              value={ author }
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
              value={ content }
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary d-block">
            Créer article
          </button>
        </form>
      </div>
    );
}
 
export default Ajouter;