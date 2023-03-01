import React from "react";
import style from './Button.module.scss'

interface IProps {
  children: React.ReactNode,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}


export class Button extends React.Component<IProps> {
  render() {
    const { type= "button", onClick } = this.props
    return (
      <button onClick={onClick} type={type} className={style.button}>
        {this.props.children}
      </button>
    )
  }
}
