import React, { useEffect, useState } from "react";
import CreateContacts from "../Modal/createmodal";
import UpdateContacts from "../Modal/updatemodal";
import API from "@/utils/apiConfig";
import { toast } from "react-toastify";
import DeleteContacts from "../Modal/deleteModal";

function TableColumnHeader({ title }) {
    return (
      <div
        style={{
            display:"flex",
            flexDirection:'row',
            gap:4,
            justifyContent:"start",
            alignItems:"center",
        }}
        
        
      >
        <p
          className="headertitle"
          style={{  fontWeight: "600", fontSize: "12px" }}
        >
          {title}
        </p>
        
      </div>
    );
  }

export default function Dashboard() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [isDeleteModalOpen, setisDeleteModalOpen] = useState(false)
    const [currentId, setCurrentId] = useState(null)
    const [contactList, setContactList] = useState([])
  useEffect(() => {
   getAllContacts()
  
   
  }, [])

  const getAllContacts=async()=>{
    await API.get("user").then((res)=>{
      setContactList(res.data.data)
      
    }).catch((err)=>toast.error("Something went wrong "))
  }
  const createContacts = async (data) => {
    try {
      const res = await API.post("user", data);
      setIsCreateModalOpen(false);
      await getAllContacts();
      toast.success("Created Successfully!!");
    } catch (err) {
      toast.error("Not able to create a contact");
    }
  };

  const updateContacts = async (data) => {
    try {
      const res = await API.patch(`user/${currentId}`, data);
      setIsUpdateModalOpen(false);
      await getAllContacts();
      toast.success("Updated Successfully!!");
    } catch (err) {
      toast.error("Not able to Update contact");
    }
  };
  

  
  const deleteContacts=async()=>{
    await API.delete(`user/${currentId}`).then((res)=>{
      setisDeleteModalOpen(false)
      getAllContacts()
      setCurrentId(null)
      
      toast.success("Deleted Successfully!!")
    }).catch((err)=>toast.error("Not able to delete contact"))
  }

  return (
    <>
    <CreateContacts isOpen={isCreateModalOpen} setIsOpen={setIsCreateModalOpen} onPress={(data)=>createContacts(data)} />
    <UpdateContacts isOpen={isUpdateModalOpen} setIsOpen={setIsUpdateModalOpen} currentinput={currentId}  onPress={(data)=>updateContacts(data)} />
    <DeleteContacts isOpen={isDeleteModalOpen} setIsOpen={setisDeleteModalOpen} onPress={deleteContacts}  />
    <div
      style={{
        boxShadow: "0px 0px 10px 0px #E2E6FF",
        display: "flex",
        flexDirection:'column',
        width: "98%",
        margin: "10px",
        marginRight: "15px",
        borderRadius: "5px",
        minHeight: "90vh",
        overflowy: "auto",
        overflowX: "hidden",
        padding: "5px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          cursor: "pointer",
          flexDirection: "row",
          alignItems: "center",
          height: "50px",
          gap: "10px",
          justifyContent: "space-between",
          borderBottom:"2px solid rgba(103, 110, 131, 0.25) "
        }}
      >
        <div>
          <p
            style={{
              fontWeight: "700",
              color: "#001044",
              paddingLeft: "4px",
            }}
          >
            Contacts List
          </p>
        </div>
        <div style={{
            height:"40px",
            width:"120px",
            border:"2px solid black",
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:"5px",
            cursor:"pointer"
        }}
        onClick={()=>setIsCreateModalOpen(true)}>
         
            <p className="headertitle">Add new </p>
          
        </div>
      </div>
      <table   style={{ width: "100%" }}>
          <thead >
            <tr
                style={{height:"30px", borderBottom: "2px solid rgba(103, 110, 131, 0.25)" }}
             
             
              
            >
              <th scope="col">
                <TableColumnHeader title={"First Name"} onPress={() => {}} />
              </th>
              <th>
                <TableColumnHeader title={"Last Name"} onPress={() => {}} />
              </th>

              <th>
                <TableColumnHeader title={"Email"} onPress={() => {}} />
              </th>
              <th>
                <TableColumnHeader title={"Message"} onPress={() => {}} />
              </th>
              
            </tr>
          </thead>
         <tbody>
          {
            contactList?.map((item)=>
            <tr
            key={item.id}
             
             style={{ borderBottom: "1px solid rgba(103, 110, 131, 0.25)",height:"50px" }}
           >
             <td>
               <p className="headertitletag">{item.first_name}</p>
               
             </td>
             <td>
               <p className="headertitletag">{item.last_name}</p>
             </td>
             <td>
                <p className="headertitletag">{item.email}</p>
             </td>
             <td>
                <p className="headertitletag">{item.message}</p>
             </td>
            

             <td style={{cursor:"pointer"}} onClick={()=>{
              setCurrentId(item.id)
              setIsUpdateModalOpen(true)
             }}>
              
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   width="18"
                   height="18"
                   viewBox="0 0 18 18"
                   fill="none"
                 >
                   <g clipPath="url(#clip0_345_1263)">
                     <path
                       d="M12.6465 3.36519L14.625 5.34369M12.6465 3.36519L13.9117 2.09919C14.1755 1.83543 14.5332 1.68726 14.9062 1.68726C15.2793 1.68726 15.637 1.83543 15.9008 2.09919C16.1645 2.36295 16.3127 2.72068 16.3127 3.09369C16.3127 3.4667 16.1645 3.82443 15.9008 4.08819L5.124 14.8649C4.72749 15.2612 4.23852 15.5525 3.70125 15.7124L1.6875 16.3124L2.2875 14.2987C2.44746 13.7614 2.73873 13.2724 3.135 12.8759L12.6473 3.36519H12.6465Z"
                       stroke="#001044"
                       strokeWidth="1.5"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                     />
                   </g>
                   <defs>
                     <clipPath id="clip0_345_1263">
                       <rect width="18" height="18" fill="white" />
                     </clipPath>
                   </defs>
                 </svg>
             </td>
             <td style={{cursor:'pointer'}} onClick={()=>{
              setCurrentId(item.id)
              setisDeleteModalOpen(true)
             }}>
              
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   width="18"
                   height="18"
                   viewBox="0 0 18 18"
                   fill="none"
                 >
                   <path
                     d="M11.055 6.75002L10.7955 13.5M7.2045 13.5L6.945 6.75002M14.421 4.34252C14.6775 4.38152 14.9325 4.42277 15.1875 4.46702M14.421 4.34327L13.62 14.7548C13.5873 15.1787 13.3958 15.5746 13.0838 15.8635C12.7717 16.1523 12.3622 16.3126 11.937 16.3125H6.063C5.63782 16.3126 5.22827 16.1523 4.91623 15.8635C4.6042 15.5746 4.41269 15.1787 4.38 14.7548L3.579 4.34252M14.421 4.34252C13.5554 4.21166 12.6853 4.11235 11.8125 4.04477M2.8125 4.46627C3.0675 4.42202 3.3225 4.38077 3.579 4.34252M3.579 4.34252C4.4446 4.21166 5.31468 4.11235 6.1875 4.04477M11.8125 4.04477V3.35777C11.8125 2.47277 11.13 1.73477 10.245 1.70702C9.41521 1.6805 8.58479 1.6805 7.755 1.70702C6.87 1.73477 6.1875 2.47352 6.1875 3.35777V4.04477M11.8125 4.04477C9.94029 3.90008 8.05971 3.90008 6.1875 4.04477"
                     stroke="#D12C08"
                     strokeWidth="1.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                   />
                 </svg>
                
               
             </td>
           </tr>
            )
          }
         
         </tbody>
        </table>
    </div>
    </>
  );
}
