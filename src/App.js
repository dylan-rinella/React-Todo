import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todoData = [
  {
    name: 'Finish unit 3',
    id:1,
    completed: false
  },
  {
    name: 'Graduate Lambda',
    id: 2,
    completed: false
  },
  {
    name: 'Support Karen Financially',
    id:3, 
    completed: false
  },
  {
    name: 'Have a child',
    id: 4,
    completed: false
  }
];








class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoData: todoData
    };
  } 
  
  handleItemAdd = (itemName) => {
    const item = {
      name: itemName,
      completed: false
    }
    const newItem = [...this.state.todoData, item];
    this.setState({
      todoData: newItem
    })
  } 

  handleItemToggle = (itemId) => {
    this.setState({
      todoData: this.state.todoData.map(obj => {
        if(obj.id === itemId){
          return {
            ...obj,
            completed: !obj.completed
          }
        }
        return(obj);
      })
    })
  }

  handleItemCompleted = () => {
    const newTodoData = this.state.todoData.filter(obj => {
      return (!obj.completed)
    })
    this.setState({
      todoData: newTodoData
    })
  }



  render() {
    return (
      <div>
        <h1>Things to Do!</h1>
        <TodoList data={this.state.todoData} handleItemToggle={this.handleItemToggle} handleItemCompleted={this.handleItemCompleted}/>
        <TodoForm handleItemAdd={this.handleItemAdd} />
      </div>
    );
  }
};

export default App;
