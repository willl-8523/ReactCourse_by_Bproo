import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="404">
            <h2>Oooooooooops</h2>
            <h5>La page que vous essayez d'accéder n'existe pas</h5>
            <Link to='/'>Allez à la page d'acceuil</Link>
        </div>
    );
}
 
export default NotFound;