import React, { Component } from 'react';
import './App.scss';
import Head from './component/Head'
import Content from './component/Content'

class App extends Component {
  state={
    count: 0
  }
  handleClick=()=>{
    this.setState({
        count: this.state.count +1,
    })
    console.log('click content')
  }
  render() {
    return (
      <main className="app">
        <Head count = {this.state.count}/>
        <Content onIncrease={this.handleClick}/>
      </main>
    );
  }
}

export default App;
