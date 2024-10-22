import { addPet } from "@/actions";
import Input from "@/components/Input";
import React, { useState } from "react";

function Modal() {
  const [show, setShow] = useState(false);

  if (!show)
    return (
      <button
        className="ml-auto w-[25%] px-3 py-2 rounded-md text-sm md:text-xl border border-black  flex justify-center items-center bg-green-400 hover:bg-green-600"
        onClick={() => {
          setShow(true);
        }}
      >
        Add pet
      </button>
    );

  return (
    <div className="inset-0 fixed  flex justify-center items-center flex-col z-20 overflow-hidden">
      <div className="bg-black absolute z-0 opacity-70 inset-0 "></div>
      <form
        action={addPet}
        className="relative z-10 flex flex-col gap-3 border-[3px] border-black rounded-md w-[95%] md:w-[40%] h-[300px] md:h-[30%] bg-white pt-[50px]"
      >
        <button
          className="right-0 top-2 absolute w-[70px] border border-black rounded-md ml-auto mr-5 hover:bg-red-400"
          onClick={() => setShow(false)}
        >
          Close
        </button>
        <Input title="Pet Name" name="name" />
        <Input title="Pet Type" name="type" />
        <Input title="Pet Image Link" name="image" />
        <button
          type="submit"
          className="w-[70px] border border-black rounded-md ml-auto mr-5 hover:bg-green-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Modal;
