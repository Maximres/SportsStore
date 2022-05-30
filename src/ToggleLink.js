import React, {Component} from "react";
import {Route, Link} from "react-router-dom";

export class ToggleLink extends Component {

    render() {
        return <Route path={this.props.to} exact={this.props.exact} children={routeProp => {
            const baseClass = this.props.className || "m-2 btn btn-block";
            const activeClass = this.props.className || "btn-primary";
            const inActiveClass = this.props.inActiveClass || "btn-secondary";

            const combinedClasses = `${baseClass} ${routeProp.match ? activeClass : inActiveClass}`;

            return <Link to={this.props.to} className={combinedClasses}>
                {this.props.children}
            </Link>
        }
        }/>
    }
}