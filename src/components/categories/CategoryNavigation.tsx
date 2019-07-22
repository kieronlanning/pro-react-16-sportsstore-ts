import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CategoryNavigation extends Component<ICategoryNavigationProps> {
    render = () => {
        return <React.Fragment>
            <Link className="btn btn-secondary btn-block"
                to={this.props.baseUrl}>All</Link>
            {this.props.categories && this.props.categories.map(c => 
                <Link className="btn btn-secondary btn-block" key={c}
                    to={`${this.props.baseUrl}/${c.toLowerCase()}`}>{c}</Link>
            )}
        </React.Fragment>
    };
};

interface ICategoryNavigationProps {
    baseUrl: string,
    categories: string[]
}