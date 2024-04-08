import { useState } from 'react'

const ShowCount = () => {
const [num, setNum] = useState(0)

  return (
    <div>    
      <h1>You clicked here {num} time</h1>
      <button className="subtract" onClick={()=> setNum(num - 1)}>RESTAR</button>
      <button className="add" onClick={()=> setNum(num + 1)}>SUMAR</button>
    </div>

  )
}

export default ShowCount