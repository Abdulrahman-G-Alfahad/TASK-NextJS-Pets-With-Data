import ImageWithFallback from "@/components/ImageWithFallback";
import { redirect } from "next/navigation";

import ActionButtons from "./components/ActionButtons";
import { fetchPetById } from "@/actions";

async function PetDetailPage({ params }) {
  const { id } = await params;

  let pet;

  try {
    pet = await fetchPetById(id);
  } catch (error) {
    console.error("Pet not found");
    redirect("/pets");
  }

  const { image, name, type, adopted } = pet;

  return (
    <div className="w-screen h-[90vh] flex justify-center items-center">
      <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
        <div className="h-full w-full md:w-[35%]">
          <ImageWithFallback
            src={image}
            alt={name}
            className="object-contain w-full h-full"
            width={200}
            height={200}
          />
        </div>
        <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
          <h1>Name: {name}</h1>
          <h1>Type: {type}</h1>
          <h1>adopted: {adopted ? "yes" : "no"}</h1>
          <ActionButtons pet={pet} />
        </div>
      </div>
    </div>
  );
}

export default PetDetailPage;
