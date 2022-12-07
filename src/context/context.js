import React, { useState, useContext } from 'react'
import { createContext } from 'react'

const DrumContext = createContext()

export const DrumProvider = ({ children }) => {

  const [display, setDisplay] = useState("")
  const [volume, setVolume] = useState(1)

  const handleClick = (event) => {
    let x = document.getElementById(`${event.target.id}`)
    setDisplay(x.id);
    x.lastChild.volume = volume
    x.lastChild.play()
  }

  window.addEventListener("keydown", (event) => {
    if (document.getElementById(`${event.key.toUpperCase()}`) !== null) {
      let x = document.getElementById(`${event.key.toUpperCase()}`)
      x.volume = volume
      x.play()
      setDisplay(x.parentNode.id);
    } else { return }
  })

  const volumeControl = (event) =>{
    setVolume(event.target.value)
  }

  const values = {
    handleClick,
    display,
    volumeControl
  }

  return <DrumContext.Provider value={values}>{children}</DrumContext.Provider>

}

const useDrum = () => useContext(DrumContext)
export default useDrum