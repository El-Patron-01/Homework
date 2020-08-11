import './GoodsListElement.css';

import React, { Component } from 'react';

export default class GoodsListElement extends Component {
    
    state = {
        title: '',
        weight: '',
        description: '',
        isEdit: false
    }

    onDelete = (e) => {
        this.props.onDelete(this.props.good.id)
    }

    editItem = (e) => {
        this.props.editItem(this.props.good.id)
        this.setState({
            title: this.props.good.title,
            weight: this.props.good.weight,
            description: this.props.good.description
        })
    }

    saveItem = (event, data = {}) => {
        this.setState({
            isEdit: !this.state.isEdit
        })
        this.props.saveItem(data)
    }

    onInputChange = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        })
        console.log(this.state)
    }

    checkBox = (e) => {
        this.props.checkBox({ id: this.props.good.id, checked: e.target.checked } )
    }

    changeElement = (id, data={}) => {

    }

    render() {
        const { id, title, weight, description, isEdit } = this.props.good
        return (
            <div className="GoodsListElement">
                <input id={id} type="checkbox" onClick={this.checkBox} />
                {isEdit ? 
                    <input 
                    name="title"
                    value={title}
                    onChange={this.onInputChange} 
                    /> : 
                    <div className="GoodsListElement_Column">{title}</div>}
                {isEdit ? 
                    <input 
                    name="weight"
                    value={weight}
                    onChange={this.onInputChange} 
                    /> : 
                    <div className="GoodsListElement_Column">{weight}</div>}
                {isEdit ? 
                    <input 
                    name="description"
                    value={description}
                    onChange={this.onInputChange} 
                    /> : 
                    <div className="GoodsListElement_Column">{description}</div>}
                <div className="GoodsListElement_Column GoodsListElement_Button">
                {!isEdit ? 
                    <button onClick={this.editItem}>Edit</button> : 
                    <button onClick={(event) => this.saveItem(event, {id, ...this.state })}>Save</button>}
                </div>
                <div className="GoodsListElement_Column GoodsListElement_Button">
                    <button onClick={this.onDelete}>Delete</button>
                </div>
            </div>
        )
    }
}
