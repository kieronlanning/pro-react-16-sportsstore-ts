import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

export default class ToggleLink extends Component<any> {
    render = () => {
        return <Route path={this.props.to} exact={this.props.exact} children={routeProps => {
            const baseClasses = this.props.className || "m-2 btn btn-block";
            const activeClass = this.props.activeClass || "btn-primary";
            const inactiveClass = this.props.inactiveClass || "btn-secondary";
            const combinationClasses = `${baseClasses} ${routeProps.match ? activeClass : inactiveClass}`;

            return <Link to={this.props.to} className={combinationClasses}>{this.props.children}</Link>
        }} />
    };
};
