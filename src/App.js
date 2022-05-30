import './App.css';
import {Provider} from "react-redux";
import {SportStoreDataStore} from "./Data/DataStore";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {ShopConnector} from "./shop/ShopConnector";

function App() {
    return (
        <Provider store={SportStoreDataStore}>
            <BrowserRouter>
                <Switch>
                    <Route path="/shop" component={ShopConnector}/>
                    <Redirect to="/shop"/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
