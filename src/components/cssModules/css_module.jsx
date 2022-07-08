import Card from "../UI/Card";
import style from './css_module.module.css'
import React, {useState, useRef, Fragment, useEffect} from "react";
import Modal from "./Modal";
import ReactDom from 'react-dom'
const ModalComponent = (props) =>{
    const trigerCloseModal = (data)=> props.closeModal(false)
    return <Modal status={props.comStatus} closeModal={trigerCloseModal} />
}
const CssModule = ()=>{
    const [error, setError] = useState(false)
    const [title, setTitle] = useState('')

    const refData = useRef();
    if(refData && refData.current){
        console.log(refData.current.value)
    }


    const titleHandle = event => {
        event.preventDefault()
        setTitle(event.target.value)
        setError(false)
    }
    const addTopic = e =>{
        e.preventDefault()
        refData.current.value = 'd'
        if(title.trim().length === 0){
            setError(true)
            return
        }
    }
    const [modalStatus, setModalStatus] = useState(false)
    const closeModalComponent = ()=>{
        setModalStatus((props)=>{
            setModalStatus(false)
        })
    }
    return (
        <Fragment>
            <Card className="expense">
                <p>This is Module CSS component</p>
                <div className={style.mulule_css}>
                    <div className={`${style['form-control']} ${error && style.invalid}`}>
                        <input type="text" onChange={titleHandle} ref={refData} />
                    </div>
                    <div className="new-expense__actions">
                        <button  type="submit" onClick={addTopic} >Add New</button>
                        <button  type="button" onClick={()=>setModalStatus(true)} >Open Modal</button>
                        {refData && refData.current ? refData.current.value : null}
                    </div>
                </div>
            </Card>
            {ReactDom.createPortal(<ModalComponent comStatus={modalStatus} closeModal={closeModalComponent} />, document.getElementById('modal-root'))}
        </Fragment>
    )
}
export default CssModule
