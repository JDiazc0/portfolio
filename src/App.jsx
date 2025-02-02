import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content"></main>
        </div>
      </Router>
    </>
  );
}

export default App;
