import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';
import logo from '../../Assets/Images/Logo.png';
import Buttons from '../../Components/Buttons/Buttons';
import { connect } from 'react-redux';
import profile from '../../Assets/Images/usuarioicono.png';

const Header = (props) => {
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
                <div id="admin">{props.credentials?.user.role=='admin' && <Buttons destiny="Admin" url="/admin"/>}</div>
                <div className="icono-user-logeado">
                <img className="img-profile" src={profile} alt="profile"  />
                Logged in user {props?.credentials?.user?.name}
                    
                </div>
            </div>


        </div>

    )

};

export default connect((state) => ({
    credentials: state.credentials
}))(Header);