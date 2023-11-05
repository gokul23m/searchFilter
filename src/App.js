import React ,{useState} from "react";
import Data from './MOCK_DATA.json'

function App() {
    const [searchterm,setsearchterm]=useState('');

  return (
    <div className="a">
      <input type="text" placeholder="search..." onChange={(e)=>setsearchterm(e.target.value)}></input>
  
   {Data.filter((val) =>{
     if (searchterm === ' '){
        return val
     } else if(val.first_name.toLocaleLowerCase().startsWith(searchterm.toLowerCase())){
         return val
     }
    
   }).map((val,key) =>{
    
    return   key < 20 &&(
        <div key={key}>
        <p >{val.first_name}</p>
        </div>
    )
   })
  }
</div>
  )
}

export default App