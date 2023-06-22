import React from 'react'

const Modal = ({ setShowModal }) => {
    return (
        <div className='modal'>
            <div>
                <p>please signup first</p>
                <button onClick={() => setShowModal(false)}>Ok</button>
            </div>
        </div >
    )
}

export default Modal