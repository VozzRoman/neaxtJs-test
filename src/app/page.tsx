import { getAllTasks } from "@/api/api";
import Addtasks from "./components/Addtasks";
import ToDoList from "./components/ToDoList";


const Home = async () => {
	const { data, error } = await getAllTasks();
// const tasks = await getAllTasks();

console.log(data);
	if(error){
		return (
			<main className="max-w-4xl mx-auto mt-4">
			{/* контейне в которм все по центру */}
			{/* <div className="text-center my-5 flex flex-col gap-4">
				<h1 className="text-2xl font-bold">Todo List App</h1>
				<Addtasks/>
			</div> */}
			<h3 className="text-red-500 text-2xl text-center">{error}</h3>
		 </main>
		)
	}
  return (
    <main className="max-w-4xl mx-auto mt-4">
		{/* контейне в которм все по центру */}
		{/* <div className="text-center my-5 flex flex-col gap-4">
			<h1 className="text-2xl font-bold">Todo List App</h1>
			<Addtasks/>
		</div> */}
		<ToDoList tasks={data!}/>
    </main>
  );
}


export default Home;