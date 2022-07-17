import Task from './Task';
import { useSelector } from "react-redux";

export default function TasksList() {
  const tasks = useSelector(state => {
    const all = state.tasks.tasks;
    const filterKey = state.tasks.filterKey;
    if(filterKey) {
      return all.filter(item => (item.title).toLowerCase().includes(filterKey))
    } else {
      return all
    }
  });

  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="col-6 col-md-10 fw-bold">Title</div>
        <div className="fw-bold flex-fill">Price</div>
        <div className="controls fw-bold">
          Control
        </div>
      </li>
      {tasks.length > 0 ? tasks.map((task) => (
        <Task key={task.id} id={task.id} title={task.title} price={task.price} />
      )) : 'Nothing found'}
    </ul>
  );
}
