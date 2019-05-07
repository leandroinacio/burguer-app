import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <label>{props.label}</label>
        <button onClick={props.ingredientRemoved} className={classes.Less} disabled={props.disabled}>Less</button>
        <button onClick={props.ingredientAdded} className={classes.More}>More</button>
    </div>
);

export default buildControl;