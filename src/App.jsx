import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Curriculum from "./pages/curriculum";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route
            path="/*"
            element={
              <div className="app">
                <Navbar />
                <main className="main-content">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutme" element={<AboutMe />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            }
          />
          <Route path="/curriculum" element={<Curriculum />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
