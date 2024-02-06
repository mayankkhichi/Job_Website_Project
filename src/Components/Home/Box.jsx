import React from 'react'
import styles from "./Box.module.css"

function Box() {
  return (
    <div className={`${styles.card}   shadow-xl`}>
      <div className="rounded-full   items-center justify-center">
      
        <img src="./public/karahe.png"  className={styles.CardImg} />

      
      
         <div className={styles.cardTitle}>    
        <a className='absolute inset-x-0 bottom-[25%]  '>JOB FOR FRESHER</a>
        </div>
     
      </div>
    
     </div>
  )
}

export default Box
