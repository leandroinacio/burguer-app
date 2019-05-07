import React from 'react';
import BuildControl from '../BuildControl/BuildControl';
import classes from './BurguerControls.css'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const burguerControls = (props) => (
    <div className={classes.BurguerControls}>
        <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
        {
            controls.map((item) => <BuildControl key={item.label} label={item.label} disabled={props.disabled[item.type]}
                ingredientAdded={() => props.ingredientAdded(item.type)} ingredientRemoved={() => props.ingredientRemoved(item.type)} />)
        }       
        <button onClick={props.order} className={classes.OrderButton} disabled={!props.purchasable}>ORDER NOW</button> 
    </div>
);

export default burguerControls;