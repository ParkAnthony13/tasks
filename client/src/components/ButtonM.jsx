import React, {useState} from 'react';
import {navigate} from '@reach/router';
import '../css/ButtonM.css';


const ButtonM = props => {
    const {text, navTo} = props;

    const clickHandler = () => {
        navigate(`${navTo}`);
    }

    return(
        <div className='flexcenter'>
            <button onClick={clickHandler} className='ButtonM dflex aligncenter justcenter'>{text}</button>
        </div>
    )
}

export default ButtonM;