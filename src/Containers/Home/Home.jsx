import './Home.scss';
import React from 'react';




const Home = () => {
  /*Cuando se hace click en el botón, muestra el submenu*/
  function myFunction() {
    //Añade una clase al elemento que tenga el id myDropdown
    document.getElementById("myDropdown").classList.toggle("show");
  }


  window.onClick = function (event) {
    if (!event.target.matches('.drop-button')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        //Busca dentro de drop-content los elementos con la clase show
        if (openDropdown.classList.contains('show')) {
          //elimina la clase show de los elementos dentro de drop-content
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  return (
    <div className='designHome'>
      <div className="dropdown">
        <button onClick={() => myFunction()} className="drop-button">MENU</button>
        <div id="myDropdown" className="dropdown-content">
          <a id="enlace1" href="Register">Register</a>
          <a id="enlace2" href="Login">Login</a>
          <a id="enlace3" href="Post">Posts</a>
          <a id="enlace4" href="Profile">Profile</a>
        </div>
        <div className='Tittle'>
          
        </div>
      </div>
      <div className='IconsBusiness'>
        <div id="img1">

        </div>
        <div id="img2">

        </div>
        <div id="img3">

        </div>
        <div id="img4">

        </div>
        
      </div>
      <p className='parrafo'>Podras hacer amigos de todas estas compañias!</p>
     
    </div>
    
    
  )

};

export default Home;