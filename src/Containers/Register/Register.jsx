import './Register.scss'
import React from 'react';




const Register = () => {

    return (
        
        <div class='designRegister'>
            <div id="recuadroRegistro"><p>REGISTRATE AQUÍ</p>
            <input id="relleno1"type='text' name='nombre' title='nombre'  lenght='30' placeholder='Nombre' />
            <input id="relleno1" type='text' name='surname' title='surname'  lenght='30' placeholder='Apellido' />
            <input id="relleno1"type='text' name='dni' title='dni'  lenght='10' placeholder='DNI' />
            <input id="relleno1" type='email' name='email' title='email'  lenght='30' placeholder='Email' />
            <input id="relleno1"type='text' name='address' title='address'  lenght='30' placeholder='Direccion' />
            <input id="relleno1"type='text' name='city' title='city'  lenght='30' placeholder='Ciudad' />
            <input id="relleno1"type='number' name='cp' title='cp'  lenght='5' placeholder='C.Postal' />
            <input id="relleno1" type='password' name='password' title='password'  lenght='30' placeholder='Password' />
            <input id="relleno1"type='password' name='password2' title='password2'  lenght='30' placeholder='Repite Password' />
            
        </div>
        </div>
    )

};

export default Register;