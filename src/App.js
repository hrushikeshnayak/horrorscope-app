import React , {useState} from 'react'
import "./App.css"
import Name from './components/Name';
import SelectSign from './components/SelectSign'
import SelectTimeframe from './components/SelectTimeframe'
import Horoscope from './components/Horoscope'

const App = () => {

  const [name , setName] = useState('')
  const [selectedSign , setSelectedSign] = useState(null)
  const [selectedTimeframe , setSelectedTimeframe] = useState(null)

   const restart = () => {
     setName('')
     setSelectedSign(null)
     setSelectedTimeframe(null)
   }



  return (
    <>
        <div className='App'>
        <h1 className='heading'>The Horrorscope App</h1>
<div className='container'>
  {!selectedSign && (<Name onNameSelected = {setName}/>)}

  {!selectedSign && (
      <SelectSign onSignSelected={setSelectedSign}/>
       )}

      {selectedSign && !selectedTimeframe &&(
      <SelectTimeframe onTimeFrameSelected={setSelectedTimeframe}/>
      )}

      {name && selectedSign && selectedTimeframe && (
        <Horoscope name ={name} sign={selectedSign} timeframe={selectedTimeframe}/>
      )}
   
      <button className='restart' onClick={restart}>Re-enter</button> 
     </div>
      <small>enter all feilds to get the output</small>
    </div>
    </>
  )
}

export default App
     
