import { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../services/taskService';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

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

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title} - {task.description}
            <button onClick={() => handleDelete(task._id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;