import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

let modal = (props) => (
    <div>
        <Backdrop show={props.visible} click={props.toggle}></Backdrop>
        <div style={{
            zIndex: props.visible ? 500 : -1,
            transform: props.visible ? 'translateY(0)' : 'translateY(-10)',
            opacity: props.visible ? '1' : '0'
        }} className={classes.Modal}>{props.children}</div>
    
    </div>
);

export default modal;