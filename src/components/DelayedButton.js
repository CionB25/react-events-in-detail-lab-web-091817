// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

  whatIsThis = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }
  render() {
    return (
      <button onClick={this.whatIsThis}>This</button>
    )
  }
}

export default DelayedButton;
