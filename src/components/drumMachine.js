import React from 'react'
import Display from './display'
import Pads from './pads'

function DrumMachine() {
  return (
    <div id="drum-machine">
        <Pads />
        <Display />
    </div>
  )
}

export default DrumMachine