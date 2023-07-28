import React, { Component } from 'react'; 
import {getTasks} from '../services/fakeTasks';
import { getSeverity } from '../services/fakeTaskSeverity';
import Complete from './common/complete';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import { paginate } from '../utils/paginate';
import _ from 'lodash';

class Tasks extends Component {
    state = {
        tasks: [],
        severity: [],
        currentPage: 1,
        pageSize: 4,
        sortColumn: {path: 'title', order: 'asc'}
    };

    componentDidMount(){
        const severity = [{_id: '', name: 'All Tasks'}, ...getSeverity()]

        this.setState({tasks: getTasks(), severity});
    };

    handleSeveritySelect = severity => {
        this.setState({selectedSeverity: severity, currentPage: 1});
        console.log(severity);
    };

    handleDelete = task =>{ 
        const tasks = this.state.tasks.filter(t => t._id !== task._id);
        this.setState({tasks});
    };

    handlePageChange = page => {
        this.setState({currentPage: page});
    };

    handleSort = path => {
        const sortColumn = {...this.state.sortColumn};
        if (sortColumn.path === path)
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        else{
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.setState({sortColumn});
    };

    render() { 
        const {selectedSeverity, pageSize, currentPage, tasks, sortColumn} = this.state;

        if(this.state.tasks.length === 0)
            return <p>You are all caught up on your tasks! Go play a video game!</p>;

        const filtered = selectedSeverity && selectedSeverity._id ? tasks.filter(t => t.severity._id === selectedSeverity._id) : tasks;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

        const taskItem = paginate(sorted, currentPage, pageSize);

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
                            <th onClick={() => this.handleSort('title')}>Title</th>
                            <th onClick={() => this.handleSort('task.name')}>Task</th>
                            <th onClick={() => this.handleSort('category')}>Category</th>
                            <th onClick={() => this.handleSort('severity.name')}>Severity</th>
                            <th></th>
                            <th>Completed</th>
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