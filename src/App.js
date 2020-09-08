import React, { Component } from 'react'
import  './css/app.css'
import {add,sub,even} from './components/action'

export default class App extends Component {
  myRef = React.createRef()

  add=()=>{
     let value =   this.myRef.current.value
     this.props.store.dispatch(add(value))
    //无action版本如下
    //  this.props.store.dispatch({
    //    type:"add",
    //    data:value
    //  })
  }
  sub=()=>{
    let value = this.myRef.current.value
    this.props.store.dispatch(sub(value))
  }
  evenNumber=()=>{
    let value = this.myRef.current.value
    this.props.store.dispatch(even(value))
  }

  render () {
   let value = this.props.store.getState()
    return (
      <div className="App">
        <div className="wrap">
          <h1>当前结果为{value}</h1>
          <select  ref = {this.myRef} name="number" id="number" defaultValue="1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <button onClick={this.add}>加法</button>
          <button onClick={this.sub}>减法</button>
          <button onClick={this.evenNumber}>当为奇数加法</button>
        </div>
      </div>
    )
  }
}