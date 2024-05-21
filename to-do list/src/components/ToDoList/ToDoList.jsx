import styles from './ToDoList.module.css'
import React, {useState} from 'react'

function ToDoList(){

    var [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Code"]);
    var [newTask, setNewTask] = useState("");

    function inputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if (newTask.trim() === "") return;

        setTasks(_tasks => [..._tasks, newTask]);
        setNewTask("");

    }

    function deleteTask(index){
       let updatedTasks = tasks.filter((_,i) => i !== index)
            setTasks(updatedTasks);
    }

    function moveTask(index,downUp){

        switch(downUp){
            default:

            case "up":

            if (index > 0){
                let updatedTasks = [...tasks];
                [updatedTasks[index], updatedTasks[index - 1]] = 
                [updatedTasks[index - 1], updatedTasks[index]];

                setTasks(updatedTasks);
            }

            break;

            case "down":

            if (index < tasks.length - 1){
                let updatedTasks = [...tasks];
                [updatedTasks[index], updatedTasks[index + 1]] = 
                [updatedTasks[index + 1], updatedTasks[index]];

                setTasks(updatedTasks);
            }

            break
        }

    }

    return(
        <div className={styles.container}>
            <h1 className={styles.appTitle}>To-Do List</h1>

            <fieldset className={styles.newTask}>
                <input type="text" 
                placeholder='Enter a task...' 
                value={newTask} 
                name="inputNewTask" id="inputNewTask"
                onChange={inputChange} />

                <button 
                className={`btn btn-primary ${styles.addTaskButton}`}
                onClick={addTask}>
                Add Task
                </button>
            </fieldset>

            <fieldset className={styles.taskItem}>
                {tasks.map((task,index) =>
                    <div className={styles.task} key={index}>

                        <p className={styles.taskName}>{task}</p>

                        <button 
                        className={`btn btn-danger ${styles.deleteButton}`}
                        onClick={() => deleteTask(index)}
                        >
                        🗑️
                        </button>

                        <button
                        className={`btn btn-primary ${styles.upDownButton}`}
                        onClick={() => moveTask(index,"down")}
                        >
                        ⬇️
                        </button>
                        
                        <button
                        className={`btn btn-primary ${styles.upDownButton}`}
                        onClick={() => moveTask(index,"up")}
                        >
                        ⬆️
                        </button>

                       
                    </div>
                    
                )}

            </fieldset>

        </div>
    )
}

export default ToDoList;