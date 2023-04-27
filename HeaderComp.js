import { useState } from 'react'
import styles from './keeps.module.css'

export default function HeaderComp({
                    openSide,tsetOpenSide,
                    settingsCont,tsetSettingsCont,
                    todosDisplay,setTodosDisplay
                    }){
                    
    
  const handleSet = ()=>{
            tsetSettingsCont(!settingsCont)
  }
  const handleSide =()=>{
     tsetOpenSide(!openSide)
    //  topenSideItem(!openSideItem)
  } 
  const handleTodoDisplay  = ()=>{
        setTodosDisplay(!todosDisplay)
  }

    
    return(
        
        <section>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

            <div className={styles.header} >
                <div className={styles.headerItems} >
                    <span class="material-symbols-outlined" onClick={handleSide} >reorder</span>
                </div>
               <div>
               {/* <img src={require('./google_keeps logo.png').default} /> */}
               </div>
                <div className={styles.headerItems}>
                     <b>keeps</b>               
                </div>
               
                       
                <span className={styles.headerSearchBar}>
                    
                        <span class="material-symbols-outlined">search</span>
                 
              
                    <input className={styles.headsearchbox} type='text' placeholder="search" ></input>
               </span>
               
               <div  className={styles.headerItems}>
                     <span class="material-symbols-outlined" onClick={handleTodoDisplay} >view_stream</span>
                     {/* <span class="material-symbols-outlined" >grid_view</span> */}
                </div>
               

                <div className={styles.headerItems}>
                    <span  class="material-symbols-outlined" onClick={handleSet}  >settings</span>
                   </div> 

                                                                           
                
                
                <div className={styles.headerItems}>
                <span  class="material-symbols-outlined" >apps </span>
                </div>
              
                <div className={styles.headerItems}>
                <span class="material-symbols-outlined" >account_circle </span>
              </div>
               
            </div>

        </section>
    )
}