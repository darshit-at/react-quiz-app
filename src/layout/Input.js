import React , { useEffect, useState } from 'react';
import  './Input.css'
const Input =  (props) => {
    const [userInput  , getUserInput ] = useState('');

    useEffect(()=> {
      getUserInput(props.userSeleteOption)
    },[props])
    
    const changeHandler = (event) => {
       props.onChange(event.target.value)
    }
    return (
        <>
        <input 
        type='text' 
        value={userInput} 
        placeholder = 'Enter answer'
        onChange={changeHandler}
        />
        </>
    )
};

export default Input;