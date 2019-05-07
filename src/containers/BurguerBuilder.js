import React, { Component } from 'react';
import Burguer from '../components/Burguer/Burguer';
import BurguerControls from '../components/Burguer/BurguerControls/BurguerControls';
import Modal from '../components/UI/Modal/Modal';
import OrderSummary from '../components/Burguer/OrderSummary/OrderSummary';

const PRICE_INGREDIENTS = {
    'salad': 0.5,
    'cheese': 0.5,
    'bacon': 0.5,
    'meat': 1
};

class BurguerBuilder extends Component {
    state = {
        'ingredients': {
            'salad': 0,
            'cheese': 0,
            'bacon': 0,
            'meat': 0
        },
        'totalPrice': 4,
        'purchasable': false,
        'purchasing': false
    };

    purchaseHandler = () => {
        this.setState({ purchasing: !this.state.purchasing});
    };

    updatePurchaseState(newIngredients) {
        const ingredients = {
            ...newIngredients
        };
        const sum = Object.keys(ingredients).map((key) => {
            return ingredients[key];
        }).reduce((sum, el) => {
            return sum + el;
        });
        this.setState({purchasable: sum > 0});
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const newIngredients = {
            ...this.state.ingredients
        };
        const totalPrice = PRICE_INGREDIENTS[type] + this.state.totalPrice;
        newIngredients[type] = newCount;
        this.setState({ingredients: newIngredients, totalPrice});
        this.updatePurchaseState(newIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount < 1) { return; }
        const newCount = oldCount - 1;
        const newIngredients = {
            ...this.state.ingredients
        };
        const totalPrice = PRICE_INGREDIENTS[type] + this.state.totalPrice;
        newIngredients[type] = newCount;
        this.setState({ingredients: newIngredients, totalPrice});
        this.updatePurchaseState(newIngredients);
    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0; 
        }

        return (
            <div>
                <Modal visible={this.state.purchasing} toggle={this.purchaseHandler}>
                    <OrderSummary click={this.purchaseHandler} price={this.state.totalPrice} ingredients={this.state.ingredients}></OrderSummary>
                </Modal>
                <Burguer ingredients={this.state.ingredients} />
                <BurguerControls price={this.state.totalPrice} 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}  purchasable={this.state.purchasable}
                    order={this.purchaseHandler} />
            </div>
        );
    }
}

export default BurguerBuilder;