import React, { Component } from 'react'; 
import {getTasks} from '../services/fakeTasks';
import { getSeverity } from '../services/fakeTaskSeverity';
import Complete from './common/complete';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import { paginate } from '../utils/paginate';

class Tasks extends Component {
    state = {
        tasks: [],
        severity: [],
        currentPage: 1,
        pageSize: 4
    };

    componentDidMount(){
        const severity = [{name: 'All Tasks'}, ...getSeverity()]

        this.setState({tasks: getTasks(), severity});
    };

    handleSeveritySelect = severity => {
        this.setState({selectedSeverity: severity, currentPage: 1})
        console.log(severity);
    };

    handleDelete = task =>{ 
        const tasks = this.state.tasks.filter(t => t._id !== task._id);
        this.setState({tasks});
    };

    handlePageChange = page => {
        this.setState({currentPage: page});
    };

    render() { 
        const {selectedSeverity, pageSize, currentPage, tasks} = this.state;

        if(this.state.tasks.length === 0)
            return <p>You are all caught up on your tasks! Go play a video game!</p>;

        const filtered = selectedSeverity && selectedSeverity._id ? tasks.filter(t => t.severity._id === selectedSeverity._id) : tasks;

        const taskItem = paginate(filtered, currentPage, pageSize);

        return (
            <div className='row'>
                <div className="col-2">
                    <ListGroup 
                        items={this.state.severity}
                        selectedItem={this.state.selectedSeverity}
                        onItemSelect={this.handleSeveritySelect} />
                </div>
                <div className="col">
                    <p>Aw man! You have {filtered.length} more tasks to do before you can relax...</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Task</th>
                            <th>Category</th>
                            <th>Severity</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {taskItem.map(task => 
                        <tr key={task._id}>
                            <td>{task.title}</td>
                            <td>{task.task}</td>
                            <td>{task.category}</td>
                            <td>{task.severity.name}</td>
                            <td>
                                <button onClick={() => this.handleDelete(task)} className='btn btn-danger'>Delete</button>
                            </td>
                            <td><Complete /></td>
                        </tr>
                        )}
                        
                    </tbody>
                </table>
                <Pagination 
                    itemsCount={filtered.length} 
                    pageSize={this.state.pageSize} 
                    onPageChange={this.handlePageChange} 
                    currentPage={this.state.currentPage} />
                </div>
                
            </div>
        
        )
    }
}
 
export default Tasks;