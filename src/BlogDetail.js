import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch(`http://localhost:8000/blogs/${ id }`);
    return (
      <div className="detail-blog">
        <h1>Detail article {id}</h1>

        {error && (
          <div style={{ color: 'red' }}>
            <h2>{ error }</h2>
          </div>
        )}

        {isLoading && <div> Chargement en cours ... </div>}

        {blog && (
            <div className="blog">
                <h2 className="blog-titre">{ blog.title }</h2>
                <small className="blog-publication-date">{ `Publier le: ${ blog.date }` }</small>
                <p className="blog-body">{ blog.body }</p>
                <p className="blog-author">{ `Publier par: ${ blog.author }` }</p>
            </div>
        )}
      </div>
    );
}
 
export default BlogDetail;