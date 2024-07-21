import { getAllTasks, getIdTask } from '@/api/api';
import Link from 'next/link';
import React, { FC } from 'react';

interface TodoInfo {
	params: {
		id: string
	}
}
export const generateMetadata = ({params}: TodoInfo ) => {
	return {
		title: `Task${params.id}`,
	}
}

export const generateStaticParams = async() => {
	const {data} = await getAllTasks();

	return data!.map(task => ({
		id: String(task.id),
	}))
}

const TodoInfo: FC<TodoInfo> = async ({params}) => {

	const {todo } = await getIdTask(params.id);
	console.log("TASK", todo);
	
	return (
		<div>
		<p>{todo?.title}</p>
			<Link href='/' className='underline'>назад</Link>
		</div>
	);
};

export default TodoInfo;