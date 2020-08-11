import './App.css';

import React, { Component } from 'react';

import GoodsList from '../GoodsList/GoodsList';
import GoodsListForm from '../GoodsListForm/GoodsListForm';
import { goods } from '../Mocks/GoodsMock';
import {
  addNewItem,
  getTotal,
  removeElementById,
  selectedRows,
} from '../Utils/goodsUtils';

export default class App extends Component {
  state = {
    goods,
    total: getTotal(goods),
    subtotal: 0
  }

  recalculateTotal = () => {
    this.setState((state) => ({
      total: getTotal(state.goods)
    }))
  }

  onAdd = (newElement) => {
    this.setState(({ goods }) => {
      const newArray = addNewItem(newElement, goods)
      return {
        goods: newArray,
        total: getTotal(newArray),
    }})
  }

  onDelete = (id) => {
    const newArray = removeElementById(id, this.state.goods)
    this.setState({
      goods: newArray,
      total: getTotal(newArray),
    })
  }

  editItem = (id) => {
    const newArr = this.state.goods.map(el => {
      if (el.id === id) {
        el.isEdit = true
      }
      return el
    })
    this.setState({
      goods: newArr
    })
  }

  // saveItem = (id, goods) => {
  //   const data = {}
  //   this.changeElement(id, data) 
  // }

  changeElement = (id, data = {}) => {
    this.setState(({goods}) => {
        const index = this.state.goods.findIndex((item) => item.id === id)
        const editedGoods = [...goods]
        editedGoods[index] = {id, ...data}
      return {
        goods: editedGoods,
        total: getTotal(editedGoods),
        subTotal: getTotal(editedGoods)
      }
    })
  }


  checkBox = (ids) => {
    const newArray = selectedRows(ids, this.state.goods)
    console.log(newArray)
    this.setState({
      goods: this.state.goods,
      total: getTotal(this.state.goods),
      subtotal: getTotal(newArray),
    })
  }

  render() {
    const { total, goods, subtotal } = this.state
    return (
      <div className="Container">
        <div className="Title">Fridge</div>
        <GoodsList 
          goods={goods} 
          onDelete={this.onDelete} 
          checkBox={this.checkBox} 
          editItem={this.editItem}
          changeElement={this.changeElement}
          />
        <div className="Total">
          <div>Total:</div>
          <div>{total}</div>
          <div/>
        </div>
        <div className="Total">
          <div>Subtotal:</div>
          <div>{subtotal}</div>
          <div/>
        </div>
        <GoodsListForm onAdd={this.onAdd}/>
      </div>
    )
  }
}
