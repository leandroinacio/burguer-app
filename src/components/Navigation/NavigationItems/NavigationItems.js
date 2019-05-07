import React from 'react';
import classes from './NavigationItems.css'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <li className={classes.NavigationItem}>
            <a href="/" className={classes.active}>Burguer Builder</a>
            <a href="/">Checkout</a>
        </li>
    </ul>
)

export default navigationItems;
