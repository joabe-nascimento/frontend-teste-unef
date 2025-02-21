import { useEffect, useState } from 'react';
import { getPeople, deletePerson } from '../services/personService';

const PersonList = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const data = await getPeople();
      setPeople(data);
    };
    fetchPeople();
  }, []);

  const handleDelete = async (id) => {
    await deletePerson(id);
    setPeople(people.filter((person) => person._id !== id));
  };

  return (
    <div>
      <h2>Lista de Pessoas</h2>
      <ul>
        {people.map((person) => (
          <li key={person._id}>
            {person.name} - {person.email} - {person.phone} - {person.birthDate}
            <button onClick={() => handleDelete(person._id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;