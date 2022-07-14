import Header from "./components/header/Header";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { AuthContextProvider } from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import Welcome from "./components/main/Welcome";
import News from "./components/main/News";
import Page404 from "./components/main/Page404";

export default function App() {
  return (
    <main className="main">
      <Router>
        <AuthContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route exact path='/news' element={<ProtectedRoute/>}>
            <Route exact path='/news' element={<News/>}/>
          </Route>
          <Route path='*' element={<Page404 />}/>
        </Routes>
        </AuthContextProvider>
      </Router>
    </main>
  );
}
