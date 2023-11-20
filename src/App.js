// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArrowUp from "./components/ArrowUp";

// import pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// import sass
import "./assets/scss/index.scss";

// import react-router-dom hooks
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ArrowUp />
    </BrowserRouter>
  );
}

export default App;
