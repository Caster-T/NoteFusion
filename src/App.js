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

<section class='contenedor'>
  <div class='element1'>
  <h3>About Us</h3>
    Somos unos estudiantes los cuales notamos la gran necesidad de crear una pagina amigable para organizar nuestras tareas, objetivos y metas.Para ello mediante nuestro curso con <span>"Generacion T"</span> hemos decidido encargarnos de esa necesidad.
  </div>
  <div class='element2'>
  <h3>¿Qué es <span className='pA'>NoteFusion</span>?</h3>
  <span className='pA'>NoteFusion</span> es una plataforma que permite a los usuarios gestionar sus proyectos y tareas mediante un enfoque visual y altamente personalizable. Combina la estructura de un roadmap dinámico, donde los usuarios pueden planificar y visualizar objetivos a largo plazo, con la funcionalidad de tableros al estilo Trello para organizar tareas diarias y proyectos de manera flexible.
  </div>
  <div class='element3'>
    <ul id='listaAboutUs'>
      <h3>Con <span className='pA'>NoteFusion</span>,tu puedes:</h3>
      <li>
        Crear y personalizar roadmaps que muestren los hitos y fases clave de tu proyecto, ajustando el flujo de trabajo según tus necesidades.</li>
      <li>
        Organizar tareas en tableros visuales que se pueden dividir en fases, categorías o prioridades, y mover fácilmente las tareas entre las diferentes etapas del proyecto.
      </li>
      <li>
        Gestionar equipos y colaborar en tiempo real, asignando tareas, agregando descripciones, comentarios y compartiendo archivos de manera eficiente.
      </li>
      <li>
        Automatizar flujos de trabajo para optimizar la productividad, integrando herramientas externas y configurando reglas automáticas que te ahorran tiempo.
      </li>
    </ul>
  </div>
  <div class='element4'>
    insertar logo de la pag.
  </div>
  <div className='element5'>
        <img src='' alt="Poner algun video a modo de gift"></img>
  </div>
</section>
<section className='singUp'>
      <div className="signup-form">
        <h2>Registrate Gratis!</h2>
          <form action="#" method="POST" className='contenedorSingUp'>

            <div id='Nombre'>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" placeholder="Tu nombre completo" required/>
            </div>

            <div id='CorreoElectronico'>
            <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" placeholder="Tu correo electrónico" required/>
            </div>

            <div id='Password'>
            <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" placeholder="Crea una contraseña" required/>
            </div>

            <div id='ReCheckPassword'>
              <label htmlFor="confirm-password">Confirmar Contraseña</label>
              <input type="password" id="confirm-password" name="confirm-password" placeholder="Repite tu contraseña" required/>
            </div>

            <div id='Registrarse'>
              <input type="submit" value="Registrarse"/>
            </div>
          </form>
          <div className="login-link"> 
            ¿Ya tienes una cuenta? <a href="#">Iniciar sesión</a> {/* Abri el PopUp*/}
          </div> 
      </div>
</section>
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