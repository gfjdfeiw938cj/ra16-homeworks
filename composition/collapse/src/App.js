import './App.css';
import Collapse from "./components/Collapse";

function App() {
  return (
    <>
      <Collapse collapsedLabel="collapsed Label" expandedLabel="expanded Label">
        <h2>Test header</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
      </Collapse>
      <Collapse>
        <h2>Test header</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
      </Collapse>
    </>
  );
}

export default App;
