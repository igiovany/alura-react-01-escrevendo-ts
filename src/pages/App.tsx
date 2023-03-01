import React, { useState } from 'react';
import { Form } from '../components/Form';
import { List } from '../components/List';
import { Stopwatch } from '../components/Stopwatch';
import { ITasks } from '../Types/task';
import style from './App.module.scss'

function App() {

  const [tasks, setTasks] = useState<ITasks[]>([]);

  const [selected, setSelected] = useState<ITasks>();

  function selectTask(selectedTask: ITasks) {
    setSelected(selectedTask);
    setTasks(previousTasks => previousTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })))

  }

  function completeTask() {
    if(selected) {
      setSelected(undefined)
      setTasks(previousTasks => previousTasks.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected:false,
            completed: true 
          }
        }
        return task
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask}
      />
      <Stopwatch selected={selected} completeTask={completeTask} />
    </div>

  );
}

export default App;
