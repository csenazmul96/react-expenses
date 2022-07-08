import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props)=>{
    console.log('This is from DemoOutput')
    return (
        <MyParagraph>{props.show ? 'This is demo text' : null}</MyParagraph>
    )
}
export default React.memo(DemoOutput)

