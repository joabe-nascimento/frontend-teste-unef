import { useState, useEffect } from 'react';
import { createTask, updateTask } from '../services/taskService';

const TaskForm = ({ task, onSave }) => {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = { title, description };
    if (task) {
      await updateTask(task._id, taskData); // Editar tarefa existente
    } else {
      await createTask(taskData); // Criar nova tarefa
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">{task ? 'Salvar Edição' : 'Adicionar Tarefa'}</button>
    </form>
  );
};

export default TaskForm;