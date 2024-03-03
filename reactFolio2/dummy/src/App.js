import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [text, setText] = useState(' ');
  

  //Variation o1 -> Every Render
  // useEffect(()=>{
  //   console.log("UI Rendering Done");
  // })

  // Variation 02 -> First Render

  // useEffect(() =>{
  //   console.log("UI Rendering Done");
  // },[]) 


  // Variation 03 -> First Render + whenever dependancy changes
  // useEffect(() =>{
  //   console.log("Change Observed");
  // },[text]);

  // Variation 04 -> to handle unmounting of a component 

  useEffect(() =>{
    // add event listner
    console.log("Event listner added");

    return() =>{
      console.log("Listener Removed");
    }
  },[text])
  




  function changeHandler(event){
    console.log(text);
    setText(event.target.value);
    console.log(text);
  }
  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
