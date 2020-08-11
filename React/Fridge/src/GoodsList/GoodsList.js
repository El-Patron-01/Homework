import React, { Component } from 'react';

import PropTypes from 'prop-types';

import GoodsListElement from '../GoodsListElement/GoodsListElement';

export default class GoodsList extends Component {
    state = {
        selectedRowIds:[],    
    }

    checkBox = (checkbox) => {
        let selected = []
        if (checkbox.checked) {
            selected = [ ...this.state.selectedRowIds, checkbox.id];
            this.setState({selectedRowIds: selected})
        } else {
            selected = [ ...this.state.selectedRowIds]
            selected = selected.filter(el => el !== checkbox.id)
            this.setState({selectedRowIds: selected})
        }
        return this.props.checkBox(selected)
    }

    onDelete = (id) => {
        this.props.onDelete(id)
    }

    editItem = (id) => {
        this.props.editItem(id)
    }

    // changeElement = (id, data={}) => {
    //     this.props.changeElement(id, data={})
    // }
    
    saveItem = ({id, ...goods}) => {
        this.props.changeElement(id, goods)
    }

    render() {
        const { goods } = this.props
        return (
            <div>
                {Array.isArray(goods) && goods.map( (good) => {
                return (
                    <GoodsListElement 
                        good={good} 
                        key={good.id}
                        onDelete={this.onDelete}
                        checkBox={this.checkBox}
                        editItem={this.editItem}
                        changeElement={this.changeElement}
                        saveItem={this.saveItem}
                    />
                )
                })}
            </div>
        )
    }
}

GoodsList.defaultProps = {
    goods: []
}

GoodsList.propTypes = {
    goods: PropTypes.array
}