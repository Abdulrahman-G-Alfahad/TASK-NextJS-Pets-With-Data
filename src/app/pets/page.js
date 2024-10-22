import { fetchPets } from "@/actions";
import PetsContainer from "./components/PetsContainer";

async function PetsPage() {
  const pets = await fetchPets();
  return <PetsContainer pets={pets} />;
}

export default PetsPage;
