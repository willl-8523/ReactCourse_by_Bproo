const Home = () => {
    const contenu = "Page d'acceuil";
    const colorText = {
      color: '#00FFFF',
    };

    return (
      <div className="home" style={ colorText }>
        <h2> {contenu} </h2>
      </div>
    );
}
 
export default Home;