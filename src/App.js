import React from 'react'
import { Button } from 'sys-react-lib'
import 'sys-react-lib/dist/index.css'
import './App.css'


function testButton(variant) {
  return () => {
    alert(`Button clicked with variant: ${variant}`);
  };
}

const App = () => {
  return (
    <>
     <div className='grid'>
      <Button 
          varient="accent" 
          handleClick={testButton("accent")} 
          label="Default Button" />

        <Button varient="warning" handleClick={testButton("warning")} label="Warning Button" />
        <Button varient="error" handleClick={testButton("error")} label="Error Button" />
        <Button varient="dark" handleClick={testButton("dark")} label="Dark Button" />
        <Button varient="success" handleClick={testButton("success")} label="Success Button" />
        
        <Button 
          varient="accent" 
          isDisabled
          handleClick={testButton("accent")} 
          label="Disabled Button" />
     </div>
    </>
  )
}

export default App
