import React from 'react';
import {setSliceValue} from './redux-actions/app-actions.js'

class Slice extends React.Component {


  handleChange() {
    setSliceValue(this.props.id, {
      y: parseInt(this.refs.yInput.value, 10)
    })
  }

  render() {
    const style = {
      position: "absolute",
      left: 0,
      top: this.props.y,
      right: 0,
      height: 1,
      borderTop: "1px solid cyan"
    };

    const handleStyle = {
      position:"absolute",
      right: -60,
      transform: "translateY(-50%)"
    };

    return (
      <div style={style}>
        <div style={handleStyle}>
          <input
            ref="yInput"
            style={{width:50}}
            type="number"
            value={this.props.y}
            onChange={this.handleChange.bind(this)}
          />
        </div>
      </div>
    )
  }
}

Slice.defaultProps = {
  y: 0
};

export default Slice;