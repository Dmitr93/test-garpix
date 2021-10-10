import './modal-window.scss';
import React from 'react';

function ModalWindow({active, desActive, children}) {

    return (
            <div className={active ? "modal active" : "modal"}  onClick={desActive}>
                <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
    );
}

export default ModalWindow;
