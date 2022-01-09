import './Login.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGIN } from '../../Redux/types';



const Login = (props) => {

    const history = useNavigate();

    //Hooks
    const [msgError, setmsgError] = useState("");
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    //Handler o manejador
    const manejadorInputs = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const logeame = async () => {

        let body = {
            email: credentials.email,
            password: credentials.password,
        };
        console.log(body)
        try {

          
            let res = await axios.post("https://acefrontedgames.herokuapp.com/api/loginUser", body);
            


            setmsgError(`inicio de sesión correcto ${res.data.user.name}....`);
            console.log(res)
           
            

            let datos = res.data;
            
            props.dispatch({type:LOGIN,payload:datos});
            
            
            setTimeout(() => {
                history("/");
            }, 1500);
        } catch (error) {
            setmsgError("Usuario o Password incorrecto");

        }

    }

    return (

        <div className='designLogin'>
            <div id="recuadroLogin">
                <p id="texto">LOG IN TO fontedGAMES HERE</p>
                <input id="relleno1" type='email' name='email' title='email' onChange={manejadorInputs} lenght='30' placeholder='Email' />
                <input id="relleno1" type='password' name='password' title='password' onChange={manejadorInputs} lenght='30' placeholder='Password' />
                <div className="sendButton" onClick={() => logeame()} >Log in</div>
                <div className="error">{msgError}</div>

            </div>
        </div>
    )
};

export default connect()(Login);;