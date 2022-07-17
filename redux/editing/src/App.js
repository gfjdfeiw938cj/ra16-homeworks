import './App.css';

import Form from './components/Form';
import TasksList from './components/TasksList';

const App = () => {
  return (
    <div className="tasks container">
      <h1 className="title">Tasks</h1>
      <Form />
      <TasksList />
    </div>
  );
};

export default App
