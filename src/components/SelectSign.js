import React , {useEffect , useState} from 'react'
import {getSigns} from "../service/api"

const SelectSign = ({onSignSelected}) => {

    const [signs , setSigns] = useState([])

    useEffect(() => {
        getSigns()
        .then(setSigns)
      },[])

return ( 
    <>
    <h2>please select  the sign</h2>
    <div className='grid'>
        {signs.map((sign) => (
          <button className='sign' key={sign}
          onClick={() => onSignSelected(sign)}>{sign}</button>
        ))
        }
    </div>
    </>
  )
}

export default SelectSign
