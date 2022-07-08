import React, {useState, useCallback, useMemo} from "react";
import DemoList from "./DemoList";
import MemoDemoButton from "./MemoDemoButton";

const MemoDemo = () =>{
    const [listTitle, setTitle] = useState('My List')
    const changeTitleHandler = useCallback(() => {
            setTitle('Short List')
        },[]);
    const listData = useMemo(()=>[8,9,6,3,2,4,5,7,1], [])
    return(
        <div>
             <DemoList title={listTitle} items={listData}></DemoList>
            <MemoDemoButton onClick={changeTitleHandler}>Change Title</MemoDemoButton>
        </div>
    )
}
export default MemoDemo
