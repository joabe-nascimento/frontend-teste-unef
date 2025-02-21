import { useState } from 'react';
import { createTask, updateTask } from '../services/taskService';

const TaskForm = ({ task, onSave }) => {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = { title, description };
    if (task) {
      await updateTask(task._id, taskData);
    } else {
      await createTask(taskData);
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
      <button type="submit">Salvar</button>
    </form>
  );
};

export default TaskForm;