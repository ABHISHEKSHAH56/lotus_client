import React, { useEffect, useState } from "react";
import className from "./modal.module.scss";
import TextInput, { Textarea } from "../TextInput/textinput";
import API from "@/utils/apiConfig";

export default function UpdateContacts({isOpen,setIsOpen,currentinput,onPress}) {
  console.log(currentinput)
  const [contactsInput, setContactsInput] = useState({
    first_name:"",
    last_name:"",
    email:"",
    message:""
  })
  useEffect(() => {
    
  if(currentinput) getContacts()
   
  }, [currentinput])

  const getContacts=async()=>{
    await API.get(`user/${currentinput}`).then((res)=>{
      setContactsInput(res.data.data)
      
    }).catch((err)=>toast.error("Something went wrong "))
  }
  
  return (
    <>
    {isOpen && (
    <div className={className.modal}>
      <div className={`${className.modal_content}`}>
        <div
          style={{
            position: "relative",
          }}
        >
          <div style={{}}>
            <p className="titleheader" style={{color:"#001044",fontWeight:600}}>Update Contacts Form</p>
          </div>
          <div
            style={{
              width: "100%",
              height: "0.1px",
              background: "#676E83",
              opacity: "0.75",
              marginBottom: "2px",
            }}
          ></div>
          <TextInput label={"First Name"} placeholder={"First Name"} type={"text"} value={contactsInput.first_name}  handleChange={(text)=>setContactsInput({...contactsInput,first_name:text.target.value})} />
          <TextInput label={"Last Name"} placeholder={"Last Name"} type={"text"} value={contactsInput.last_name} handleChange={(text)=>setContactsInput({...contactsInput,last_name:text.target.value})} />
          <TextInput label={"Email"} placeholder={"Enter email"} type={"email"} value={contactsInput.email} handleChange={(text)=>setContactsInput({...contactsInput,email:text.target.value})} />
          <Textarea label={"Message"} placeholder={"Enter the message "} value={contactsInput.message} handleChange={(text)=>setContactsInput({...contactsInput,message:text.target.value})}  />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            left:0,
            right:0,
            height:'80px',
            paddingLeft:"5px",
            gap:5,
            background: "#FFF",
            boxShadow: "0px -5px 10px 0px rgba(103, 110, 131, 0.13)"
          }}
        >
          <div
             onClick={()=>{
              onPress(contactsInput)

            }}
            style={{
              height: "40px",
              width: "120px",
              border: "2px solid #002B85",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              background:"#EBF1FF"
            }}
          >
            <p className="headertitle" >Update </p>
          </div>
          <div
            style={{
              height: "40px",
              width: "120px",
              
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              cursor:'pointer'
            }}
          >
            <p className="headertitle" onClick={()=>setIsOpen(false)} style={{color:"black",cursor:'pointer'}}>Cancel </p>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  );
}