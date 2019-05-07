import React from 'react';
import BurguerIngredient from './BurguerIngredient/BurguerIngredient';
import classes from './Burguer.css'

const burguer = (props) => {
    
    let selectedIngredients = Object.keys(props.ingredients).map((ingredient) => {
        return [...new Array(props.ingredients[ingredient])].map((_, idx) => {
            return <BurguerIngredient key={ingredient + idx} type={ingredient} />;
        });
    }).reduce((prev, next) => {
        return prev.concat(next);
    });

    return (
        <div className={classes.Burguer}>
            <BurguerIngredient type="bread-top" />
            {selectedIngredients.length ? selectedIngredients : <p>Please start selecting ingredients</p>}
            <BurguerIngredient type="bread-bottom" />
        </div>
    );
};

export default burguer;