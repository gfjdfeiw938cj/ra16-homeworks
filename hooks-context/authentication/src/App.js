import AuthContextProvider from "./components/AuthContextProvider";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import './App.css';

export default function App() {

  return (
    <main className="main">
      <AuthContextProvider>
        <Header />
        <Main />
      </AuthContextProvider>
    </main>
  );
}
