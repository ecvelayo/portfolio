import React from 'react';
import App from '../App';

class TodoList extends App {
  tasks = [];
  constructor(props) {
      super(props);
      this.state = {
        data: []
      }
      this.submitData = this.submitData.bind(this);
  }

  getTasks() {
    fetch('http://localhost:8000/tasks')
      .then((result) =>{
        return result.json()
      })
      .then((response) => {
        this.setState({
          data: response
        });
      })
  }
  
  submitData(event) {
    event.preventDefault();
    let taskData = {
      task: event.target.task.value,
    }
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(taskData)
    }

    fetch('http://localhost:8000/tasks', requestOptions)
    .then(response => response.json())
    .then(data => {
      this.getTasks();
      this.state.data.push(data);
      this.setState({
        data: this.state.data
      })
    })
  };

  componentDidMount() {
    this.getTasks();
  }

  render() {
      return (       
        <div>
          <form onSubmit={this.submitData}>
            <label>Enter Task</label>
            <input className='form-control' name="task" />
            <button type="submit">Submit</button>
          </form>
          <div className='currentTasks'>
            <ul>
              {
                this.state.data.map((element) => 
                  <li>{element.tasks} - Created At : {element.createdAt}</li>
                )
              }
            </ul>
          </div>
        </div>  
      )
  }
}

export default TodoList