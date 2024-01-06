import { useEffect, useState } from "react";
import "./styles.css";
import TaskForm from "./Components/TaskForm";
import TaskListItem from "./Components/TaskListItem";

export default function App() {
    const [newItem, setNewItem] = useState("");
    const [tasks, setTasks] = useState(()=>{    // use of callback function to set initial state
        const savedTasks = localStorage.getItem("TASKS");   // get tasks from local storage
        return savedTasks?JSON.parse(savedTasks):[];    // if tasks exist, parse them, else return empty array
    });

    useEffect(()=>{     // uses the callback function when any of the values in the passed array changes
        localStorage.setItem("TASKS", JSON.stringify(tasks))    // save tasks to local storage
    }, [tasks])

    function addTask(title) {
        setTasks((prevTasks) => [{title: title, isCompleted: false, id: crypto.randomUUID()}, ...prevTasks]); // add new item to tasks
        // passed a function to setTasks to ensure that the previous state is used and more than 1 item can be added
    }

    function markCheck(id, isCompleted) {
        setTasks(prevTasks => prevTasks.map(task => (task.id === id)? {...task, isCompleted}: task));
    }

    function deleteTask(id) {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    }

    return <>
        <TaskForm onSubmit={addTask} />  {/* use of props*/}
        <h1 className="header">TODO List</h1>
        <TaskListItem tasks={tasks} onChange={markCheck} onClick={deleteTask}/>
    </>
}