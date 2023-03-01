import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITasks } from "../../Types/task";
import { Button } from "../Button";
import { Clock } from "./Clock";
import style from './Stopwatch.module.scss'

interface props {
  selected: ITasks | undefined
}

export function Stopwatch({ selected }: props) {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected?.time))
    }

  }, [selected])

  console.log('conversao: ', timeToSeconds('01:01:01'))
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      Time: {time}
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button>
        Começar!
      </Button>
    </div>
  )
}