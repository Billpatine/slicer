import React from 'react';
import {connect} from 'react-redux';
import {modelsFromObject} from './helpers/models-from-object.js'
import {getDistanceModelsFromSlices} from './get-distance-models-from-slices'


class CutButton extends React.Component {

  handleCutButton() {
    console.log('CUT!!!');

    let request = new Request('http://localhost:4000/cut', {
      method: 'POST',
      body: JSON.stringify({
        srcImg: this.props.imageSrc,
        sliceYs: this.props.slices.map( s => {
          return {
            startY: s.y,
            distance: 200
          }
        })
      })
    });
    fetch(request).then(function(response) {
        console.log(response)
    })

  }

  render() {
    return (
      <button onClick={this.handleCutButton.bind(this)}>
        CUT!
      </button>
    )
  }
}

export default connect((state, props) => {
  return {
    imageSrc: state.app.imageSrc,
    slices: modelsFromObject(state.app.slices)
  }
})(CutButton)