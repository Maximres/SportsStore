import React, {Component} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {loadData} from "../Data/ActionCreators";
import {addToCart, clearCart, updateCart, removeFromCart} from "../Data/CartActionCreators"
import {DataTypes} from "../Data/Types"
import {Shop} from "./Shop";
import {CartDetails} from "./CartDetails";
import {DataGetter} from "../Data/DataGetter";

const mapStateToProps = (state) => ({...state});

const mapDispatchToProps = {
    loadData, addToCart, clearCart, updateCart, removeFromCart
}

export const ShopConnector = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
        render() {
            return <Switch>
                <Redirect from="/shop/products/:category" to="/shop/products/:category/1" exact={true}/>
                <Route path="/shop/products/:category/:page" render={(routeProp) =>
                    <DataGetter {...this.props} {...routeProp}>
                        <Shop {...this.props} {...routeProp} />
                    </DataGetter>
                }/>
                <Route path="/shop/cart" render={(routeProps) => <CartDetails {...this.props} {...routeProps}/>}/>
                <Redirect to="/shop/products/all/1"/>
            </Switch>
        }

        componentDidMount() {
            this.props.loadData(DataTypes.CATEGORIES)
        }
    }
)