import { useState } from 'react';
import PersonList from '../components/PersonList';
import PersonForm from '../components/PersonForm';

const PeoplePage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h1>Gerenciamento de Pessoas</h1>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Fechar Formulário' : 'Adicionar Pessoa'}
      </button>
      {showForm && <PersonForm onSave={() => setShowForm(false)} />}
      <PersonList />
    </div>
  );
};

// Exportação como default
export default PeoplePage;