import style from './Clock.module.scss'

export function Clock() {
  return (
    <>
      <span className={style.clockNumber}>0</span>
      <span className={style.clockNumber}>0</span>
      <span className={style.clockSplit}>:</span>
      <span className={style.clockNumber}>0</span>
      <span className={style.clockNumber}>0</span>
    </>

  )
}