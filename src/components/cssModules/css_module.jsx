import Card from "../UI/Card";
import style from './css_module.module.css'
import React, {useState} from "react";
const CssModule = ()=>{
    const [error, setError] = useState(false)
    const [title, setTitle] = useState('')


    const titleHandle = event => {
        event.preventDefault()
        setTitle(event.target.value)
        setError(false)
    }
    const addTopic = e =>{
        e.preventDefault()
        if(title.trim().length === 0){
            setError(true)
            return
        }
    }
    return (
        <Card className="expense">
            <p>This is Module CSS component</p>
            <div className={style.mulule_css}>
                <div className={`${style['form-control']} ${error && style.invalid}`}>
                    <input type="text" onChange={titleHandle} />
                </div>
                <div className="new-expense__actions">
                    <button  type="submit" onClick={addTopic} >Add New</button>
                </div>
            </div>
        </Card>
    )
}
export default CssModule
