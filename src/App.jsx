import { useState } from "react";

import Todo from "./components/Todo";
import green from "./assets/green.png"



function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
 

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue("");
  }

  const handleDelete = (index)=>{
    setTodos(todos.filter((todo, todoIndex) => todoIndex !== index))
  }

  
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen p-10">
        <h1 className="text-[10rem] font-bold text-slate-200">todos</h1>

        <div className="w-[60%] h-[80%] bg-lime-700 p-8 rounded flex flex-col gap-6">
          <div className="flex w-full bg-white items-center justify-center py-2 rounded-xl px-2 ">
            <input
              type="text"
              placeholder="Add todo..."
              className="w-[90%] outline-none"
              value={inputValue}
              onChange={handleChange}
             
            />
            <button
              className="bg-[#01938D] shadow-2xl h-6 w-6 rounded-full flex text-center items-center justify-center text-2xl font-bold text-white"
              onClick={handleSubmit}
            >
              <p className="pb-[0.4rem]">+</p>
            </button>
          </div>
          <ul className="flex flex-col gap-3">
          {todos.map((todo , index)=> (
            
            <li key={todo} className="">
                <Todo image={green} description={todo} onDelete={()=>handleDelete(index)}/>
            </li>
          ))}
        </ul>
        </div>

        
      </div>
    </>
  );
}

export default App;
