import React, { Component } from 'react';

class Li extends Component {
    handleClick = () => {
        this.props.onClick(this.props.index);
    }

    render() {
        return <li
            className={
                this.props.isActive ? 'navActive btn navbar-btn' : 'btn navbar-btn'
            }
            onClick={this.handleClick}
        >
            <span>{this.props.name}</span>
        </li>
    }
}

export default Li;
