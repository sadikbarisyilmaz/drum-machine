import React from 'react'
import useDrum from '../context/context'


function Pads() {

  const { handleClick } = useDrum()

  return (
    <div id='pads'>
      <button className="drum-pad" id='Chord-1' onClick={handleClick} >Q<audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" id='Q' ></audio></button>
      <button className="drum-pad" id='Chord-2' onClick={handleClick} >W<audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" id='W'></audio></button>
      <button className="drum-pad" id='Chord-3' onClick={handleClick} >E<audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" id='E'></audio></button>
      <button className="drum-pad" id='Shaker' onClick={handleClick} >A<audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" id='A'></audio></button>
      <button className="drum-pad" id='Open-HH' onClick={handleClick} >S<audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" id='S'></audio></button>
      <button className="drum-pad" id='Closed-HH' onClick={handleClick} >D<audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" id='D'></audio></button>
      <button className="drum-pad" id='Punchy-Kick' onClick={handleClick} >Z<audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" id='Z'></audio></button>
      <button className="drum-pad" id='Side-Stick' onClick={handleClick} >X<audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" id='X'></audio></button>
      <button className="drum-pad" id='Snare' onClick={handleClick} >C<audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" id='C'></audio></button>
    </div>
  )
}

export default Pads