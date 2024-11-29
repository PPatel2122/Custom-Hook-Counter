
import React ,{useEffect, useState} from 'react'

const useCustomCounter = (initialValue,componentName) => {
    const [counter,setCounter] = useState(initialValue)
    
    function counterApp(){
        setCounter(counter+1)
    }
    useEffect(()=>{
        alert(componentName+"is clicked"+counter+"times")
    },[counter,componentName])

  return counterApp;
}

export default useCustomCounter;