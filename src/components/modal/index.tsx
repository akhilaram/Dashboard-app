import React from 'react';

interface IProps {
    header?: string,
    show: boolean,
    children: any,
    handleClose: VoidFunction,
}
export const Modal: React.FC<IProps> = ({ header, show, children, handleClose }) => {
    const showHideClassName = show ? "display-block" : "display-none";

    return (
        <div className={`modal ${showHideClassName}`}>
            <div className="modal-main">
                <div className="modal-header">
                    <h2>{header}</h2>
                    <button className="modal-close" type="button" onClick={handleClose}>
                        X
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};