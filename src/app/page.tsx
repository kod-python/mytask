import React from 'react';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import FormDetail from './components/FormDetail/FormDetail';


const Page = () => {
  return (
    <main>
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-[3rem] font-bold">Form Task</h1>
    
<FormDetail />



      </div>
   
    </main>
  );
};

export default Page;
