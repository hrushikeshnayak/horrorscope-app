import React  from 'react'

const SelectTimeframe = ({onTimeFrameSelected}) => {
  return (
    <>
    <h2>please slect the time frame </h2>
    <div >
        {["yesterday" , "today" , "tommorrow"].map((timeframes) => (
          <button className='timeframe' key={timeframes}
          onClick={() => onTimeFrameSelected(timeframes)}>{timeframes}</button>
        ))
        }
    </div>
    </>
  )
}

export default SelectTimeframe