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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="date"
        placeholder="Data de Nascimento"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default PersonForm;