import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';

import "./TaskList.css";
import React from 'react';

export const TaskList = () => {
    const [tasks, setTasks] = useState([
        {id: 5271, name: "Completed PropDrilling", completed: true}, 
        {id: 7825, name: " Completed Dynamic Styles Implementation", completed: true}, 
        {id: 8391, name: "Pending about Hooks", completed: false}
    ]);
    const [show, setShow] = useState(true);
    const styles = {
        color: show ? "#3D8361" : "#be3434",
        border: "2px solid", 
        borderColor: show ? "#3D8361" : "#be3434" ,
        borderRadius: "5px",
        fontSize: "28px",
        padding: "20px"
    }

    function handleDelete(id){
        setTasks(tasks.filter(task => task.id !== id));
    }

  return (
    <section className='tasklist'>
        <h1 style={styles}>Task List</h1>
        <ul>
            <button className='tasklist button.trigger' onClick={() => setShow(!show)}>{show?"Hide":"Show"}</button>
            { show && tasks.map((task) => (
                <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
            )) }
        </ul>
        <BoxCard result="success">
            <p className="title">Offer Notification</p>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vel!</p>
        </BoxCard>

        <BoxCard result="warning">
            <p className="title">Cookie Notification</p>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, suscipit.</p>
        </BoxCard>
    </section>
  )
}