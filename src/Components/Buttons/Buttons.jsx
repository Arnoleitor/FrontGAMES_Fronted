import React from 'react';

import './Buttons.scss';

import { useNavigate } from 'react-router-dom';

const Buttons = (props) => {

    const history = useNavigate();

    const go_to = () => {
        history(props.url);
    }

    console.log("props: ", props);
    return (
        <div className="designButtons" onClick={() => go_to()}>{props.destiny}</div>

    )
};

export default Buttons;