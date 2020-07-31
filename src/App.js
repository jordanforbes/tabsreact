import React, { useState } from 'react';
import Tab from './components/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';


const App=()=>{
    const[activeState, setActiveState]=useState(0)
    const [arr, setArr] = useState(["this is Tab1","this is Tab2","this is Tab3"])
    return(
        <Tab arr ={arr} activeState={activeState} setActiveState={setActiveState}/>
    )
}

export default App;