import React, { useState } from "react";

const Todo = ({ image, description, onDelete, image2, onEdit }) => {
  const [done, setDone] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(description);

  function handleDone() {
    setDone((prevDone) => !prevDone);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleEditChange(event) {
    setEditValue(event.target.value);
  }

  function handleEditSubmit() {
    onEdit(editValue)
    setEditValue(false);
  }

function handleEditCancel() {
  
  setEditValue(description);
    setIsEditing(false);
}
  function handleKeyDown(event){
    if(event.key === 'Enter'){
      handleEditSubmit()
    } else if(event.key === 'Escape'){
       handleEditCancel()
    }
  }

  return (
    <>
      <div className=" w-full flex justify-between px-4 py-3 items-center  ">
        <div className="flex gap-2">
          <input type="checkbox" className="h-10 px-2" onChange={handleDone} />
          {isEditing ? (
            <>
            <input
              type="text"
              name="edit"
              id="edit"
              value={editValue}
              onKeyDown={handleKeyDown}
              onChange={handleEditChange}
              className="flex gap-2 items-center text-black text-xl"
              onBlur={handleEditSubmit}
            />

            <button onClick={handleEditSubmit}>Save</button> 
            <button onClick={handleEditCancel}>Cancel</button>
            </>
            
          ) : (
            <>


            <div className=" flex gap-48">
            <p
              className={`flex gap-2 ${
                done ? "line-through" : ""
              } items-center text-white  text-xl`}
            >
              {description}
            </p>
            <div className="flex gap-3 items-center">
          <img src={image2} alt="" className=" h-6" onClick={handleEdit} />
          <div className="bg-slate-200 h-8 w-8 flex items-center justify-center rounded-full shadow-2xl">
            <img
              src={image}
              alt="delete"
              className="h-6 cursor-pointer"
              onClick={onDelete}
            />
          </div>
        </div>
            </div>

            </>
            


          )}
        </div>

        
      </div>
      <hr className="w-full border-red-100 " />
    </>
  );
};

export default Todo;
