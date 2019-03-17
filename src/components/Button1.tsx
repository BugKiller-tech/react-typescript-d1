import * as React from 'react'

type ButtonProps = {
  text: string;
  border: 'success' | 'error';
}

class Button1 extends React.Component<ButtonProps> {

  render () {
    const { text, border } = this.props;
    const style = {
      border: `5px solid ${border=='success' ? 'green' : 'red'}`
    }
    return <button style={style}>{text}</button>
  }
  
}

export default Button1