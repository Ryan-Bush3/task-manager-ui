import React, { Component } from 'react';
import Complete from './common/complete';
import { paginate } from '../utils/paginate';

const TaskTable = (props) => {
    const {selectedSeverity, pageSize, currentPage} = props;
    const {tasks, onDelete} = props;
    const filtered = selectedSeverity && selectedSeverity._id ? tasks.filter(t => t.severity._id === selectedSeverity._id) : tasks;
    const taskItem = paginate(filtered, currentPage, pageSize);
    

    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Task</th>
                    <th>Category</th>
                    <th>Severity</th>
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
                        <button onClick={() => onDelete(task)} className='btn btn-danger'>Delete</button>
                    </td>
                    <td><Complete /></td>
                </tr>
                )}
                
            </tbody>
        </table> );
}
 
export default TaskTable;