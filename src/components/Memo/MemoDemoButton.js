import React from "react";

const MemoDemoButton = (props)=>{
    console.log('click Button')
    return(
        <button onClick={props.onClick}>{props.children}</button>
    )
}
export default React.memo(MemoDemoButton)
