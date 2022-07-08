import React, {useMemo} from "react";
const DemoList = props =>{
    const {items} = props
    const sortedList = useMemo(()=>{
        console.log('item sorted')
        return items.sort((a,b)=>a-b)
    }, [items])
    console.log('list component')
    return(
        <div>
            <h3>{props.title}</h3>
            <ul>
                {sortedList.map((item) =>(
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
export default React.memo(DemoList)
