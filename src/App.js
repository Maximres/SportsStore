import React, {lazy, Suspense} from "react";
import './App.css';
import {Provider} from "react-redux";
import {SportStoreDataStore} from "./Data/DataStore";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {ShopConnector} from "./shop/ShopConnector";
import {AuthProviderImpl} from "./auth/AuthProviderImpl";

const Admin = lazy(() => import("./admin/Admin"));

function App() {
    return (
        <Provider store={SportStoreDataStore}>
            <AuthProviderImpl>
                <BrowserRouter>
                    <Switch>
                        <Route path="/shop" component={ShopConnector}/>
                        <Route path="/admin" render={routeProps =>
                            <Suspense fallback={<h3>Loading...</h3>}>
                                <Admin {...routeProps}/>
                            </Suspense>}/>
                        <Redirect to="/shop"/>
                    </Switch>
                </BrowserRouter>
            </AuthProviderImpl>
        </Provider>
    );
}

export default App;
