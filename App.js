import logo from './logo.svg';
import './App.css';
import HeaderComp from './HeaderComp';
import SideBarComp from './SideBarComp';
import Maincomp from './Maincomp';
import { useState } from 'react';

function App() {
  
  
  const [darkMode,setDarkMode]=useState(false)
  const [settingsCont, setSettingsCont]= useState(false)
   const [openSide,setOpenSide]= useState(true)
  //  const [openSideItem,setOpenSideItem]=useState(false)
  const [todosDisplay,setTodosDisplay]=useState(false)
  
  
  return (
    < div style={{ backgroundColor: darkMode ? 'grey' : 'white'}} className="App">
      <HeaderComp
         // darkMode={darkMode}
        settingsCont={settingsCont}  tsetSettingsCont={setSettingsCont}
         openSide={openSide}    tsetOpenSide={setOpenSide}
        //  openSideItem={openSideItem}    topenSideItem={setOpenSideItem}
        todosDisplay={todosDisplay}  setTodosDisplay={setTodosDisplay}
       
      />
      <SideBarComp
        // darkMode={darkMode}
        openSide={openSide}
        // openSideItem={openSideItem} 
      />
      <Maincomp 
         darkMode={darkMode}
         setDarkMode={setDarkMode}
         settingsCont={settingsCont}
         todosDisplay={todosDisplay}
         
        
      />
    </div>
  );
}

export default App;
