import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <LanguageProvider>
        <Router>
          <div className="app">
            <Navbar />
            <main className="main-content"></main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </>
  );
}

export default App;
