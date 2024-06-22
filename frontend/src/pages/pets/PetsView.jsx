import { useEffect, useState } from 'react';
import './PetsView.css';
import { useParams } from 'react-router-dom';
import { getAllMascotas } from '../../Services/pets.service';

function PetsView() {
  const [pets, setPets] = useState([]);
  const { animal } = useParams();

  useEffect(() => {
    async function getAllAnimals() {
      try {
        const response = await getAllMascotas(animal ? `?type=${animal.slice(0, -1)}` : '');
        setPets(response);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    }

    getAllAnimals();
  }, [animal]);

  return (
    <div className="pets-container">
      <h1>{animal ? animal.charAt(0).toUpperCase() + animal.slice(1) : ''} Mascotas en adopción</h1>
      <div className="pets-links">
        {pets.length > 0 &&
          pets.map((pet, i) => (
            <div key={i} className='card'>
              <p>{pet.name}</p>
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
