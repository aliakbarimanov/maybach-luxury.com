// import components
import Header from "./components/Header";
import Footer from "./components/Footer";

// import pages
import Home from "./pages/Home";

// import sass
import "./assets/scss/index.scss";

// import react-router-dom hooks
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
