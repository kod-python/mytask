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

  return (
    <Fragment>
      <div className="p-10 text-center space-y-7">
        <div className="card-body h-[290px] w-[350px] bg-gray-400 rounded p-[30px]">
          <h2 className="pb-[50px] text-[2rem] text-white">Today</h2>

          <div className="flex justify-end gap-1">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-3 py-2 text-center"
              onClick={handleClick}
            >
              <div className="flex items-center gap-2">
                Today Add
                <FaPlus />
              </div>
            </button>
            <div className="flex items-center">
              <FaEdit size={20} className="text-white" />
              <MdDeleteForever size={20} className="text-white"/>
            </div>
          </div>
        </div>




        <div className="card-body h-[290px] w-[350px] bg-gray-400 rounded p-[30px]">
          <h2 className="pb-[50px] text-[2rem] text-white">Progress</h2>

          <div className="flex justify-end gap-1">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-3 py-2 text-center"
              onClick={handleClick1}
            >
              <div className="flex items-center gap-2">
                Progress Add
                <FaPlus />
              </div>
            </button>
            <div className="flex items-center">
              <FaEdit size={20} className="text-white" />
              <MdDeleteForever size={20} className="text-white"/>
            </div>
          </div>
        </div>




        <div className="card-body h-[290px] w-[350px] bg-gray-400 rounded p-[30px]">
          <h2 className="pb-[50px] text-[2rem] text-white">Complete</h2>

          <div className="flex justify-end gap-1">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-3 py-2 text-center"
              onClick={handleClick2}
            >
              <div className="flex items-center gap-2">
                Complete Add
                <FaPlus />
              </div>
            </button>
            <div className="flex items-center">
              <FaEdit size={20} className="text-white" />
              <MdDeleteForever size={20} className="text-white"/>
            </div>
          </div>
        </div>


      </div>

      <Modal isVisible={showModal} onClose={handleClose}>
        <h1>Today</h1>
      </Modal>

      <Modal isVisible={showModal1} onClose={handleClose1}>
        <h1>Progress</h1>
      </Modal>

      <Modal isVisible={showModal2} onClose={handleClose2}>
        <h1>Complete</h1>
      </Modal>
    </Fragment>
  );
};

export default Button;
