import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TasksPage from './pages/TasksPage';
import PeoplePage from './pages/PeoplePage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/tasks">Tarefas</Link> | <Link to="/people">Pessoas</Link>
      </nav>
      <Routes>
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/people" element={<PeoplePage />} />
      </Routes>
    </Router>
  );
}

export default App;