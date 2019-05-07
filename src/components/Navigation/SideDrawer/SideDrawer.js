import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css'

const sideDrawer = (props) => {

    return (
        <div className={classes.SideDrawer}>
            <p>Logo</p>
            <NavigationItems />
        </div>
    )
};

export default sideDrawer;