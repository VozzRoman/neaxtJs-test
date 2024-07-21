import { TasksI } from "@/types/types";

export interface ResponseI {
	data?: TasksI[]
	error?: string
}

//Так как промис возвращяет не только массив задач но и ошибку поэтому нужно типизировать так что бы можно возарщаеть ошибку строку!
export const getAllTasks = async (): Promise<ResponseI> => {
	try {
	const reponse = await fetch('https://jsonplaceholder.typicode.com/todos', {cache: 'no-store'});

	if (!reponse.ok) {
	  throw new Error("Network response was not ok");
	}
	const data = await reponse.json();
   return {
		data
	};
	} catch (error: any) {
		return {
			error: error.message
		}
		
	}
}

// export const getAllTasks = async (): Promise<TasksI[] | undefined> => {
// 	try {
// 	const reponse = await fetch('http://localhost:5050/taskss');
// 	const data = await reponse.json();
//    return data;
// 	} catch (error) {
		
// 		if(error){
// 			return undefined
// 		}
		
		
// 	}
// }

//AddTodo-----------
export interface ResponseIAdd {
	todo?: TasksI
	error?: string
}

export const addTodDo = async(data: TasksI): Promise<ResponseIAdd> => {
try {
	const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
	method: "POST",
	headers: {
		"Content-Type": "application/json; charset=UTF-8"
	},
	body: JSON.stringify(data)
	
})
if (!response.ok) {
	  throw new Error("не можу додати щось з сервером");
	}
const todo = await response.json();
return {
	todo
};

} catch (error: any) {
	return {
			error: error.message
		}
}
}

//UpdateTodo-----------
// export interface ResponseIAdd {
// 	todo?: TasksI
// 	error?: string
// }

export const updateTodDo = async(data: TasksI): Promise<ResponseIAdd> => {
try {
	const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${data.id}`, {
	method: "PUT",
	headers: {
		"Content-Type": "application/json; charset=UTF-8"
	},
	body: JSON.stringify(data)
	
})
if (!response.ok) {
	  throw new Error("не можу оновити щось з сервером");
	}
const todo = await response.json();
return {
	todo
};

} catch (error: any) {
	return {
			error: error.message
		}
}
}

////DeleteTodo-----------
export interface ResponseIAdd {
	taskId?: string
	error?: string
}

export const deleteTodDo = async(id: string): Promise<ResponseIAdd> => {
	console.log(id);
try {
	const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
	method: "DELETE",
	headers: {
		"Content-Type": "application/json; charset=UTF-8"
	},
	// // body: JSON.stringify(id)
	
})
if (!response.ok) {
	  throw new Error("не можу видалити щось з сервером");
	}
const taskId = await response.json();
return {
	taskId
};

} catch (error: any) {
	return {
			error: error.message
		}
}
}

//FindbyId------
export const getIdTask = async (value: string): Promise<ResponseIAdd> => {

try {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${value}`);
	if (!response.ok) {
		throw new Error("не можу знайти щось з сервером");
	 }
	const todo = await response.json();

	return {
		todo
	}
} catch (error: any) {
	return {
		error: error.message
	}
}
}