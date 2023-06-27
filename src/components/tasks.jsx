import React, { Component } from 'react';
import {getTasks} from '../services/fakeTasks';

class Tasks extends Component {
    state = {
        tasks: getTasks()
    } 

    handleDelete = task =>{
        const tasks = this.state.tasks.filter(t => t._id !== task._id);
        this.setState({tasks});
    }

    render() { 
        if(this.state.tasks.length === 0)
            return <p>You are all caught up on your tasks! Go play a video game!</p>;

        return (
            <div>
                <p>Aw man! You have {this.state.tasks.length} more tasks to do before you can relax...</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>_id</th>
                            <th>Title</th>
                            <th>Task</th>
                            <th>Category</th>
                            <th>Severity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tasks.map(task => 
                        <tr key={task._id}>
                            <td>{task._id}</td>
                            <td>{task.title}</td>
                            <td>{task.task}</td>
                            <td>{task.category}</td>
                            <td>{task.severity}</td>
                            <td>
                                <button onClick={this.handleDelete(task)} className='btn btn-success'>DUNZO!</button>
                            </td>
                        </tr>
                        )}
                        
                    </tbody>
                </table>
            </div>
        
        )
    }
}
 
export default Tasks;