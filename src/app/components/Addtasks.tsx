"use client";
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";

import Modal from './Modal';
import InputTasks from './InputTasks';
const Addtasks = () => {
	const [openModal, setOpenModal] = useState<boolean>(false);
	return (
		<div>
			<button onClick={() => setOpenModal(true)} className='btn btn-outline btn-info w-full'>Add new Task <FaPlus /></button>
			<Modal openModal={openModal} setOpenModal={setOpenModal}>
			<InputTasks setOpenModal={setOpenModal}/>
			</Modal>
		</div>
	);
};

export default Addtasks;