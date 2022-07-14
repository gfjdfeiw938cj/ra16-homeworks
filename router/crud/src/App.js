import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from "./components/HomePage";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";

export default function App() {
  return (
    <Router>
      <div className="page">
        <Routes>
          <Route path="/posts/new" element={<CreatePost />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}
