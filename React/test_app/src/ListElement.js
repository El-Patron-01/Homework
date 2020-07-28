import React, { Component } from 'react';

export default class ListElement extends Component {
    render() {
        return (
            <div>
                <li className="listElement">{this.props.model}, {this.props.color}</li>
            </div>
        )
    }
}
