import React, { Component } from 'react';
import axios from 'axios'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import {
  getTodoList,
  changeInputAction,
  addItemAction,
  deleteItemAction,
  getListAction,
  getMyListAction
} from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    store.subscribe(this.storeChange) //订阅Redux的状态
  }

  componentDidMount() {
    // const action = getTodoList()
    // store.dispatch(action)

    const action = getMyListAction()
    store.dispatch(action)
    console.log(action)
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        deleteItem={this.deleteItem}
      />
    );
  }

  storeChange() {
    console.log('store changed')
    this.setState(store.getState())
  }
  changeInputValue(e) {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }
  clickBtn() {
    const action = addItemAction()
    store.dispatch(action)
  }
  deleteItem(index) {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
}
export default TodoList;