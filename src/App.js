import React ,{useState} from "react";
import "./App.css";
import Data from './MOCK_DATA.json'

function App() {
    const [searchterm,setsearchterm]=useState('');

  return (
    <div className="App">
      <input type="text" placeholder="search..." onChange={(e)=>setsearchterm(e.target.value)}></input>
  
     
   {Data.filter((val) =>{
     if (searchterm === ' '){
        return val
     } else if(val.first_name.toLocaleLowerCase().startsWith(searchterm.toLowerCase())){
         return val
     }
   }).map((val,key) =>{
    
    return   key < 10 &&(
        <div className="list" key={key}>
        <p>{val.first_name}</p>
        </div>
    )
   })
  }
</div>
  )
}

export default App