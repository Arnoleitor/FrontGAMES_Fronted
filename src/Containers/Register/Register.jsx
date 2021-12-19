import './Register.scss'
import React from 'react';




const Register = () => {

    return (
        
        <div class='designRegister'>
            <div id="recuadroRegistro">
            <p id="texto">REGISTRATE EN FRONTEDGAMES AQUÍ</p>
            <input id="relleno1"type='text' name='name' title='name'  lenght='30' placeholder='Name' />
            <input id="relleno1" type='text' name='surname' title='surname'  lenght='30' placeholder='Surname' />
            <input id="relleno1"type='text' name='dni' title='dni'  lenght='10' placeholder='DNI' />
            <input id="relleno1" type='email' name='email' title='email'  lenght='30' placeholder='Email' />
            <input id="relleno1"type='text' name='address' title='address'  lenght='30' placeholder='Address' />
            <input id="relleno1"type='text' name='city' title='city'  lenght='30' placeholder='City' />
            <input id="relleno1"type='number' name='cp' title='cp'  lenght='5' placeholder='Postal Code' />
            <input id="relleno1" type='password' name='password' title='password'  lenght='30' placeholder='Password' />
            <input id="relleno1"type='password' name='password2' title='password2'  lenght='30' placeholder='Repeat Password' />
            <div className="botonSend" >Register</div>
            <div>{}</div>
            
        </div>
        </div>
    )

};

export default Register;