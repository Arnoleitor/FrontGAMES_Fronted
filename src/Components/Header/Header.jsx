import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';
import logo from '../../Assets/Images/Logo.png';
// import { connect } from 'react-redux';
import Buttons from '../../Components/Buttons/Buttons';


const Header = () => {
    const history = useNavigate();
    const go_to = () => {
        history("/");

    }
    return (

        <div className="designHeader">
            <div>
                <img id="Logo" src={logo} alt="Logo" onClick={() => go_to()} />
            </div>

            <div id="menu">

                <Buttons destiny="Home" url="/" />
                <Buttons destiny="Profile" url="/Profile" />
                <Buttons destiny="Register" url="/Register" />
                <Buttons destiny="Login" url="/login" />
                <Buttons destiny="Post" url="/Post" />
                <Buttons destiny="Admin" url="/Admin" />



            </div>


        </div>

    )

};

export default Header;