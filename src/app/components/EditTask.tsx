import { updateTodDo } from '@/api/api';
import { TasksI } from '@/types/types';
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';
import { uuid } from 'uuidv4';

interface EditTaskProp {
	setOpenModal: (value: boolean) => void;
	task: TasksI,
}

const EditTask: FC<EditTaskProp> = ({setOpenModal, task}) => {
	const [body, setBody] = useState<string>(task.title);
	const [error, setError] = useState<string>('');
	const router = useRouter()



	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = {
			userId: "",
			id: task.id.toString(),
			title: body,
			completed: false,
		}

	if(body === ""){ 
		return setError('введіть значення')
	}

	const reponse = await updateTodDo(data)
	console.log(reponse.error);

	if(reponse.error){
		setError(reponse.error)
		return

	}
		setBody('');
		setError('')
		setOpenModal(false);
		
		router.refresh();
	 };

	return (
	<form onSubmit={handleSubmit}>
	<h2 className='text-xl font-bold mb-2'>Update to do</h2>
	<div className='flex'>
	<input value={body} onChange={(e) => setBody(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full" />
	<button type='submit' className=' ml-2 btn btn-success'>Update</button>
	
	</div>
	<p className='text-red-500 mt-2'>{error}</p>
	</form>
	);
};

export default EditTask;