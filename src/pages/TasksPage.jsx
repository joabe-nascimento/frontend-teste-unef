import { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const TasksPage = () => {
    const [showForm, setShowForm] = useState(false);

    // Estilos modernos e visuais aprimorados
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
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            width: '100%',
        },
        title: {
            fontSize: '2.2rem', // Tamanho da fonte maior
            color: '#2d3436',
            fontWeight: '700',
            margin: 0,
        },
        button: {
            padding: '12px 24px',
            backgroundColor: '#6366f1',
            color: 'white',
            border: 'none',
            borderRadius: '10px', // Bordas mais arredondadas
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'all 0.3s ease', // Transição mais suave
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            ':hover': {
                backgroundColor: '#4f46e5',
                transform: 'translateY(-2px)', // Efeito de transição mais suave
            },
            ':active': {
                transform: 'translateY(1px)', // Efeito de clique
            },
        },
        card: {
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '700px', // Limita a largura da card
        },
        input: {
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #ddd',
            fontSize: '1rem',
            width: '100%',
            marginBottom: '1.5rem',
            transition: 'border 0.3s ease',
            ':focus': {
                borderColor: '#6366f1',
                outline: 'none',
            },
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.title}>👥 Gerenciamento de Tarefas</h1>
                <button
                    style={styles.button}
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? 'Fechar Formulário' : 'Adicionar Tarefa'}
                </button>
            </div>

            {showForm && (
                <div style={styles.card}>
                    <TaskForm onSave={() => setShowForm(false)} />
                </div>
            )}

            <div style={styles.card}>
                <TaskList />
            </div>
        </div>
    );
};

export default TasksPage;
