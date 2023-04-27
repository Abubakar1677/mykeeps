import styles from './keeps.module.css'
import { useState } from 'react'

export default function MainComp({settingsCont,
                                  todosDisplay,
                                  darkMode,setDarkMode}){
  const [less, setLess]=useState(false)
  const [todos, setTodos]= useState([])
  const [state, setState]= useState({
      title:'',
      cont:'',
      bgColor: '#fff'
  })
  const [colBoxDis,setcolBoxDis]= useState(false)
  const [moreUI,setMoreUI]=useState(false)
  const [todoMoreUI,setTodoMoreUI]= useState(false)
  const [settingsOptionDisplay,setSettingsOptionDisplay]=useState(false)
 
  const lessFunc =()=>{
            setLess(!less)
            setcolBoxDis("")
            setMoreUI('')
  }

  const addTodo =() =>{
    if (state.title || state.cont) {
      setTodos([{...state},...todos])
    }
      setState({title:'',cont:''})
    }
  
  
    const handlePalette =()=>{
          setcolBoxDis(!colBoxDis)
          setMoreUI('')
        }
    const handleDarkMode=()=>{
       setDarkMode(!darkMode)
    }  
    
    const handleMoreUI = ()=>{
      setMoreUI(!moreUI)
      setcolBoxDis("")
    }  
    const handleTodoMoreUI =() =>{
      setTodoMoreUI(!todoMoreUI)
    }
    const handleSettingsOptionDisplay =()=>{
      setSettingsOptionDisplay(!settingsOptionDisplay)
      setDarkMode(!darkMode)
    }
     
   
    
    return (
        <section 
        //  style={{ backgroundColor: darkMode ? 'grey' : "white"  }}
          >
              
               {/* // settings */}
                <div className={ settingsCont ? styles.settingsField : styles.lessSettingsField}>
                        <div>
                                <span onClick={handleSettingsOptionDisplay}>setting</span>
                                <span onClick={handleDarkMode}>enable dark theme</span>
                                <span>send  feedback</span>
                                <span>help</span>
                                <span>app download</span>
                                <span>keyboard shortcut </span>
                        </div>
                </div>

                  {/* typing field */}
            <div style={{ backgroundColor: state.bgColor }} className={less ?  styles.typespace : styles.lessCont}>
                <div className={styles.flexTitle}>
                      <textarea 
                            placeholder="title" 
                            style={
                              {resize:'none',
                               outline:'none',
                               border:'none',
                               fontSize:"18px",
                               fontWeight:600,
                               paddingTop:"-15px",
                               marginTop:'20px',
                               width:"90%", 
                               height:"40px" , 
                               borderRadius:'10px', 
                               paddingLeft:'30px'}
                                 }
                            onDoubleClick={lessFunc}
                            value={state.title}
                            onChange={e=> setState(title => ({...state,title:e.target.value}))}
                            // {e => setN(n => ({ ...n, title: e.target.value }))}                          
                             ></textarea>
                      <span class="material-symbols-outlined" style={{fontSize:"30px",marginTop:'15px',cursor:"pointer"}} >check_box</span>
                      <span class="material-symbols-outlined" style={{fontSize:"30px",paddingRight:"20px",marginTop:'15px' , cursor:'pointer'}}>image</span>
                      
                </div>
                <div id='noteDiv'>
                <textarea 
                     placeholder="write a note..." 
                     style={
                         {resize:'none',
                         outline:'none',
                         border:'none',
                         fontSize:"18px",
                         height:'120px',
                         fontWeight:600,
                         paddingTop:"15px",
                         width:"90%" , 
                         borderRadius:'10px', 
                         paddingLeft:'10px'}
                             }
                        value={state.cont}
                        onChange={e => setState(cont=>({...state,cont:e.target.value}))}
                       
                         ></textarea>
                </div>
                <div className={ styles.typingIcons}>
                <span class="material-symbols-outlined" onClick={addTodo}>add_alert</span>
                <span class="material-symbols-outlined" >person_add</span>
                <span class="material-symbols-outlined" onClick={handlePalette} >palette</span>
                <span class="material-symbols-outlined">image</span>
                <span class="material-symbols-outlined">system_update_alt</span>
                <span class="material-symbols-outlined" onClick={handleMoreUI}>more_vert</span>
                <span class="material-symbols-outlined">undo</span>
                <span class="material-symbols-outlined">redo</span>
                <span onClick={lessFunc}>close</span>
                </div>
                
                
            </div>

            {/* icons functionallity 
                 color palette for color */}
                 <div className={colBoxDis ? styles.colorBox : styles.hidePalette}>
                      
                      <span onClick={() => setState({ ...state, bgColor: "white" })} style={{backgroundColor:"white"}} id="white"></span>
                      <span onClick={() => setState({ ...state, bgColor: "red" })} style={{backgroundColor:"red"}} id="red"></span>
                      <span onClick={() => setState({ ...state, bgColor: "green" })} style={{backgroundColor:"green"}} id="green"></span>
                      <span onClick={() => setState({ ...state, bgColor: "blue" })} style={{backgroundColor:"blue"}} id="blue"></span>
                      <span onClick={() => setState({ ...state, bgColor: "orange" })} style={{backgroundColor:"orange"}} id="orange"></span>
                      <span onClick={() => setState({ ...state, bgColor: "aqua" })} style={{backgroundColor:"aqua"}} id="aqua"></span>
                      <span onClick={() => setState({ ...state, bgColor: "yellow" })} style={{backgroundColor:"yellow"}} id="yellow"></span>
                      <span onClick={() => setState({ ...state, bgColor: "brown" })} style={{backgroundColor:"brown"}} id="brown"></span>
                      <span onClick={() => setState({ ...state, bgColor: "gold" })} style={{backgroundColor:"gold"}} id="gold"></span>
                      <span onClick={() => setState({ ...state, bgColor: "sky" })} style={{backgroundColor:"skyBlue"}} id="skyBlue"></span>
                      <span onClick={() => setState({ ...state, bgColor: "gray" })} style={{backgroundColor:"gray"}} id="gray"></span>
                      <span onClick={() => setState({ ...state, bgColor: "purple" })} style={{backgroundColor:"purple"}} id="purple"></span>
                      <span onClick={() => setState({ ...state, bgColor: "pink" })} style={{backgroundColor:"pink"}} id="pink"></span>
                       <p>select more <a href='www.google.com'>colors</a></p>

                 </div>
                    {/* typing field "more" settings */}
                 <div className={moreUI ? styles.moreUI : styles.hideMoreUI}>
                  <span>Delect note </span>
                  <span>Add label</span>
                  <span>Make a copy</span>
                  <span>Show checkbox </span>
                  <span>copy to google docs</span>

                 </div>

                 {/* when settings is clicked; settings option to display .... */}
                
                 <div className={settingsOptionDisplay ? styles.settingsOption : styles.settingsOptionCss }>
                          <div>
                               <h1 style={
                                    {textTransform:'capitalize',
                                     color:'black', 
                                     fontSize:'x-large',
                                     paddingTop:"15px"}}>setting</h1>
                            <h2 style={
                              {margin:"50px 0px 0px -190px",
                              paddingBottom:'10px',
                              fontSize:"large",
                              color:'blue',
                              fontWeight:"bold"}}>Notes and Lists</h2>
                                <span className={styles.setOptItems}>add new items to the bottom<input  style={{transform: 'translate(40px,0px)',width:'100px',height:'15px'}} type='checkbox'/></span><br/>
                                <span  className={styles.setOptItems}>move checked items to buttom<input style={{transform: 'translate(28px,0px)',width:'100px',height:'15px'}} type='checkbox'/></span><br/>
                                <span className={styles.setOptItems}>display rich link previews<input style={{transform: 'translate(75px,0px)',width:'100px',height:'15px'}}type='checkbox'/></span><br/>
                                <span className={styles.setOptItems}>enable dark theme<input style={{transform: 'translate(122px,0px)', width:'100px',height:'15px'}}   type='checkbox'/></span><br/>
                           </div>

                          <div>
                            <h2 style={
                              {margin:"30px 0px 0px -160px",
                              paddingBottom:'10px',
                              fontSize:"large",
                              color:'blue',
                              fontWeight:"bold"}}>Remaider defaults</h2>
                                <span className={styles.setOptItems_one}>morning <input className={styles.mm} type='text'/></span><br/>
                                <span className={styles.setOptItems_one}>Afternoon<input style={{marginLeft:'65px'}} className={styles.mm} type='text'/></span><br/>
                                <span className={styles.setOptItems_one}>evening<input className={styles.mm} type='text'/></span><br/>
                          </div>
                          <div>
                            <h2 style={
                              {margin:"30px 0px 0px -250px",
                              paddingBottom:'10px',
                              fontSize:"large",
                              color:'blue',
                              fontWeight:"bold"}}>sharing</h2>
                                <span className={styles.setOptItemsTwo}>enable sharing<input style={{transform: 'translate(152px,0px)', width:'100px',height:'15px'}}type='checkbox'/></span>
                                
                          </div>
                          <span className={styles.setoptCanBtn}>cancel</span>
                          <span className={styles.setoptSavBtn}>save</span>
                 </div>

            {/* todo items */}
           
                <div  className={styles.todoField }>
                  {todos.map(currentTodo=>(
                     <div className={todosDisplay? styles.todoFieldItems: styles.todoFieldDisplay}>
                            <div>
                                <span class="material-symbols-outlined" style={{float:"right",paddingRight:'10px',paddingTop:"5px", zIndex:"10", position:"relative"}}>push_pin</span>
                             </div> 
                             <textarea placeholder='empty title' className={styles.todoTitleInput}  value={currentTodo.title} ></textarea>
                             <textarea placeholder='empty note' className={styles.todoNoteInput} value={currentTodo.cont}></textarea>                                  
                             <div className={styles.todoIcons}>
                                   <div className={styles.closingIcons}><span class="material-symbols-outlined">add_alert</span></div>
                                   <div className={styles.closingIcons}><span class="material-symbols-outlined" >person_add</span></div>             
                                   <div className={styles.closingIcons}><span class="material-symbols-outlined">palette</span></div>
                                   <div className={styles.closingIcons}><span class="material-symbols-outlined">image</span></div>
                                   <div className={styles.closingIcons}><span class="material-symbols-outlined">system_update_alt</span></div>  
                                   <div className={styles.closingIcons}><span class="material-symbols-outlined" onClick={handleTodoMoreUI}>more_vert</span></div>              
                              </div>
                                  <div className={todoMoreUI ? styles.todoMoreUI : styles.hideTodoMoreUI }>
                                      <span>Delect note </span>
                                      <span>Add label</span>
                                      <span>Make a copy</span>
                                      <span>Show checkbox </span>
                                      <span>copy to google docs</span>

                                  </div>
                     </div>
                  ))}

                </div>
            
        </section>
    )
}

 
                                                          
                   
                                 












