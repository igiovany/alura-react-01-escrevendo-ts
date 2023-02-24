import { ITasks } from "../../Types/task";
import { Item } from "./Item";
import style from './List.module.scss'

interface Props {
  tasks: ITasks[],
  selectTask: (selectedTask: ITasks) => void
}

export function List({ tasks, selectTask }: Props) {

  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item) => (
          <Item
            selectTask={selectTask}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}