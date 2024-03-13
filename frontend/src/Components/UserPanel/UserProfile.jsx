import React, { useContext } from "react";
import { AllFunction } from "../store/Store";
import style from "./Userprofile.module.css"
import EditP from "./EditP";

function UserProfile() {
  const { userData } = useContext(AllFunction);
  return <div className="flex flex-col lg:flex-row" >

    
      <div className={`shadow-sm ${style.first}`}>
        <img src="bhalot.jpg" className={style.img}>

         </img>
         
      </div>
      
   
    <br />
    <div className="pt-5 pl-0 w-[50%] " >
            <div className={style.firstt}>
            <EditP type="Name"   />
            </div>
            <br/>
            <div className={style.firstt}>
            <EditP type="DOB"   />
            </div>
         
            <br />
            <div className={style.firstt}>
            <EditP type="Email"   />
            </div>
            <br />
            <div className={style.firstt}>
            <EditP type="phone"   />
            </div>
            <br />
            <div className={style.firstt}>
            <EditP type="ExpYear"   />
            </div>
            <center>
              <br />
            <button type="button" class="btn btn-success"  style={{margin:"auto", height:"50px",width:"150px",fontWeight:"bold",fontSize:"large",color:"green"}}>Submit</button>
            </center>
            <br />
            </div> 
       
  </div>

}

export default UserProfile;
