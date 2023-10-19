import { useState } from 'react'
import Data from './Data.jsx'
import './App.css'

function App() {
  const [box, setbox] = useState(true)
  const [val, setVal] = useState("Hide box")
  const boxhandler = () => { 
    setbox(!box) 
    setVal(val==='Hide box'? 'Show Box':'Hide box')
  }
  return (
    <>
      {box && <Data />}
      <p className='click' onClick={boxhandler}>{val}</p>
    </>
  )
}

export default App
