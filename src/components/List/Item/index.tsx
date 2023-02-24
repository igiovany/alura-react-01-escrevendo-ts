import { ITasks } from '../../../Types/task'
import style from '../List.module.scss'

interface Props extends ITasks {

  selectTask: (selectedTask: ITasks) => void
}

export function Item({ task, time, selected, completed, id, selectTask }: Props) {
  console.log({ task, time, selected, completed, id })

  return (
    <li className={`${style.item} ${selected ? style.selectedItem : ''} `} onClick={() => selectTask({
      task,
      time,
      selected,
      completed,
      id
    })}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  )
}