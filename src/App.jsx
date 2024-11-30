
import { useState } from "react";
import axios from "axios";

const App = () => {

  let [name, setName]=useState('')
  let [age, setAge]=useState('')
  let [email, setEmail]=useState('')

let hangleSubmit=()=>{
  axios.post("http://localhost:4000/createdata/",{
    name: name,
    age:age,
    email:email,
  
  }).then((data)=>{
    console.log(data)
    
  }).catch((error)=>{
    console.log(error)
  })
}

  return (
    <>
      <div className=" flex mx-auto w-[600px] h-[600px] bg-gray-400 pl-5 shadow-lg shadow-sky-400">
        <div>
          <h1 className="text-center font-bold text-2xl text-teal-800"> Enter Data</h1>
        Name:
        <input onChange={(e)=>setName(e.target.value)} className="py-3 px-24 ml-4 rounded p m-5" type="text" placeholder="Enter your Name"/>
     <br/>
          age    :
        <input onChange={(e)=>setAge(e.target.value)} className="py-3 px-24 ml-4 rounded mb-5" type="text" placeholder="Enter your Name"/>
     <br/>
          email:
        <input onChange={(e)=>setEmail(e.target.value)} className="py-3 px-24 ml-4 rounded mb-5" type="text" placeholder="Enter your Name"/>
     <br/>
         
      
        <button onClick={()=>hangleSubmit()} className="px-10 py-3 bg-red-400 rounded-lg ">Submit</button>
        </div>
      </div>
    </>
  );
};

export default App;
