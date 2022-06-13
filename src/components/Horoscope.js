import React, { useEffect, useState } from 'react'
import { getHoroscope } from '../service/api'

const Horoscope = ({name , sign , timeframe}) => {
    const [horoscope , setHoroscope] = useState([])

    useEffect(()=> {
        getHoroscope(sign , timeframe).then(setHoroscope)
    }, [sign , timeframe])


  return (
    <div>
        <h2>hi {name},</h2>
        <h3>for {timeframe} , your horrorscope for {sign} is</h3>
        <p>{horoscope}</p>
    </div>
  )
}

export default Horoscope