import ExpenForm from "./ExpenForm";
import './AddNewExpen.css'
const AddNewExpen = (props) =>{
    const submitNewExpenForm = (data)=>{
        let formDate = {
            id: Math.random(),
        ...data,
        }
        props.onsubmitForm(formDate)
    }
    return (
        <div className="new-expense">
            <ExpenForm onSubmitForm={submitNewExpenForm} />
        </div>
    )
}
export default AddNewExpen
