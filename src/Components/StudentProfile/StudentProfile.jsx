import React from 'react'
import styles from './Profile.module.css';

function StudentProfile() {
  const Skills=["Java","Python","Nodejs", "expressJs","Httl","GitHub"];

  return (
    <div className={styles.main} >
    <div className={styles.pro}>
    <h2 className='text-4xl'>Profile Information</h2>
        <hr/>
    <div className={styles.profile}>
      
      <div className={styles.left}>
        
          <img src='bhalot.jpg' className={styles.img}/>
          <h2>Name: bhalot</h2>
          <hr></hr>
          <button className={styles.resume}>View Resume</button>
      </div>
      <div className={styles.line}></div>
      <hr/>
      <div className={styles.right}>
        <div className={styles.rightUp}>
           <h3>Address:bhopal</h3>
           <h3>Contact:9993432646</h3>
           <label><h3>Current Status:</h3></label>
           <button className={styles.nextbtn}><h3>Student / Fresher / Employee</h3></button>
           </div>
           <hr/>
           <p>hy i am mayank khichi from Nit bhopal doing MCA </p>
      </div>

      </div>
      </div>
      <br/>
    
      <div className={styles.SecondPro}>
        <h3>Skills</h3>
        <hr/>
        <div className={styles.line}></div>
        <ul className={styles.Skillsitem}>
          {Skills.map((item)=>(
            <li key={item} className={styles.Items}>{item}</li>
          ))}
        </ul>
        <button>Edit</button>


      </div>
       <br/>

      <div className={styles.SecondPro}>
        <h3>Education</h3>
        <hr/>
        <label>Post Graduation</label>
        <h4>College-National Institiude of Technology Bhopal MCA</h4>
        <label>Under Graduation</label>
        <h4>Vikram University Ujjain madhya pradesh</h4>
        <button>Edit</button>

      </div>
        

      <br/>

      <div className={styles.SecondPro}>
        <h3>Experience</h3>
        <hr/>
        <label>Post Graduation</label>
        <h4>College-National Institiude of Technology Bhopal MCA</h4>
        <label>Under Graduation</label>
        <h4>Vikram University Ujjain madhya pradesh</h4>
        <button>Edit</button>
      
      </div>
      
  </div>
  )
}

export default StudentProfile
