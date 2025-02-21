import { useState } from 'react';
import PersonList from '../components/PersonList';
import PersonForm from '../components/PersonForm';

const PeoplePage = () => {
  const [showForm, setShowForm] = useState(false);

  // Estilos modernos com variáveis de tema e flexibilidade
  const styles = {
    container: {
      maxWidth: '1000px', // Ajuste máximo de largura
      margin: '0 auto', // Centraliza o conteúdo
      padding: '2rem',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2rem',
      padding: '1.5rem',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      width: '100%',
    },
    title: {
      fontSize: '2rem',
      color: '#2d3436',
      fontWeight: '600',
      margin: 0,
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
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      ':hover': {
        backgroundColor: '#4f46e5',
        transform: 'translateY(-1px)',
      },
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '2rem',
      marginBottom: '2rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      width: '100%',
      maxWidth: '700px', // Limita a largura da card
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>👥 Gerenciamento de Pessoas</h1>
        <button
          style={styles.button}
          onClick={() => setShowForm(!showForm)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={showForm ? "M18 6 6 18M6 6l12 12" : "M12 4v16m8-8H4"} />
          </svg>
          {showForm ? 'Fechar Formulário' : 'Nova Pessoa'}
        </button>
      </div>

      {showForm && (
        <div style={styles.card}>
          <PersonForm onSave={() => setShowForm(false)} />
        </div>
      )}

      <div style={styles.card}>
        <PersonList />
      </div>
    </div>
  );
};

export default PeoplePage;
