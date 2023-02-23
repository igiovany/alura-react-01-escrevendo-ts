import { ITasks } from "../../Types/task";
import { Item } from "./Item";
import style from './List.module.scss'

export function List({tasks}: { tasks: ITasks[]}) {

  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}