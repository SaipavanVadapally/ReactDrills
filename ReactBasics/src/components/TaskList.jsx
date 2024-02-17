import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';

import "./TaskList.css";
import React from 'react';

export const TaskList = ({tasks,setTasks}) => {
    
    const [show, setShow] = useState(true);
     

    function handleDelete(id){
        setTasks(tasks.filter(task => task.id !== id));
    }

  return (
    <section className='tasklist'>
         
        <ul>
            <div className='header'> 
            <h1>Task List</h1>
            <button className=' trigger' onClick={() => setShow(!show)}>{show?"Hide":"Show"}</button>
            </div>
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