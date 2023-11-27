// import data
import data from "../db/data";

// import components
import CategoryCard from "../components/CategoryCard";

// import Link;
import { Link } from "react-router-dom";

// import useParams
import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryName } = useParams();

  const categoryData = data[0].categories.filter(
    (item) => item.name === categoryName
  )[0];

  return (
    <section className="category">
      <div className="banner">
        <img src={categoryData.image} alt={categoryData.name} />
      </div>
      <div className="container">
        <div className="row">
          <div className="breadCrumbs">
            <Link to={`/category/${categoryData.name}`}>
              {categoryData.name}
            </Link>
          </div>
          <div className="categoryDetails">
            <h2 className="title">{categoryData.name}</h2>
            <p className="description">{categoryData.description}</p>
          </div>
          <div className="categoriesCardList">
            {categoryData.categories.map((item) => (
              <Link className="categoriesCardLink" to="#" key={item.id}>
                <CategoryCard data={item} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
