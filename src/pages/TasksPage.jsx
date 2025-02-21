import { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const TasksPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h1>Gerenciamento de Tarefas</h1>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Fechar Formulário' : 'Adicionar Tarefa'}
      </button>
      {showForm && <TaskForm onSave={() => setShowForm(false)} />}
      <TaskList />
    </div>
  );
};

export default TasksPage;