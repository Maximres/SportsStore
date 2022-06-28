import React, {Component} from "react";
import ApolloClient, {InMemoryCache} from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import {GraphQlUrl} from "../Data/Urls";
import {OrdersConnector} from "./OrdersConnector";
import {ToggleLink} from "../ToggleLink";
import {Redirect, Route, Switch} from "react-router-dom";
import {ProductCreator} from "./ProductCreator";
import {ProductEditor} from "./ProductEditor";
import {ProductsConnector} from "./ProductsConnector";
import {AuthPrompt} from "../auth/AuthPrompt";
import {authWrapper} from "../auth/AuthWrapper";


const Admin = authWrapper(class extends Component {
    constructor(props) {
        super(props);

        const graphQlClient = new ApolloClient({
            uri: GraphQlUrl,
            cache: new InMemoryCache(),
            request: operation => operation.setContext({
                headers: {
                    Authorization: `Bearer<${this.props.webToken}>`
                }
            })
        });

        this.client = graphQlClient;
    }

    render() {
        return  <ApolloProvider client={this.client}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col bg-info text-white">
                        <div className="navbar-brand">Sports store</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 p-2">
                        <ToggleLink to="/admin/orders">Orders</ToggleLink>
                        <ToggleLink to="/admin/products">Products</ToggleLink>

                    </div>
                    {
                        this.props.isAuthenticated &&
                        <buttton onClick={this.props.signout} className="btn btn-block btn-secondary m-2 fixed-bottom col-3">
                            Log Out
                        </buttton>
                    }
                    <div className="col-9 p-2">
                        <Switch>
                            {!this.props.isAuthenticated && <Route component={AuthPrompt}/>}
                            <Route path="/admin/orders" component={ OrdersConnector } />
                            <Route path="/admin/products/create"
                                   component={ ProductCreator} />
                            <Route path="/admin/products/:id"
                                   component={ ProductEditor} />
                            <Route path="/admin/products"
                                   component={ ProductsConnector } />
                            <Redirect to="/admin/orders" />
                        </Switch>
                    </div>
                </div>
            </div>
        </ApolloProvider>
    }
})

export default Admin;