import React, { useState } from 'react'

const IncrementDecrement = () => {
    const [ count, setCount ] = useState(0)
}

increment = () => {
    setCount (count + 1)
}

decrement = () => {
    setCount (count - 1)
}

if(this.state.angka){
    let sum = parseInt(this.state.counter) + parseInt(this.state.angka);
    if(sum > 1){
        this.setState({ counter: sum, angka: true });
    }else (sum == 0);{
      console.log("pengurangan tidak bisa kurang dari 0");
      this.setState({error:"pengurangan tidak bisa kurang dari 0"})
    }
}

return(
    <div>
        <button onClick = {increment}>+</button>
        <button onClick = {decrement}>-</button>
        <p>{count}</p>
    </div>
)