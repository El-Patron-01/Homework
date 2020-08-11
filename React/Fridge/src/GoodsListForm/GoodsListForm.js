import React, { Component } from 'react'
import './GoodsListForm.css'

export default class GoodsListForm extends Component {

    state = {
        title: '',
        weight: '',
        description: ''
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onAdd(this.state)
        this.setState({
            title: '',
            weight: '',
            description: ''
        })
    }

    onInputChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
    }

    render() {
        const { title, weight, description } = this.state
        return (
            <div>
                <form 
                    className="GoodsListForm" 
                    onSubmit={this.onFormSubmit}
                >
                    <input 
                        className="GoodsListFormInput" 
                        placeholder="Title"
                        name="title"
                        value={title}
                        onChange={this.onInputChange}
                    />
                    <input 
                        className="GoodsListFormInput" 
                        placeholder="Weight"
                        name="weight"
                        value={weight}
                        onChange={this.onInputChange}
                    />
                    <input 
                        className="GoodsListFormInput" 
                        placeholder="Description"
                        name="description"
                        value={description}
                        onChange={this.onInputChange}
                    />
                    <button className="GoodsListFormButton">Add</button>
                </form>
            </div>
        )
    }
}
