import style from './Modal.module.css'
const Modal = (props) =>{
    function closeModalClick(e){ props.closeModal(false)}
    return (
        <div id={style['open-modal']} className={`${style['modal-window']} ${props.status && style.open}`}>
            <div>
                <a href="#" title="Close" onClick={closeModalClick} className={style['modal-close']}>Close</a>
                <header>Modal Header</header>
                <span>Modal body</span>
            </div>
        </div>
    )
}

export default Modal
