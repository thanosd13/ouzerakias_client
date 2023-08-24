import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import UseEffectComp from './UseEffectComp';
import { useCallback } from 'react';

function TestUseHooks() {
    const [value, setValue] = useState(0);
    const [number, setNumber] = useState(0);

    useEffect(()=>{
       console.log("change value!"); 
    },[value])
    
    const changeNumber = useCallback(() => {
        setNumber(prevNumber => prevNumber + 1);
    },[])

  return (
    <div>
        Value: {value}
        <br/>
        <button onClick={() =>{setValue(value + 1)}}>
            update value
        </button>
        <br/>
        <button onClick={changeNumber}>
            second btn
        </button>
        <UseEffectComp number={number} />
    </div>
  )
}

export default TestUseHooks
