import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';
import logo from '../../Assets/Images/Logo.png';


const Header = () => {
    
    
    
    return(
    
        <div className="designHeader">
            <div>
                <img id="logo" src={logo} alt="logo"/>
            </div>

            <div id="menu">
               
                    
                
            </div>
            
        </div>
    )

};

export default Header;