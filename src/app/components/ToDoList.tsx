
import { TasksI } from '@/types/types';
import React, { FC } from 'react';
import Task from './Task';

interface ToDoProps {
	tasks: TasksI[]
}

const ToDoList: FC<ToDoProps> = ({tasks}) => {
	return (
		<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>To dos</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
       {tasks.map((task, index) => <Task key={task.id} task={task} index={index}/>)}
    </tbody>
  </table>
</div>
	);
};

export default ToDoList;