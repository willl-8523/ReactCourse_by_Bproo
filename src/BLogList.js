const BlogList = ({ blogs, title, deleteOneArticle }) => {
  return (
    <div className="bloglist">
      <h2> {title} </h2>
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <a href="\" className="blog-titre">
            {blog.title}
          </a>
          <p className="blog-author">
            Publier par {blog.author}
            <small className="blog-date"> le {blog.date}</small>
          </p>

          {/* onClick={ () => deleteOneArticle(blog.i) => On utilise une fonction anonyme pour que la fonction ne declenche pas au chargement de la page */}
          <button
            className="btn btn-primary"
            onClick={() => deleteOneArticle(blog.id)}
          >
            Supprimer article
          </button>
        </div>
      ))}
    </div>
  );
};
 
export default BlogList;