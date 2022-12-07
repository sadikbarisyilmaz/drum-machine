import React from 'react'
import useDrum from '../context/context'


function Display() {
   
    const { display, volumeControl } = useDrum()
   
    return (

        <div id='controls'>
            <div id="display">
                {display}
            </div>
            <div>
                <input onChange={volumeControl} type="range" className="range" min="0" max="1" step="0.20" id="volume"></input>
            </div>
        </div>
    )
}

export default Display