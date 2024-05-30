"use client";
import { Fragment, useState } from "react";
import Modal from "../Modal/Modal";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Button = () => {
 

  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClick1 = () => {
    setShowModal1(true);
  };

  const handleClick2 = () => {
    setShowModal2(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleClose1 = () => {
    setShowModal1(false);
  };

  const handleClose2 = () => {
    setShowModal2(false);
  };


  const [inputValue, setInputValue] = useState('');
    const [displayValue, setDisplayValue] = useState('');

    const handleButton = (e) => {
      e.preventDefault()
        setDisplayValue(inputValue);  
    };


const InputValue = (e) =>{
setInputValue(e.target.value)


}


const [inputValue1, setInputValue1] = useState('');
const [displayValue1, setDisplayValue1] = useState('');

const handleButton1 = (e) => {
  e.preventDefault()
    setDisplayValue1(inputValue1);  
};


const InputValue1 = (e) =>{
setInputValue1(e.target.value)


}



const [inputValue2, setInputValue2] = useState('');
const [displayValue2, setDisplayValue2] = useState('');

const handleButton2 = (e) => {
  e.preventDefault()
    setDisplayValue2(inputValue2);
  
     
};


const InputValue2 = (e) =>{
setInputValue2(e.target.value)


}





// const handleButton = (event: ChangeEvent<HTMLInputElement>) => {
//   const { name, value } = event.target;
//   setButton((prev) => ({ ...prev, [name]: value }));
// };

  return (
    <Fragment>
      <div className="p-10 text-center  flex items-center gap-10 ">
        <div className="card-body h-[290px] w-[350px] bg-gray-400 rounded p-[30px]">
          <h2 className="pb-[50px] text-[2rem] text-white">Today</h2>
          
          <div className="pb-[50px]">
          <p className="">Task Input:{displayValue}</p>
       


          </div>
          <div className="flex justify-end gap-5">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-3 py-2 text-center"
              onClick={handleClick}
            >
              <div className="flex items-center gap-2">
                Today Add
                <FaPlus />
              </div>
            </button>
            <div className="flex items-center gap-3">
              <FaEdit size={20} className="text-white" />
              <MdDeleteForever size={20} className="text-white"/>
            </div>
          </div>
        </div>




        <div className="card-body h-[290px] w-[350px] bg-gray-400 rounded p-[30px]">
          <h2 className="pb-[50px] text-[2rem] text-white">Progress</h2>

          <div className="pb-[50px]">
          <p>Task Input:{displayValue1}</p>
       


          </div>
          <div className="flex justify-end gap-5">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-3 py-2 text-center"
              onClick={handleClick1}
            >
              <div className="flex items-center gap-2">
                Progress Add
                <FaPlus />
              </div>
            </button>
            <div className="flex items-center gap-3">
              <FaEdit size={20} className="text-white" />
              <MdDeleteForever size={20} className="text-white"/>
            </div>
          </div>
        </div>




        <div className="card-body h-[290px] w-[350px] bg-gray-400 rounded p-[30px]">
          <h2 className="pb-[50px] text-[2rem] text-white">Complete</h2>
          <div className="pb-[50px]">
          <p>Task Input:{displayValue2}</p>
       


          </div>
          <div className="flex justify-end gap-5">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-3 py-2 text-center"
              onClick={handleClick2}
            >
              <div className="flex items-center gap-2">
                Complete Add
                <FaPlus />
              </div>
            </button>
            <div className="flex items-center gap-3">
              <FaEdit size={20} className="text-white" />
              <MdDeleteForever size={20} className="text-white"/>
            </div>
          </div>
        </div>


      </div>

      <Modal isVisible={showModal} onClose={handleClose}>
        <h1>Today</h1>
        <p>Task Input:{displayValue}</p>
        <form className="flex items-center justify-center gap-3">

          <input type="text" name="Add-Task" value={inputValue} onChange={InputValue} placeholder="Add Task" className="border outline-blue-500 border-blue-500 rounded p-[10px]" />

          <button onClick={handleButton} className="btn ">Add</button>
        </form>
      </Modal>

      <Modal isVisible={showModal1} onClose={handleClose1}>
        <h1>Progress</h1>
        <p>Task Input:{displayValue1}</p>
        <form  className="flex items-center justify-center gap-3">

          <input type="text" name="Add-Task" value={inputValue1} onChange={InputValue1} placeholder="Add Task"className="border outline-blue-500 border-blue-500 rounded p-[10px]" />

          <button onClick={handleButton1}  className="btn ">Add</button>
        </form>
      </Modal>

      <Modal isVisible={showModal2} onClose={handleClose2}>
        <h1>Complete</h1>
        <p>Task Input:{displayValue2}</p>
        <form  className="flex items-center justify-center gap-3">

          <input type="text" name="Add-Task" value={inputValue2} onChange={InputValue2} placeholder="Add Task" className="border outline-blue-500 border-blue-500 rounded p-[10px]" />

          <button onClick={handleButton2}  className="btn ">Add</button>
        </form>
      </Modal>
    </Fragment>
  );
};

export default Button;
