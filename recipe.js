import React from "react";
import { useState } from 'react';
const ContactCard = (props)=>{
  const [age,setAge]= useState(false);
  function showAge(){
    setAge(!age);
  }
  return(
    <div className="contact-card">
      <img src={props.image}alt=''></img>
      <p>{props.name}</p>
      <p style={{fontSize:'20px',fontWeight:200}}>{props.email}</p>
      <button onClick={showAge}style={{border:'1px solid',background:'lightblue',margin:'5px 8px',borderRadius:'5px'}}>show age</button>
      {age && <p style={{fontsize:'20px'}}>{props.age}</p>}
    </div>
  )
}
export default ContactCard;