import React from 'react';
import classes from './Backdrop.css';

let backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.click}></div> : null
);

export default backdrop;