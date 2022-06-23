import './App.css';
import Stars from './films/Stars';

function App() {
  return (
    <div className="App">
      <Stars />
      <Stars count={1}/>
      <Stars count={2}/>
      <Stars count={3}/>
      <Stars count={4}/>
      <Stars count={5}/>
      <Stars count={6}/>
      <Stars count={-1}/>
      <Stars count={'one'}/>
      <Stars count={true}/>
    </div>
  );
}

export default App;
