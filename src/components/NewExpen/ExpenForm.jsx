import {useState} from "react";
import './ExpenForm.css'
const ExpenForm = (props)=>{
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const titleHandle = event => setTitle(event.target.value)
    const amountHandle = event => setAmount(event.target.value)
    const dateHandle = event => setDate(new Date(event.target.value))
    const submitForm = (e)=>{
        e.preventDefault()
        const formData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }
        props.onSubmitForm(formData)
    }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" onChange={titleHandle}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountHandle} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" onChange={dateHandle} />
                </div>
                <div className="new-expense__actions">
                    <button  type="submit" onClick={submitForm}>Add New</button>
                </div>
            </div>

        </form>
    )
}
export default ExpenForm
