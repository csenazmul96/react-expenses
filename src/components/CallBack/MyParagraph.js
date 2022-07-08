import React from "react";

const MyParagraph = (props) =>{
    console.log('this is from p tag')
    return (
        <p>{props.children}</p>
    )
}

export default MyParagraph
