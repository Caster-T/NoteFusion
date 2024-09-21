import './App.css';
import NavBar from './Navbar';
import { useState } from 'react';
import Popup from './Popup'

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  return (
    <div className="App">
    <NavBar 
          openPopup={() => {
          setButtonPopup(true);
           setPopupContent("Aca va el login");
    }}/>
     
      <Popup trigger ={buttonPopup} setTrigger= {setButtonPopup}> 
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
