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
    <div style={styles.container}>
      <h2>Lista de Pessoas</h2>
      <ul style={styles.list}>
        {people.map((person) => (
          <li key={person._id} style={styles.listItem}>
            <div style={styles.personInfo}>
              <strong>{person.name}</strong> - {person.email} - {person.phone} - {person.birthDate}
            </div>
            <div style={styles.actions}>
              <button onClick={() => handleDelete(person._id)} style={styles.deleteButton}>
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
  personInfo: {
    flex: 1,
    fontSize: '1rem',
  },
  actions: {
    display: 'flex',
    gap: '10px',
  },
  deleteButton: {
    padding: '8px 16px',
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default PersonList;
