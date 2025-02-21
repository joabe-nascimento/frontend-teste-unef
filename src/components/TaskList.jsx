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
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title} - {task.description}
            <button onClick={() => handleEdit(task)}>Editar</button>
            <button onClick={() => handleDelete(task._id)}>Excluir</button>
          </li>
        ))}
      </ul>
      <TaskForm task={taskToEdit} onSave={handleSave} />
    </div>
  );
};

export default TaskList;