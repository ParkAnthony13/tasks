import React, { useEffect, useState } from 'react';
import {navigate, Router, Link} from '@reach/router'
import '../css/SingleProject.css';

const SingleProject = props => {
    const [testList,setTestList] = useState([1,2,3,4,5]);
    const [toggle,setToggle] = useState(true);
    const [inputToggle,setInputToggle] = useState(true);
    const [link,setLink] = useState("");

    const {id} =props;
    const {mobile,setMobile} = props;

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

    const testTList = [
        {
            taskName:'',
            taskDescription:'',
            taskCreatedAt:'',
            taskDueDate:'',
            taskDateDelta:'',
            taskPerson:'',
            isComplete: false,
        },
        {
            taskName:'',
            taskDescription:'',
            taskCreatedAt:'',
            taskDueDate:'',
            taskDateDelta:'',
            taskPerson:'',
            isComplete: false,
        },
        {
            taskName:'',
            taskDescription:'',
            taskCreatedAt:'',
            taskDueDate:'',
            taskDateDelta:'',
            taskPerson:'',
            isComplete: false,
        }
    ]

    const changeHandler = e => {
        setTask({
            ...task,
            [e.target.name]:e.target.value
        })
    };
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
    };
    const taskCompletedHandler = e => {
        e.preventDefault();
        // data base delete from task list, post to completed list
    };
    const linkHandler = e => {
        setToggle(!toggle);
    }
    const inputToggleHandler = e => {
        setInputToggle(!inputToggle);
    }
    return (
        <div className="singleProjContainer">
            <table className="taskListTable">
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>{completedList.length}/{taskList.length}</th>
                        <th>X quests</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Github Link</th>
                        <th>
                            {inputToggle ? link
                            : <form>
                                <input type="text"/>
                                
                            </form>
                            }
                            <span>
                                <button onClick={linkHandler} className="gitLinkBtn">{link ? "Edit Link" : "Add Link"}</button>
                            </span>
                        </th>
                    </tr>
                    {testList.map((testItem,idx) => {
                        return(<tr key={idx}>
                            <td>{idx}</td>
                            <td>{idx}</td>
                        </tr>)
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default SingleProject;