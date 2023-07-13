import React, { Component } from 'react';
import {getTasks} from '../services/fakeTasks';
import Complete from './common/complete';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';

class Tasks extends Component {
    state = {
        tasks: getTasks(),
        currentPage: 1,
        pageSize: 4
    };

    handleDelete = task =>{ 
        const tasks = this.state.tasks.filter(t => t._id !== task._id);
        this.setState({tasks});
    };

    handlePageChange = page => {
        this.setState({currentPage: page});
    }

    render() { 
        const {pageSize, currentPage, tasks} = this.state;

        if(this.state.tasks.length === 0)
            return <p>You are all caught up on your tasks! Go play a video game!</p>;

        const taskItem = paginate(tasks, currentPage, pageSize);

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
                        {taskItem.map(task => 
                        <tr key={task._id}>
                            <td>{task._id}</td>
                            <td>{task.title}</td>
                            <td>{task.task}</td>
                            <td>{task.category}</td>
                            <td>{task.severity}</td>
                            <td>
                                <button onClick={() => this.handleDelete(task)} className='btn btn-danger'>Delete</button>
                            </td>
                            <Complete />
                        </tr>
                        )}
                        
                    </tbody>
                </table>
                <Pagination 
                    itemsCount={this.state.tasks.length} 
                    pageSize={this.state.pageSize} 
                    onPageChange={this.handlePageChange} 
                    currentPage={this.state.currentPage} />
            </div>
        
        )
    }
}
 
export default Tasks;