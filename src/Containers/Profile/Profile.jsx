import './Profile.scss'
import React from 'react';




const Profile = () => {
    const UpdateData = async () => {
        let element = document.getElementById("createpost");
        element.classList.add("WindowMessagePopUp");
        let element_back = document.getElementById("openWindows");
        element_back.classList.add("seeWindows");

    }
    const closewindowUpdate = () => {
        let element = document.getElementById("createpost");
        element.classList.remove("WindowMessagePopUp");
    
        let element_back = document.getElementById("openWindows");
        element_back.classList.remove("seeWindows");
      }
    
    return (

        <div className='designProfile'>
            <div className="Contenedor">
                <div className="caja1">
                    <div className='zonafotopadre'>

                    </div>
                    <div className='Zonainfo'>
                        <div class="p-1 mb-1 bg-primary text-white">ID PSN<p>Arnold</p></div>
                        <div class="p-1 mb-1 bg-secondary text-white">ID Steam<p>Arnold</p></div>
                        <div class="p-1 mb-1 bg-success text-white">ID xbox<p>Arnold</p></div>
                        <div class="p-1 mb-1 bg-danger text-white">ID Nintendo<p>Arnold</p></div>
                        <div class="p-1 mb-1 bg-warning text-dark">ID Epic Games<p>Arnold</p></div>
                        <div class="p-1 mb-1 bg-info text-dark">ID Activision<p>Arnold</p></div>
                        <div class="p-1 mb-1 bg-light text-dark">ID Blizzard<p>Arnold</p></div>
                        <div class="p-1 mb-1 bg-dark text-white">ID RiotGames<p>Arnold</p></div>
                        <div class="p-1 mb-1 bg-body text-dark">ID Uplay<p>Arnold</p></div>
                        <div class="p-1 mb-1 bg-white text-dark">ID Battlenet<p>Arnold</p></div>
                        <div class="p-1 mb-1 bg-transparent text-dark">ID Bethesda<p>Arnold</p></div>
                        <div className='info'>

                        </div>
                    </div>
                </div>

                <div className="caja2">
                    <div className='UpdateProfile'> <p>YOUR DATA PROFILE</p>
                        <div className='Updater'>
                            <input id="relleno1" type='text' name='name' title='name' lenght='30' placeholder='Name' />
                            <input id="relleno1" type='text' name='surname' title='surname' lenght='30' placeholder='Surname' />
                            <input id="relleno1" type='text' name='Nickname' title='Nickname' lenght='30' placeholder='Nickname' />
                            <input id="relleno1" type='text' name='Game' title='Game' lenght='30' placeholder='Favorite Game' />
                            <input id="relleno1" type='text' name='city' title='city' lenght='30' placeholder='City' />
                            <input id="relleno1" type='email' name='email' title='email' lenght='30' placeholder='Email' />
                            <input id="relleno1" type='password' name='password' title='password' lenght='30' placeholder='Password' />
                            <input id="relleno1" type='text' name='IDPSN' title='IDPSN' lenght='30' placeholder='IDPSN' />
                            <input id="relleno1" type='text' name='ID Steam' title='ID Steam' lenght='30' placeholder='ID Steam' />
                            <input id="relleno1" type='text' name='ID xbox' title='ID xbox' lenght='30' placeholder='ID xbox' />
                            <input id="relleno1" type='text' name='ID Nintendo' title='ID Nintendo' lenght='30' placeholder='ID Nintendo' />
                            <input id="relleno1" type='text' name='ID Epic Games' title='ID Epic Games' lenght='30' placeholder='ID Epic Games' />
                            <input id="relleno1" type='text' name='ID Activision' title='ID Activision' lenght='30' placeholder='ID Activision' />
                            <input id="relleno1" type='text' name='ID Blizzard' title='ID Blizzard' lenght='30' placeholder='ID Blizzard' />
                            <input id="relleno1" type='text' name='ID RiotGames' title='ID RiotGames' lenght='30' placeholder='ID RiotGames' />
                            <input id="relleno1" type='text' name='ID Uplay' title='ID Uplay' lenght='30' placeholder='ID Uplay' />
                            <input id="relleno1" type='text' name='ID Battlenet' title='ID Battlenet' lenght='30' placeholder='ID Battlenet' />
                            <input id="relleno1" type='text' name='ID Bethesda' title='ID Bethesda' lenght='30' placeholder='ID Bethesda' />
                            <div className='buttonUpdate'>

            <div onClick={() => UpdateData()} className='buttonUpdate'>
              UPDATE

            </div>
            <div className="" id="openWindows">
            <div className="createPost" id="createpost">

              <div className="closewindowUpdate" id="CLOSE" onClick={() => closewindowUpdate()}>CLOSE WINDOW</div>

              <div className='popUs'>

                <h1>DO YOU WANT TO UPDATE YOUR PROFILE DATA?</h1>
                <div onClick={() => closewindowUpdate()} className='ButtonUpdateNo'>
                    No
                  </div>
                  <div className='ButtonUpdateYes'>
                    Yes
                  </div>

              </div>
            
          </div>
                        </div>
                    
                    </div>

                </div>
            </div>

        </div>
      </div>
      </div>

    )
};

export default Profile;