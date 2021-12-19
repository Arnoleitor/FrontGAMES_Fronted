import './Login.scss';
import React from 'react';




const Login = () => {

    return (
        
        <div class='designLogin'>
            <div id="recuadroLogin">
            <p>LOGEATE</p>
            <input id="relleno1" type='email' name='email' title='email'  lenght='30' placeholder='Email' />
            <input id="relleno1" type='password' name='password' title='password'  lenght='30' placeholder='Password' />
            <input id="relleno1"type='password' name='password2' title='password2'  lenght='30' placeholder='Repite Password' /> 
            <div className="sendButton">Iniciar sesión</div>
            <div className="error">{}</div>
        </div>
        </div>
    )
};

export default Login;