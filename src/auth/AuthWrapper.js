import React, {Component} from "react";
import {AuthContext} from "./AuthContext";

//todo convert to functional comp
export const authWrapper = (WrappedComponent) =>
    class extends Component {
        render = () => {
            return <AuthContext.Consumer>
                {
                    context => <WrappedComponent {...this.props} {...context} />
                }
            </AuthContext.Consumer>
        }
    }