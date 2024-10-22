"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const baseUrl = "https://pets-react-query-backend.eapi.joincoded.com";
const headers = new Headers();
headers.append("Content-Type", "application/json");

export async function fetchPets() {
  const response = await fetch(
    "https://pets-react-query-backend.eapi.joincoded.com/pets"
  );
  const pets = await response.json();
  return pets;
}

export async function fetchPetById(id) {
  const response = await fetch(
    `https://pets-react-query-backend.eapi.joincoded.com/pets/${id}`
  );

  let pet;

  try {
    pet = await response.json();
  } catch (error) {
    console.error("Pet not found");
    redirect("/pets");
  }

  return pet;
}

export async function addPet(formData) {
  const pet = Object.fromEntries(formData);
  pet.adopted = 0;

  const response = await fetch(`${baseUrl}/pets`, {
    method: "POST",
    headers,
    body: JSON.stringify(pet),
  });

  const newPet = await response.json();

  revalidatePath("/pets");
}

export async function deletePet(id) {
  const response = await fetch(`${baseUrl}/pets/${id}`, {
    method: "DELETE",
  });

  redirect("/pets");
  revalidatePath("/pets");
  revalidatePath("/pets/[id]", "page");
}
