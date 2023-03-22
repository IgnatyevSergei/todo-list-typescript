import React from 'react';
import './modal-window.scss'
import Controller from "../Cotroller";

const ModalWindow = () => {
    return (
        <div className='modal-wrapper'>
            <div className='modal-window-container'>
                <span className='modal-window-container__task-name'>Task name:</span>
                <div className='modal-window-container__title' contentEditable="true" ></div>
                <span className='modal-window-container__task-description'>Task description:</span>
                <textarea className='modal-window-container__description' placeholder='description'/>
                <div className='modal-window-container__btn'>
                    <Controller text='Submit' className='modalBtn'/>
                    <Controller text='Close' className='modalBtn'/>
                </div>
            </div>

        </div>
    );
};

export default ModalWindow;

