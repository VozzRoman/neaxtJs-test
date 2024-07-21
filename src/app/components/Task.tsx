"use client"
import { TasksI } from '@/types/types';
import React, { FC, useState } from 'react';
import { MdMovieEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import Modal from './Modal';
import EditTask from './EditTask';
import WarningDeleteWindow from './WarningDeleteWindow';
import Link from 'next/link';

interface TaskProp {
	task: TasksI,
	index: number
}
 
const Task:FC<TaskProp> = ({task, index}) => {
	const [openEdit, setOpenEdit] = useState<boolean>(false);
	const [openDelete, setOpenDelet] = useState<boolean>(false);
	return (
		<tr>
		<th>{index + 1}</th>
		<td><Link href={`/${task.id}`}>{task.title}</Link></td>

		<td className='flex items-center justify-end'>
			<MdMovieEdit onClick={() => setOpenEdit(true)} className='mr-5 cursor-pointer' size={25} color='blue'/>
			<FaTrash onClick={() => setOpenDelet(true)} className='cursor-pointer' size={20} color='red'/>
			<Modal openModal={openEdit} setOpenModal={setOpenEdit}>
				<EditTask setOpenModal={setOpenEdit} task={task}/>
			</Modal>
			<Modal openModal={openDelete} setOpenModal={setOpenDelet}>
				<WarningDeleteWindow setOpenModal={setOpenDelet} id={task.id}/>
			</Modal>
		</td>
		</tr>
	);
};

export default Task;