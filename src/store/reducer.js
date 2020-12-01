import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './constant'
const defaultState = {
  inputValue: 'Write',
  list: [
    '早8点开晨会，分配今天的开发工作',
    '早9点和项目经理作开发需求讨论会',
    '晚5:30对今日代码进行review'
  ]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
    newState.inputValue = action.value
    return newState
  }
  //state值只能传递，不能使用
  if (action.type === ADD_ITEM) { //根据type值，编写业务逻辑
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)  //push新的内容到列表中去
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_ITEM) { //根据type值，编写业务逻辑
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)  //push新的内容到列表中去
    return newState
  }

  if (action.type === GET_LIST) { //根据type值，编写业务逻辑
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data.data.list //复制性的List数组进去
    return newState
  }
  return state
}