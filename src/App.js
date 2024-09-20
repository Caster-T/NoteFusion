import './App.css';
import NavBar from './Navbar';
import Popup from './Popup'
import { useState } from 'react';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  return (
    <div className="App">
      <NavBar 
        openPopup={() => {
          setButtonPopup(true);
          setPopupContent("Aca va el login"); // Puedes modificar este texto dinámicamente
        }}/>
      <div>
          <h2>About us</h2>
          <p>
            Somos un grupo de estudiantes que queriamos una app para 
            poder organizarnos mejor que con las que hay disponibles
          </p>
          <img ></img>
      </div>


        <Popup trigger={buttonPopup} setTrigger = {setButtonPopup} > 
          <h3>{popupContent}</h3>
          <form>
            <label>Username: <input type="text" /></label><br/>
            <label>Password: <input type="password" /></label><br/>
            <button type="submit">Log in</button>
          </form>
        </Popup>
    </div>
  );
}

export default App;
