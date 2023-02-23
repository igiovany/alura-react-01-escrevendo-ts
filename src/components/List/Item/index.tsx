import { ITasks } from '../../../Types/task'
import style from '../List.module.scss'


export function Item({ task, time, selected, completed, id }: ITasks) {
  console.log({ task, time, selected, completed, id })

  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  )
}