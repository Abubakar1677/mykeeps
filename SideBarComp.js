import styles from './keeps.module.css'
import {tstyles,ttstyles} from './SideStyles'

import { useState } from 'react'

export default function SideBarComp({openSide}){
   
 
   
   


 

  
    return(
        <nav >

       <div className={openSide ? styles.sideBar : styles.lessSide }   >
           
                  <div >
                      <div className={styles.sideBarBtn} >
                        <span  className="material-symbols-outlined"  >lightbulb</span>
                      </div> 
                      <span  className={styles.sideItem } >Note</span>
                  </div>


                  <div >
                        <div className={styles.sideBarBtn}>
                          <span class="material-symbols-outlined" >notifications </span>
                        </div> 
                        <span className={styles.sideItem } >Reminder</span>
                  </div>


                   <div>
                          <div className={styles.sideBarBtn}>
                             <span class="material-symbols-outlined">edit</span>
                         </div>
                         <span className={styles.sideItem }  >Edit Text</span>
                   </div>


                    <div>
                          <diV className={styles.sideBarBtn}>
                             <span class="material-symbols-outlined">smb_share</span>
                          </diV>                
                          <span className={styles.sideItem } >Archive</span>            
                    </div>
         

                    <div>
                           <div className={styles.sideBarBtn}>
                              <span class="material-symbols-outlined"  >delete</span>
                            </div>      
                              <span className={styles.sideItem } >Trash</span>  
                    </div>
        </div>
        </nav>
    )
}
