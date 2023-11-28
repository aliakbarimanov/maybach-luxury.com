// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArrowUp from "./components/ArrowUp";

// import pages
import Home from "./pages/Home";
import Category from "./pages/Category";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

// import sass
import "./assets/scss/index.scss";

// import react-router-dom hooks
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import redux && redux tool-kit
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryName" element={<Category />} />
            <Route path="/category/:categoryName/:subCategory" element={<Products />} />
            <Route path="/product-details" element={ProductDetails} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ArrowUp />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
