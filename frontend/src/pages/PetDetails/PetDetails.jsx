import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPetById } from "../../Services/pets.service";
import './PetDetails.css';

function PetDetails() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    async function fetchPet() {
      try {
        const data = await getPetById(id);
        setPet(data);
      } catch (error) {
        console.error("Error fetching pet details:", error);
      }
    }
    fetchPet();
  }, [id]);

  if (!pet) return <p>Loading...</p>;

  return (
    <div className="pet-details">
      <h1>{pet.name}</h1>
      <img src={pet.imageUrl} alt={pet.name} className="pet-image" />
      <p>
        <strong>Raza:</strong> {pet.race}
      </p>
      <p>
        <strong>Edad:</strong> {pet.age}
      </p>
      <p>
        <strong>Tamaño:</strong> {pet.size}
      </p>
      <p>
        <strong>Descripción:</strong> {pet.description}
      </p>
      <Link to="/contacto">
        <button className="adopt-button">Quiero Adoptar</button>
      </Link>
    </div>
  );
}

export default PetDetails;
