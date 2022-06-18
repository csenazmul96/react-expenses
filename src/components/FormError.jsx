import React, {useState} from "react";
import Card from "./UI/Card";
import './NewExpen/AddNewExpen.css'
import './FormError.css'
import styled from 'styled-components'
const NewDiv = styled.div`
    & input{
        width: 100%;
        border: 2px solid ${props=> (props.invalid ? "red" : 'green')}
    }
`;
const FormInner = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & div{
        flex: 1 0 31%;
    }
`
const NewUl = styled.ul`
    color: #fff;
`
const FormError = ()=>{

    const [topics, setTopic] = useState([
        {name: 'Bangla'},
        {name: 'English'},
        {name: 'Math'},
        {name: 'Science'},
    ]);
    const [title, setTitle] = useState('')
    const [error, setError] = useState(false)


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

        setTopic((exisData)=>{
            return [{name: title}, ...exisData]
        })

    }
    return (
        <Card className="expense">
            <form>
                <FormInner>
                    <NewDiv className={`new-expense__control`} invalid={error}>
                        <input type="text" onChange={titleHandle} style={error ? {border: '1px solid red'} : null} />
                    </NewDiv>
                    <div className="new-expense__actions">
                        <button  type="submit" onClick={addTopic} >Add New</button>
                    </div>
                </FormInner>
            </form>
            <NewUl className="expenses-list">
                {topics.map((item, i)=>(<div className="expense-item__description" key={i}>
                    <h2>{item.name}</h2>
                </div>))}
            </NewUl>
        </Card>
    )
}
export default FormError
