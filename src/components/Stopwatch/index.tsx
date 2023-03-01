import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITasks } from "../../Types/task";
import { Button } from "../Button";
import { Clock } from "./Clock";
import style from './Stopwatch.module.scss'

interface props {
  selected: ITasks | undefined,
  completeTask: () => void
}

export function Stopwatch({ selected, completeTask }: props) {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected?.time))
    }
  }, [selected])

  function regressive(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1)
        return regressive(count - 1)
      }
      completeTask()
    }, 1000)
  }

  console.log('conversao: ', timeToSeconds('01:01:01'))
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressive(time)}>
        Começar!
      </Button>
    </div>
  )
}