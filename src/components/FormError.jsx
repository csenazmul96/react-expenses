import React, {useState} from "react";
import Card from "./UI/Card";
import './NewExpen/AddNewExpen.css'
import './FormError.css'
import styled from 'styled-components'
const FormError = ()=>{
    const [topics, setTopic] = useState([
        {name: 'Bangla'},
        {name: 'English'},
        {name: 'Math'},
        {name: 'Science'},
    ]);
    const [title, setTitle] = useState('')
    const [error, setError] = useState(false)

    const NewDiv = styled.div`
        height:12px;
        width:200px;
        background:red
    `
    const titleHandle = event => {
        setTitle(event.target.value)
        setError(false)
    }
    const addTopic = e =>{
        e.preventDefault()
        if(title.trim().length === 0){
            setError(true)
            return
        }

        setTopic((exisData)=>{
            return [{name: title}, ...exisData]
        })

    }
    return (
        <div>
            <Card className="expense">
                <form>
                    <NewDiv></NewDiv>
                    <div className="new-expense__controls" >
                        <div className={`new-expense__control ${error ? 'xx' : ''}`}>
                            <input type="text" onChange={titleHandle} style={error ? {border: '1px solid red'} : null} />
                        </div>
                        <div className="new-expense__actions">
                            <button  type="submit" onClick={addTopic} >Add New</button>
                        </div>
                    </div>
                </form>
                <ul className="expenses-list">
                    {topics.map((item, i)=>(<div className="expense-item__description" key={i}>
                        <h2>{item.name}</h2>
                    </div>))}
                </ul>
            </Card>
        </div>
    )
}
export default FormError
