import './App.css';
import etsy from './data/etsy';
import Listing from './Listing/Listing';

function App() {
  return (
    <div className="App">
      <Listing items={etsy}/>
    </div>
  );
}

export default App;
