import type { FC, CSSProperties } from 'react'
import '../styles/Button.css'

interface IProps {
  text: string
  style?: CSSProperties
}

const Button: FC<IProps> = ({ text, style }) => {
  return <button style={style}>{text}</button>
}

export default Button
