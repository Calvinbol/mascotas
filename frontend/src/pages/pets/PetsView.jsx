import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAllMascotas } from "../../Services/pets.service";
import "./PetsView.css";

function PetsView() {
  const [pets, setPets] = useState([]);
  const { animal } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllAnimals() {
      try {
        let response;
        if (animal === "perros" || animal === "gatos") {
          response = await getAllMascotas(`?type=${animal.slice(0, -1)}`);
        } else {
          response = await getAllMascotas("");
        }
        setPets(response);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    }
    getAllAnimals();
  }, [animal]);

  const animalString = animal
    ? animal.charAt(0).toUpperCase() + animal.slice(1)
    : "Todos";

  return (
    <div className="pets-container">
      <h1>{animalString} en adopción</h1>
      <div className="pets-links">
        {pets.length > 0 &&
          pets.map((pet) => (
            <div
              key={pet.id}
              className="card"
              onClick={() => navigate(`/adoptar/animal/${pet.id}`)}
            >
              <p style={{ color: "#0044ad" }}>{pet.name}</p>
              <p>{pet.race}</p>
              <p>{pet.age}</p>
              <p>{pet.size}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PetsView;
