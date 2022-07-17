import './App.css';

import Form from './components/Form';
import ProductsList from './components/ProductsList';
import Filter from "./components/Filter";

const App = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-end mb-3">
        <h1 className="title">Приглядись к этим предложениям</h1>
        <Filter />
      </div>
      <Form />
      <ProductsList />
    </div>
  );
};

export default App
