"use client"
import { Fragment, useState } from "react";
import Modal from "../Modal/Modal";
import React from 'react'

const Button = () => {
const [showModal, setShowModal] = useState (false);
const [showModal1, setShowModal1] = useState (false);
const [showModal2, setShowModal2] = useState (false);

const handleClick = () =>{
setShowModal(true)

}

const handleClick1 = () =>{
  setShowModal(true)
  
  }


  const handleClick2 = () =>{
    setShowModal(true)
    
    }

const handleClose = () =>{
setShowModal(false)

}

  return (

    <Fragment>


<div className="p-10 text-center">

  <h1 className="text-3xl mb-5">Create modal in react</h1>


<button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5" onClick={handleClick}>Text Modal</button>

<button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5"  onClick={handleClick1}>video Modal</button>

<button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5"  onClick={handleClick2}>Form Modal</button>
</div>


<Modal isVisible={showModal} onClose={handleClose}/> 

<Modal isVisible={showModal1} onClose={handleClose}/> 

<Modal isVisible={showModal2} onClose={handleClose}/> 
    </Fragment>
   
  )
}

export default Button