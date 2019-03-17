import * as React from 'react'

type ButtonProps = {
  text: string;
  border: 'success' | 'error';
}

const Button  = ({ text, border }: ButtonProps) => {
  const style = {
    border: `5px solid ${border=='success' ? 'green' : 'red'}`
  }
  return <button style={style}>{text}</button>
}

export default Button;
