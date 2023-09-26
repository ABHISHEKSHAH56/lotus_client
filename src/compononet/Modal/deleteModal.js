import React from "react";
import className from "./modal.module.scss";

export default function DeleteContacts({isOpen,setIsOpen,onPress}) {

  return (
    <>
     {isOpen && (
        <div className={className.modaldelete}>
        <div className={className.popupcontent}>
          <p>Are you sure you want to delete this item?</p>
          <div style={{
            display:"flex",
            flexDirection:"row",
            gap:5,
            marginTop:"10px",

            justifyContent:'center',
            alignItems:"center"
          }}>
            <div
            onClick={onPress}
            style={{
              height: "40px",
              width: "120px",
              border: "2px solid white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              background:"crimson",
              cursor:'pointer'
            }}
          >
            <p className="headertitle" style={{color:"white"}}>Delete </p>
          </div>
          <div
          onClick={()=>setIsOpen(false)}
            style={{
              height: "40px",
              width: "120px",
              border: "2px solid white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
            
              cursor:'pointer'
            }}
          >
            <p className="headertitle" >Cancel </p>
          </div>
          </div>
         
        </div>
      </div>
    )}</>
  );
}
