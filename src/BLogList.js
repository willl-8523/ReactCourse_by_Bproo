const BlogList = ({ blogs, title }) => {

    return (
      <div className="bloglist">
        <h2> { title } </h2>
        {
            blogs.map((blog) => (
            <div className="blog" key={ blog.id }>
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
    );
}
 
export default BlogList;