import React from 'react'

const Tab=props=>{
    console.log(props)

    const showTab=(e)=>{
        console.log("show tab 1",e)
        if(e==0){
            return(
                <div>Tab 1</div>
            )
        }else if(e==1){
            return(
                <div>Tab 2</div>
            )
        }else if(e==2){
            return(
                <div>Tab 3</div>
            )
        }
    }
    const Tab1=e=>{
        props.setActiveState(0)
        console.log(e.target)
        showTab(0)
    }
    const Tab2 = (e) => {
        props.setActiveState(1)
      console.log(e.target);
      showTab(1);
    };
    const Tab3 = (e) => {
      props.setActiveState(2);
      console.log(e.target);
      showTab(2);
    };
    return(
        <div>
            <div className="row">
                <div val={0} onClick={Tab1} className="btn btn-info">Tab1</div>
                <div onClick={Tab2} className="btn btn-info">Tab2</div>
                <div onClick={Tab3} className="btn btn-info">Tab3</div>
            </div>
            {/* {props.arr.map((item,i)=>(
                <div key={i}>{item}</div>
            )) */}
            {showTab(props.activeState)}
        
        </div>
    )
}

export default Tab;