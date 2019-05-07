import React from 'react';
import classes from './OrderSummary.css';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(key => {
        return (<li key={key}>
            <span style={{textTransform: 'capitalize'}}>{key}:</span> {props.ingredients[key]}
        </li>);
    });
    
    return (<div>
        <h3>Your Order</h3>
        <p>A delicious burguer with the following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <strong>Total: {props.price.toFixed(2)}</strong>
        <p>Continue to Checkout?</p>
        <button onClick={props.click} className={[classes.Button, classes.Danger].join(' ')}>CANCEL</button>
        <button onClick={props.click} className={[classes.Button, classes.Success].join(' ')}>CONTINUE</button>
    </div>);
};

export default orderSummary;