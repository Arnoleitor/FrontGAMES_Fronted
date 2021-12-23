import './Register.scss'
import React from 'react';




const Register = () => {

    return (

        <div class='designRegister'>
            <div id="recuadroRegistro">
                <p id="texto">SIGN UP FOR FrontedGAMES HERE</p>
                <input id="relleno1" type='text' name='name' title='name' lenght='30' placeholder='Name' />
                <input id="relleno1" type='text' name='surname' title='surname' lenght='30' placeholder='Surname (Optional)' />
                <input id="relleno1" type='text' name='Nickname' title='Nickname' lenght='30' placeholder='Nickname' />
                <input id="relleno1" type='email' name='email' title='email' lenght='30' placeholder='Email' />
                <input id="relleno1" type='text' name='city' title='city' lenght='30' placeholder='City (Optional)' />
                <input id="relleno1" type='password' name='password' title='password' lenght='30' placeholder='Password' />
                <input id="relleno1" type='password' name='password2' title='password2' lenght='30' placeholder='Repeat Password' />
                <input id="relleno1" type='text' name='ID PSN' title='ID PSN' lenght='30' placeholder='ID PSN (Optional)' />
                <input id="relleno1" type='text' name='ID Steam' title='ID Steam' lenght='30' placeholder='ID Steam (Optional)' />
                <input id="relleno1" type='text' name='ID xbox' title='ID xbox' lenght='30' placeholder='ID xbox (Optional)' />
                <input id="relleno1" type='text' name='ID Nintendo' title='ID Nintendo' lenght='30' placeholder='ID Nintendo (Optional)' />
                <input id="relleno1" type='text' name='ID Epic Games' title='ID Epic Games' lenght='30' placeholder='ID Epic Games (Optional)' />
                <input id="relleno1" type='text' name='ID Activision' title='ID Activision' lenght='30' placeholder='ID Activision (Optional)' />
                <input id="relleno1" type='text' name='ID Blizzard' title='ID Blizzard' lenght='30' placeholder='ID Blizzard (Optional)' />
                <input id="relleno1" type='text' name='ID RiotGames' title='ID RiotGames' lenght='30' placeholder='ID RiotGames (Optional)' />
                <input id="relleno1" type='text' name='ID Uplay' title='ID Uplay' lenght='30' placeholder='ID Uplay (Optional)' />
                <input id="relleno1" type='text' name='ID Battlenet' title='ID Battlenet' lenght='30' placeholder='ID Battlenet (Optional)' />
                <input id="relleno1" type='text' name='ID Bethesda' title='ID Bethesda' lenght='30' placeholder='ID Bethesda (Optional)' />
                <div className="botonSend" >Register</div>
                <div>{ }</div>

            </div>
        </div>
    )

};

export default Register;