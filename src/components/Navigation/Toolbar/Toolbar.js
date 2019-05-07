import React from 'react';
import classes from './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems';
// import Logo from '../../Logo/Logo';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <h2>Logo</h2>
        {/* <Logo /> */}
        <NavigationItems />
    </header>
)

export default toolbar;