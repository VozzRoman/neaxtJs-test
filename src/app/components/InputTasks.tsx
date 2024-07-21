import { addTodDo } from '@/api/api';
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';
import { uuid } from 'uuidv4';

interface InputTaskProp {
	setOpenModal: (value: boolean) => void;
}

const InputTasks: FC<InputTaskProp> = ({setOpenModal}) => {
	const [body, setBody] = useState<string>('');
	const [error, setError] = useState<string>('');
	const router = useRouter()



	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		
		e.preventDefault();
		
		const data = {
			userId: "",
			id: uuid(),
			title: body,
			completed: false
		}

	if(body === ""){ 
		return setError('введіть значення')
	}

 await addTodDo(data)
	

	// if(reponse.error){
	// 	setError(reponse.error)
	// 	return

	// }
		setBody('');
		setError('')
		setOpenModal(false);
		
		router.refresh();
	 };

	return (
	<form onSubmit={handleSubmit}>
	<h2 className='text-xl font-bold mb-2'>Add new to do</h2>
	<div className='flex'>
	<input value={body} onChange={(e) => setBody(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full" />
	<button type='submit' className=' ml-2 btn btn-success'>Submit</button>
	
	</div>
	<p className='text-red-500 mt-2'>{error}</p>
	</form>
	);
};

export default InputTasks;