const Navbar = () => {

  return (
    <nav
      className="navbar navbar-expand-sm navbar-light bg-light mb-4"
      aria-label="Third navbar example"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          BlogDev
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse flex-grow-0"
          id="navbarsExample03"
        >
          <ul className="navbar-nav mb-2 mb-sm-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                New Article
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Register
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link buttonLogin" href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
