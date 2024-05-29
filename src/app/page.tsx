import React from 'react';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';


const Page = () => {
  return (
    <main>
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Todo List App</h1>
    
<Modal />
<Button />

{/* <Button /> */}
      </div>
   
    </main>
  );
};

export default Page;
