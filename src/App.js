import React, { Component } from 'react';
import './App.css';
import AddToDo from './AddToDo';
import GetToDoList from './GetToDoList';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do</h1>
        </header>
        <AddToDo />
        <GetToDoList />
      </div>
    );
  }


}

