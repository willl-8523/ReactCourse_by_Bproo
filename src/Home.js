const Home = () => {
    const contenu = "Page d'acceuil";
    const colorText = {
      color: '#rgba(0,0,0,.9)',
    };

    const HandleClick = () => {
        console.log('click');
    }

    const anotherClick = (name, e) => {
        const home = document.querySelector('.home');
        const p = document.createElement('p');
        const el = e.target.localName;
        p.textContent = `Bonjour ${name} tu as cliqué sur l'element ${el}`;

        home.append(p);

    }

    return (
      <div className="home" style={colorText}>
        <h2> {contenu} </h2>
        <button className="me-2" onClick={ HandleClick }>Cliquer moi!</button>
        <button className="anotherClick" onClick={ (e) => {anotherClick('Vincent', e)} }>Cliquez encore</button>
      </div>
    );
}
 
export default Home;