// import { useState } from "react"
// import styles from "./keeps.module.css"
// export default function MainComp(){
//    const [less, setLess]=useState(false)
//    const [todos, setTodos]=useState([])
 
 
//    const[title, setTitle]=useState('')
//    const [updTitle, setupdTitle]=useState(title)

//    const [note, setNote]= useState('')
//    const [updNote, setUpdNote]= useState(note)
 
//    const [n, setN] = useState({
//        title: '',
//        content: '',
//    })
 
//     function addTodo(){
//        console.log(n)
//        if(n.title){
//            setTodos([{ ...n}, ...todos])
//            setN({ title: '', content: '' })
//         }
//     function handleTile(e){
//        setTitle(e.target.value)
             
//     }
//     function handleUpdTitle(){
//            setupdTitle(title)
//            setTitle("")
//     }
//     function handleNote(e){
//        setNote(e.target.value)
//     }
//     function handleUpdNote(){
//        setUpdNote(note)
//        setNote('')
//     }
  
 

//    const lessNote =()=>{
//        setLess(!less)
//        // setLess(true)
    
//    }

  
  
 
 
//    return(
//       <section>
//                <div>
//                <div className={styles.setOpt}> 
//                        <span>setting</span>
//                        <span>enable dark theme</span>
//                        <span>send  feedback</span>
//                        <span>help</span>
//                        <span>app download</span>
//                        <span>keyboard shortcut </span>
//                    </div>
//                    </div>
                 
