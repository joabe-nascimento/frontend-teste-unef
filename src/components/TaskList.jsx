import { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../services/taskService';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const handleEdit = (task) => {
    setTaskToEdit(task); // Define a tarefa a ser editada
  };

  const handleSave = async () => {
    const data = await getTasks(); // Recarrega a lista de tarefas
    setTasks(data);
    setTaskToEdit(null); // Limpa o formulário de edição
  };

  return (
    <div style={styles.container}>
      <h2>Lista de Tarefas</h2>
      <ul style={styles.list}>
        {tasks.map((task) => (
          <li key={task._id} style={styles.listItem}>
            <div style={styles.taskInfo}>
              <strong>{task.title}</strong> - {task.description}
            </div>
            <div style={styles.actions}>
              <button onClick={() => handleEdit(task)} style={styles.editButton}>Editar</button>
              <button onClick={() => handleDelete(task._id)} style={styles.deleteButton}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
      <TaskForm task={taskToEdit} onSave={handleSave} />
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
  taskInfo: {
    flex: 1,
    fontSize: '1rem',
  },
  actions: {
    display: 'flex',
    gap: '10px',
  },
  editButton: {
    padding: '8px 16px',
    backgroundColor: '#ff9800',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
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

export default TaskList;
