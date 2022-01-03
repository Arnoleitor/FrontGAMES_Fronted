import './Profile.scss'
import { UPDATE_USER, } from '../../Redux/types';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


const Profile = (props) => {

  const [msgError, setmsgError] = useState("");
  const [userData, setUserData] = useState(props.credentials.user);

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

  const manejaInputs = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }
  const update = async () => {
    props.dispatch({ type: UPDATE_USER, payload: userData });


    let token = {
      headers: { Authorization: `Bearer ${props.credentials.token}` }
    };

    try {

      let res = await axios.put(`https://acefrontedgames.herokuapp.com/api/User/`, token);
      setmsgError(`Updated profile data ${res.data.user.body}....`);



    } catch (error) {
      setmsgError("Failed to update data");

    }

  }


  return (

    <div className='designProfile'>
      <div className="Contenedor">
        <div className="caja1">
          <div className='infoZone'>

          </div>
          <div className='Zonainfo'>
            <div class="p-1 mb-1 bg-secondary text-white">ID PSN<p>{props.credentials.user.idpsn}</p></div>
            <div class="p-1 mb-1 bg-secondary text-white">ID Steam<p>{props.credentials.user.idsteam}</p></div>
            <div class="p-1 mb-1 bg-secondary text-white">ID xbox<p>{props.credentials.user.idxbox}</p></div>
            <div class="p-1 mb-1 bg-secondary text-white">ID Nintendo<p>{props.credentials.user.idnintendo}</p></div>
            <div class="p-1 mb-1 bg-secondary text-white">ID Epic Games<p>{props.credentials.user.idepicgames}</p></div>
            <div class="p-1 mb-1 bg-secondary text-white">ID Activision<p>{props.credentials.user.idactivision}</p></div>
            <div class="p-1 mb-1 bg-secondary text-white">ID Blizzard<p>{props.credentials.user.idblizzard}</p></div>
            <div class="p-1 mb-1 bg-secondary text-white">ID RiotGames<p>{props.credentials.user.idriotgames}</p></div>
            <div class="p-1 mb-1 bg-secondary text-white">ID Uplay<p>{props.credentials.user.iduplay}</p></div>
            <div class="p-1 mb-1 bg-secondary text-white">ID Battlenet<p>{props.credentials.user.idbattlenet}</p></div>
            <div class="p-1 mb-1 bg-secondary text-white">ID Bethesda<p>{props.credentials.user.idbethesda}</p></div>
            <div className='info'>

            </div>
          </div>
        </div>

        <div className="caja2">

          <div className='UpdateProfile'> <p>YOUR DATA PROFILE</p>
            <div className='Updater'>

              <input className='relleno2' type='text' placeholder="Enter new Name" name="name" onChange={manejaInputs} />
              <input className='relleno2' type='number' placeholder="Enter new Age" name="age" onChange={manejaInputs} />
              <input className='relleno2' type='text' placeholder="Enter new Surname" name="surname" onChange={manejaInputs} />
              <input className='relleno2' type='text' placeholder="Enter new Nickname" name="nickname" onChange={manejaInputs} />
              <input className='relleno2' type='text' placeholder="Enter new Favorite Game" name="favoritegame" onChange={manejaInputs} />
              <input className='relleno2' type='text' placeholder="Enter new city" name="city" onChange={manejaInputs} />
              <input className='relleno2' type='email' placeholder="Enter new email" name="email" onChange={manejaInputs} />
              <input className='relleno2' type='password' placeholder="Enter new password" name="password" onChange={manejaInputs} />
              <input className='relleno2' type='text' placeholder="Enter new ID of PSN" name="idpsn" onChange={manejaInputs} />
              <input className='relleno2' type='text' placeholder="Enter new ID of Steam" name="idsteam" onChange={manejaInputs} />
              <input className='relleno2' type='text' placeholder="Enter new ID of XBOX" name="idxbox" onChange={manejaInputs} />
              <input className='relleno2' type='text' placeholder="Enter new ID of Riot Games" name="idriotgames" onChange={manejaInputs} />
              <input className='relleno2' type='text' placeholder="Enter new ID of Epic Games" name="idepicgames" onChange={manejaInputs} />
              <input className='relleno2' type='text' placeholder="Enter new ID of Activision" name="idactivision" onChange={manejaInputs} />
              <input className='relleno2' type='text' placeholder="Enter new ID of Blizzard" name="idblizzard" onChange={manejaInputs} />
              <input className='relleno2' type='text' placeholder="Enter new ID of Nintendo" name="idnintendo" onChange={manejaInputs} />
              <input className='relleno2' type='text' placeholder="Enter new ID of Uplay" name="iduplay" onChange={manejaInputs} />
              <input className='relleno2' type='text' placeholder="Enter new ID of BattleNet" name="idbattlenet" onChange={manejaInputs} />
              <input className='relleno2' type='text' placeholder="Enter new ID of Bethesda" name="idbethesda" onChange={manejaInputs} />

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
                      <div className='ButtonUpdateYes' onClick={() => update()}>
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

export default connect((state) => ({
  credentials: state.credentials
}))(Profile);