import React, { FC, ReactNode } from 'react';

interface ModalProp {
	setOpenModal: (value: boolean) => void;
	openModal: boolean,
	children: ReactNode;

}

const Modal: FC<ModalProp> = ({setOpenModal, openModal, children}) => {
	return (

//класс modal-open есть в самой библеотеке daisyui
<dialog id="my_modal_1" className={`modal ${openModal ? "modal-open" : ""}`}>
  <div className="modal-box">
  <button onClick={() => setOpenModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    {children}
    <div className="modal-action">

    </div>
  </div>
  
</dialog>

	);
};

export default Modal;