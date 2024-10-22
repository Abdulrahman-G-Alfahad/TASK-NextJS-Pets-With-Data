"use client";

import { deletePet } from "@/actions";

function ActionButtons({ pet }) {
  return (
    <>
      {!pet.adopted && (
        <button className="w-[70px] border border-black rounded-md  hover:bg-green-400 my-5">
          Adobt
        </button>
      )}

      <button
        className="w-[70px] border border-black rounded-md  hover:bg-red-400"
        onClick={() => deletePet(pet.id)}
      >
        Delete
      </button>
    </>
  );
}

export default ActionButtons;
