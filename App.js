
import './App.css';
import { useEffect, useState } from 'react';
import ContactCard from './recipe';
function App() {
  const [results,setResults]=useState([]);
  useEffect(()=>{
  getContacts();
  },[])
  const getContacts = async ()=>{
    const response = await fetch("https://randomuser.me/api/?results=50");
    const data = await response.json();
    setResults(data.results);
    
  }
     return(
       <div className='App'>
         {results.map((contact,index)=>
           <ContactCard key={index} 
           image={contact.picture.large} 
           name={contact.first}
           email={contact.email}
           age={contact.dob.age} />
         )}
         
       </div>
     )
      
    
    

  
}

export default App;
