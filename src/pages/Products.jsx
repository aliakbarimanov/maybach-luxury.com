// import data
import data from "../db/data";

// import components
import ProductCard from "../components/ProductCard";

// import Link;
import { Link } from "react-router-dom";

// import useParams
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// import provider
import { getProducts } from "../api/ApiProvider";

const Products = () => {
  const { categoryName } = useParams();
  const { subCategory } = useParams();

  const productCategory = data[0].categories.find(
    (item) => item.name === categoryName
  );
  const productSubCategory = productCategory.categories.find(
    (item) => item.name === subCategory
  );

  const pageData = data[0].products.filter(
    (item) => item.subcategory === subCategory
  );

  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const getProductsList = async () => {
      await getProducts()
        .then((res) => {
          setProductsList(res.data);
        })
        .catch((err) => {
          console.warn(err);
        });
    };
    getProductsList();
  }, []);

  return (
    <section className="products">
      <div className="banner">
        <img src={productSubCategory.banner} alt={productSubCategory.name} />
      </div>
      <div className="container">
        <div className="row">
          <div className="breadCrumbs">
            <Link to={`/category/${categoryName}/${subCategory}`}>
              {productSubCategory.name}
            </Link>
          </div>
          <div className="productsPageDetails">
            <h2 className="title">{productSubCategory.name}</h2>
            <p className="description">{productSubCategory.description}</p>
          </div>
          <div className="productsPageList">
            {productsList.map((item, id) => (
              <ProductCard data={item} key={id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
