import App from '../App';

export default class TodoListEntry extends App {
    constructor(props) {
        super(props);
        this.state = {
          entry: this.props.entry,
          show: false
        }
        this.onEntryClick = this.onEntryClick.bind(this);
        this.submitUpdatedData = this.submitUpdatedData.bind(this);
    }

    onEntryClick(entry) {
        if (window.confirm('Delete this entry? '+JSON.stringify(entry))){
          const requestOptions = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(entry)
          }
      
          fetch('http://localhost:8000/tasks', requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            const index = this.state.data.indexOf(entry);
            this.state.data.splice(index,1);
            this.setState({
              entry: this.state.data
            })
          })
        }
        
      }
    
      showUpdateForm(entry) {
       this.setState({
        show: !this.state.show
       });
      }

      submitUpdatedData(event, entry) {
        event.preventDefault();
        let taskData = {
            task: event.target.task.value,
            id: entry.id
        }
        const requestOptions = {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(taskData)
        }
        fetch('http://localhost:8000/tasks', requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    entry: data,
                    show: false
                })
            })
      }

    render() {
        return (
            <li>{this.state.entry.tasks} - Created At : {this.state.entry.created_at} 
                    <button onClick={() => {this.showUpdateForm(this.state.entry)}} className='btn btn-warning'>Edit</button>
                    <button onClick={() => {this.onEntryClick(this.state.entry)}} className='btn btn-danger'>Delete</button>
                    {
                      (this.state.show) ?                       
                      <form onSubmit={event => this.submitUpdatedData(event, this.state.entry)}>
                        <label>Enter Task</label>
                        <input className='input form-control' name="task" defaultValue={this.state.entry.tasks}/>
                        <button className='btn btn-primary' type="submit">Submit</button>
                      </form> : <div></div>
                    }
            </li>
        )
    }
}