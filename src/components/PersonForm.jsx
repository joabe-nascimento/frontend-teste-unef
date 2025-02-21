import { useState } from 'react';
import { createPerson, updatePerson } from '../services/personService';

const PersonForm = ({ person, onSave }) => {
  const [name, setName] = useState(person?.name || '');
  const [email, setEmail] = useState(person?.email || '');
  const [phone, setPhone] = useState(person?.phone || '');
  const [birthDate, setBirthDate] = useState(person?.birthDate || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const personData = { name, email, phone, birthDate };
    if (person) {
      await updatePerson(person._id, personData);
    } else {
      await createPerson(personData);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={styles.input}
      />
      <input
        type="date"
        placeholder="Data de Nascimento"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Salvar</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    margin: '0 auto',
    width: '100%',
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    transition: 'border 0.3s ease',
    outline: 'none',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#6366f1',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#4f46e5',
    },
  },
};

export default PersonForm;
