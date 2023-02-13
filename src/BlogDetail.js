import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch(`http://localhost:8000/blogs/${ id }`);
    const history = useHistory()

    const handleDelete = () => {
      window.confirm('Êtes vous sur ?');
      
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
      }).then( () => {
        console.log('Suppression Ok');
        history.push('/');
      });
    };

    return (
      <div className="detail-blog">
        <h1>Detail article {id}</h1>

        {error && (
          <div style={{ color: 'red' }}>
            <h2>{error}</h2>
          </div>
        )}

        {isLoading && <div> Chargement en cours ... </div>}

        {blog && (
          <div className="blog">
            <h2 className="blog-titre">{blog.title}</h2>
            <small className="blog-publication-date">{`Publier le: ${blog.date}`}</small>
            <p className="blog-body text-break">{blog.body}</p>
            <p className="mb-5 blog-author">{`Publier par: ${blog.author}`}</p>
            {/* <button className="btn btn-primary">
              <Link to={'/'} className="text-white text-decoration-none">
                Retour
              </Link>
            </button> */}
            <button className="btn btn-primary" onClick={ handleDelete }>
              Supprimer
            </button>
          </div>
        )}
      </div>
    );
}
 
export default BlogDetail;