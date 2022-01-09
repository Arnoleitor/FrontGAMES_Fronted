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
      <div className="dropdown"id="socialnetwork">
        
        <button onClick={() => myFunction()} className="drop-button">MENU</button>
        <div id="myDropdown" className="dropdown-content">
          <a id="enlace1" href="Register">Register</a>
          <a id="enlace2" href="Login">Login</a>
          <a id="enlace3" href="Post">Posts</a>
          <a id="enlace4" href="Profile">Profile</a>
        </div>
        <div className='Tittle'>

        </div>
        <div className='iconsSocial'>
      <a href="http://instagram.com">
        <div className='instagram'></div></a>
        <div className='space'></div>
      <a href="http://facebook.com">
        <div className='facebook'></div></a>
        <p className='psocial'>Follow us on our social networks!</p>
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
      
      <p className='parrafo'>!You can make friends from all these companies!</p>
      <div className="list-group">
        <a href="https://main.d1zdk2h0thz2b5.amplifyapp.com/Profile" class="list-group-item list-group-item-action">Some of the companies that you can add to your profile...</a>
        <a href="https://main.d1zdk2h0thz2b5.amplifyapp.com/Profile" class="list-group-item list-group-item-action ">Activision</a>
        <a href="https://main.d1zdk2h0thz2b5.amplifyapp.com/Profile" class="list-group-item list-group-item-action ">Nintendo Switch</a>
        <a href="https://main.d1zdk2h0thz2b5.amplifyapp.com/Profile" class="list-group-item list-group-item-action ">RiotGames</a>
        <a href="https://main.d1zdk2h0thz2b5.amplifyapp.com/Profile" class="list-group-item list-group-item-action ">Steam</a>
        <a href="https://main.d1zdk2h0thz2b5.amplifyapp.com/Profile" class="list-group-item list-group-item-action ">Battlenet</a>
        <a href="https://main.d1zdk2h0thz2b5.amplifyapp.com/Profile" class="list-group-item list-group-item-action ">Blizzard</a>
        <a href="https://main.d1zdk2h0thz2b5.amplifyapp.com/Profile" class="list-group-item list-group-item-action ">Bethesda</a>
        <a href="https://main.d1zdk2h0thz2b5.amplifyapp.com/Profile" class="list-group-item list-group-item-action list-group-item-dark">And many more...</a>
      </div>
    </div>



  )

};

export default Home;