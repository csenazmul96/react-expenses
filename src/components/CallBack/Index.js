import React, {useCallback, useState} from "react";
import DemoOutput from "./DemoOutput";
import Button from "./Button";

const Memo = () =>{
    const [showP, setShowP] = useState(false)
    const [allowToggle, setToggle] = useState(false)
    console.log('On Ready')

    const toggleClickHandler =  useCallback(() =>{
        if(allowToggle)
            setShowP((oldshowP)=> !oldshowP)
    }, [allowToggle])

    const allowToggleAllowHandler = () =>{
        setToggle(true)
    }
    return (
        <div className="card">
            <h1>Hi There!</h1>
            <DemoOutput show={showP} />
            <Button onClick={allowToggleAllowHandler}>allow Toggling</Button>
            <Button onClick={toggleClickHandler}>click me</Button>
        </div>
    )
}
export default Memo
