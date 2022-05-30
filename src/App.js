import "./App.css";

// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home";


function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={< Home />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;