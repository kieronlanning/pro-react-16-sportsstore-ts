import React, { Component } from "react";
import ToggleLink from "../common/ToggleLink";

export class CategoryNavigation extends Component<ICategoryNavigationProps> {
    render = () => {
        return <React.Fragment>
            <ToggleLink to={this.props.baseUrl} exact={true}>All</ToggleLink>
            {this.props.categories && this.props.categories.map(c => 
                <ToggleLink key={c} to={`${this.props.baseUrl}/${c.toLowerCase()}`}>{c}</ToggleLink>
            )}
        </React.Fragment>
    };
};

interface ICategoryNavigationProps {
    baseUrl: string,
    categories: string[]
}