//                    {/* typing space  */}
//        <div>
//                <div className={ less ? styles.typingSpace : styles.lessNote}>
             
//                    <flex className={styles.flexTitle}>
//                        {/* input for Title */}
//                            <textarea 
//                                className={styles.titleInput} 
//                                placeholder="Title" 
//                                onChange={e => setN(n => ({ ...n, title: e.target.value }))}
//                                value={n.title}
//                                onClick={lessNote}>
//                            </textarea>
//                        <i class="material-symbols-outlined" style={ {fontWeight:500}} >push_pin</i>
//                    </flex>
//                    input for note
//                            <textarea 
//                                    className={styles.noteInput}
//                                    placeholder="Take a note...."
//                                    //  onChange={handleNote}
//                                    onChange={e => setN(n => ({ ...n, content: e.target.value }))}
//                                    value={n.content}>
//                            </textarea>
//                            <div className={styles.mainSearchIcons}>
//                                    <div className={styles.closingIcons}>
//                                            <span class="material-symbols-outlined">add_alert</span>
//                                        </div>
//                                       <div className={styles.closingIcons}>
//                                              <span class="material-symbols-outlined" onClick={()=>{handleUpdTitle();handleUpdNote();addTodo()} } >person_add</span>
//                                       </di                                                                                             
//                                                   <div className={styles.closingIcons}>
//                                           <span class="material-symbols-outlined" >palette</span>
//                                       </div>
//                                       <div className={styles.closingIcons}>
//                                           <span class="material-symbols-outlined">image</span>
//                                       </div>
//                                       <div className={styles.closingIcons}>
//                                           <span class="material-symbols-outlined">system_update_alt</span>
//                                       </div>                                
//                                       <div className={styles.closingIcons}>
//                                           <span class="material-symbols-outlined">more_vert</span>
//                                       </di                                 
//                                       <div className={styles.closingIcons}>
//                                           <span class="material-symbols-outlined">undo</span>
//                                       </di                                 
//                                       <div className={styles.closingIcons}                                       <span class="material-symbols-outlined">redo</span>
//                                        </div                                 
//                                            <span  className={styles.closing} onClick={lessNote}>close</span                                                                   
//                                </div>
//          </div>
//                </div>
//                {/* todo list bought down */}
//                <div>
//                        {/* {products.map((product, index) => (di))} */}
//                        {/* {console.log(todos)} */}
//                       <div  className={styles.todoField}>
//                        {todos.map((todo)=>                      
//                                    <div className={styles.todoFieldItems}>
//                                    <div><span class="material-symbols-outlined" style={{float:"right", paddingRight:'10px',paddingTop:"5px", zIndex:"10",position:"relative"}}>push_pin</span></div> 
//                                        <textarea placeholder="Title" className={styles.todoTitleInput} value={todo.title}></textarea>
//                                        <textarea placeholder="take note..." className={styles.todoNoteInput}value={todo.content} ></textarea                                  
//                                        <div >
//                                            <div className={styles.todoIcons}>
//                                            <div className={styles.closingIcons}><span class="material-symbols-outlined">add_alert</span></div>
//                                        <div className={styles.closingIcons}><span class="material-symbols-outlined" >person_add</span></div>             
//                                        <div className={styles.closingIcons}><span class="material-symbols-outlined">palette</span></div>
//                                        <div className={styles.closingIcons}><span class="material-symbols-outlined">image</span></div>
//                                        <div className={styles.closingIcons}><span class="material-symbols-outlined">system_update_alt</span></div>  
//                                        <div className={styles.closingIcons}><span class="material-symbols-outlined">more_vert</span></div>              
//                                            </div>
//                                        </div>
                             
//                             </div>                                                                
//                         ))}
//                      </div>               
//                 </div>           
//        </section>        
//     )
//   }}