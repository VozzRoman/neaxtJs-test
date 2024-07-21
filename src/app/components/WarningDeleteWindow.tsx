import { deleteTodDo } from '@/api/api';
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';

interface WarningDeleteWindowProp {
	setOpenModal: (value: boolean) => void;
	id: string,
}

const WarningDeleteWindow:FC <WarningDeleteWindowProp> = ({setOpenModal, id}) => {
const [error, setError] = useState<string>('');
const router =  useRouter();
	const handelDelete = async (value: string) => {
		const response = await deleteTodDo(value);
		if(response.error){
			return setError(response.error);
		}
		setOpenModal(false);
		router.refresh();

	}

	return (
		<div>
			<h1 className='text-xl text-center mb-3'>Ви дійсно хочити видалити</h1>
			<div className='flex justify-center'>
				<button onClick={() => setOpenModal(false)} className='btn mr-5 w-[66px]'>No</button>
				<button onClick={() => handelDelete(id.toString())} className='btn btn-error'>Yeas</button>
			</div>
			<p className='text-red-500 text-center'>{error}</p>
		</div>
	);
};

export default WarningDeleteWindow;