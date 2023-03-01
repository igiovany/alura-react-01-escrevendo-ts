import { ITasks } from '../../../Types/task'
import style from './Item.module.scss'

interface Props extends ITasks {

  selectTask: (selectedTask: ITasks) => void
}

export function Item({ task, time, selected, completed, id, selectTask }: Props) {
  
  return (
    <li className={`${style.item} ${selected ? style.selectedItem : ''} ${completed ? style.completedItem : ''} `} onClick={() => !completed && selectTask({
      task,
      time,
      selected,
      completed,
      id
    })}>
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && <span className={style.finished} aria-label="tarefa completada"> </span>}
    </li>
  )
}