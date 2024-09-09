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
        }} 
      />

        <Popup trigger={buttonPopup} setTrigger = {setButtonPopup} > <h3>{popupContent}</h3></Popup>
    </div>
   
  );

}

export default App;
