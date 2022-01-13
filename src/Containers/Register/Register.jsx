import './Register.scss'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';



const Register = () => {


    let history = useNavigate();


    const [msgError, setmsgError] = useState("");
    const [user, setUser] = useState({
        name: '',
        age: '',
        surname: '',
        nickname: '',
        favoritegame: '',
        city: '',
        email: '',
        password: '',
        idpsn: '',
        idsteam: '',
        idxbox: '',
        idnintendo: '',
        idepicgames: '',
        idactivision: '',
        idblizzard: '',
        idriotgames: '',
        iduplay: '',
        idbattlenet: '',
        idbethesda: '',
        role: 'user',
    });

    const userHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    }

    useEffect(() => {

    }, []);

    useEffect(() => {
    });

    const sendDataRegister = async () => {
     

        if (! /[a-z]/gi.test(user.name) ) {
           setmsgError("Wrong name");
           return;
        };
        
        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(user.email)) {
           setmsgError("Wrong email");
           return;
        };

        if (user.password.length <8) {
            setmsgError("The password must be at least 8 characters long");
            return;
        };
        


         let body = {
            name: user.name,
            age: user.age,
            surname: user.surname,
            nickname: user.nickname,
            favoritegame: user.favoritegame,
            city: user.city,
            email: user.email,
            password: user.password,
            idpsn: user.idpsn,
            idsteam: user.idsteam,
            idxbox: user.idxbox,
            idnintendo: user.idnintendo,
            idepicgames: user.idepicgames,
            idactivision: user.idactivision,
            idblizzard: user.idblizzard,
            idriotgames: user.idriotgames,
            iduplay: user.iduplay,
            idbattlenet: user.idbattlenet,
            idbethesda: user.idbethesda,
            role: user.role
        }


        
        try {

            let res = await axios.post("https://acefrontedgames.herokuapp.com/api/newUser", body);
            setmsgError("User registered successfully, I redirect you to the Login page");
         
            

        } catch (error) {
            
            setmsgError("The user could not be registered, this email or nickname already exists !!");
            return;
        }
        setTimeout(()=>{
            history("/Login");
        },2000);
    };




    return (

        <div className='designRegister'>
            <div id="recuadroRegistro">
                <p id="texto">SIGN UP FOR FrontedGAMES HERE</p>
                <input id="relleno1" type='text' name='name' title='name' onChange={userHandler} lenght='30' placeholder='Name (Required)' />
                <input id="relleno1" type='text' name='surname' title='surname'  onChange={userHandler} lenght='30' placeholder='Surname (Required)' />
                <input id="relleno1" type='text' name='favoritegame' title='favoritegame'  onChange={userHandler} lenght='30' placeholder='Favorite game (Required)' />
                <input id="relleno1" type='text' name='nickname' title='nickname'  onChange={userHandler} lenght='30' placeholder='Nickname (Required)' />
                <input id="relleno1" type='number' name='age' title='age'  onChange={userHandler} lenght='30' placeholder='Age (Required)'  />
                <input id="relleno1" type='email' name='email' title='email'  onChange={userHandler} lenght='30' placeholder='Email (Required)' />
                <input id="relleno1" type='text' name='city' title='city'  onChange={userHandler} lenght='30' placeholder='City (Required)' />
                <input id="relleno1" type='password' name='password' title='password'  onChange={userHandler} lenght='30' placeholder='Password (Required 8 characters minimum)' />
                <input id="relleno1" type='text' name='idpsn' title='idpsn'  onChange={userHandler} lenght='30' placeholder='ID PSN (Required)' />
                <input id="relleno1" type='text' name='idsteam' title='idsteam' onChange={userHandler} lenght='30' placeholder='ID Steam (Required)' />
                <input id="relleno1" type='text' name='idxbox' title='idxbox'  onChange={userHandler} lenght='30' placeholder='ID xbox (Required)' />
                <input id="relleno1" type='text' name='idnintendo' title='idnintendo'  onChange={userHandler} lenght='30' placeholder='ID Nintendo (Required)' />
                <input id="relleno1" type='text' name='idepicgames' title='idepicgames'  onChange={userHandler} lenght='30' placeholder='ID Epic Games (Required)' />
                <input id="relleno1" type='text' name='idactivision' title='idactivision'  onChange={userHandler} lenght='30' placeholder='ID Activision (Required)' />
                <input id="relleno1" type='text' name='idblizzard' title='idblizzard'  onChange={userHandler} lenght='30' placeholder='ID Blizzard (Required)' />
                <input id="relleno1" type='text' name='idriotgames' title='idriotgames'  onChange={userHandler} lenght='30' placeholder='ID RiotGames (Required)' />
                <input id="relleno1" type='text' name='iduplay' title='iduplay'  onChange={userHandler} lenght='30' placeholder='ID Uplay (Required)' />
                <input id="relleno1" type='text' name='idbattlenet' title='idbattlenet' onChange={userHandler} lenght='30' placeholder='ID Battlenet (Required)' />
                <input id="relleno1" type='text' name='idbethesda' title='idbethesda'  onChange={userHandler} lenght='30' placeholder='ID Bethesda (Required)' />
                <div className="botonSend" onClick={() => sendDataRegister()}>Register</div>
                <div>{msgError}</div>

            </div>
        </div>
    )

};

export default Register;