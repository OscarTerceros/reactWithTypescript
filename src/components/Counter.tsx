import { useState } from "react"

export const Counter = () => {
  
  const [counter, setCounter] = useState( 0 );
  
  const handleAdd = ( number: number = 1 ): void => {
    setCounter( counter + number );
  }

  return (
    <div className="mt-5">
      <h3>Counter: useState</h3>
      <span>Valor: { counter }</span>
      <br/>
    <button 
      className="btn btn-outline-primary mt-2 me-2" 
      onClick={ () => handleAdd( ) } >
      +1
    </button>
    <button 
      className="btn btn-outline-primary mt-2 me-2" 
      onClick={ () => handleAdd( 2 ) } >
      +2
    </button>
    <button 
      className="btn btn-outline-danger mt-2" 
      onClick={ () => setCounter( 0 ) } >
      Reset
    </button>
    </div>
  )
}
