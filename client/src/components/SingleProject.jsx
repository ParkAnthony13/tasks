import React, { useEffect, useState } from 'react';
import {navigate, Router, Link} from '@reach/router'
import '../css/SingleProject.css';

const SingleProject = props => {

    const {id} =props
    const [task, setTask] = useState({
        taskName:'',
        taskDescription:'',
        taskCreatedAt:'',
        taskDueDate:'',
        taskDateDelta:'',
        taskPerson:'',
        isComplete: false,
    });
    const [taskList, setTaskList] = useState([]);
    const [completedList, setCompletedList] = useState([]);

    const changeHandler = e => {
        setTask({
            ...task,
            [e.target.name]:e.target.value
        })
    }
    const addTaskHandler = e => {
        e.preventDefault();
        setTaskList([...taskList,task]);
        setTask({
            taskName:'',
            taskDescription:'',
            taskCreatedAt:'',
            taskDueDate:'',
            taskDateDelta:'',
            taskPerson:'',
            isComplete: false,
        })
    }
    const taskCompletedHandler = e => {
        e.preventDefault();
        // data base delete from task list, post to completed list
    }
    return (
        <div>
            <div className="projectListContainer">
                <div className="projectTitle">
                    <ul className="TitleItem">
                        <li>Project {id}</li>
                        <li>
                            <h1>Tasks</h1>
                            <h1>{taskList.length}/{taskList.length}</h1>
                        </li>
                    </ul>

                </div>
                <div className="projectStatus">

                </div>
                <div className="projectTaskList">

                </div>

            </div>
        </div>
    )
}

export default SingleProject;