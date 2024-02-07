import React from 'react'
import styles from "./Box.module.css"

function Box() {
  return (
    <div className={`${styles.card}   shadow-xl`}>
      
      
        <img src="./public/shivam.png"  className={styles.CardImg} />

      
      
         <div className={styles.cardTitle}>    
        <a className='absolute inset-x-0 bottom-[25%]  '>JOB FOR FRESHER</a>
        </div>
     
    
    
     </div>
  )
}

export default Box
