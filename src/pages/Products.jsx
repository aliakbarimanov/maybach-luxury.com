// import images
import banner from "../assets/images/categories/bags/banner.webp";

// import components
import ProductCard from "../components/ProductCard";

// import Link;
import { Link } from "react-router-dom";

// import useParams
import { useParams } from "react-router-dom";

const Products = () => {
  return (
    <section className="products">
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
      <div className="container">
        <div className="row">
          <div className="breadCrumbs">
            <Link to="#">breadcrumb</Link>
          </div>
          <div className="productsPageDetails">
            <h2 className="title">title</h2>
            <p className="description">description</p>
          </div>
          <div className="productsPageList">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
