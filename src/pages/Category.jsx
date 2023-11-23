// import images
import Banner from "../assets/images/banner/banner.webp";

// import components
import CategoryCard from "../components/CategoryCard";

// import Link;
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <section className="category">
            <div className="banner">
                <img src={Banner} alt="Banner image" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="breadCrumbs">
                        <Link to="#">men</Link>
                    </div>
                    <div className="categoryDetails">
                        <h2 className="title">Men</h2>
                        <p className="description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est consequatur debitis quibusdam consequuntur quae dignissimos.
                        </p>
                    </div>
                    <div className="categoriesCardList">
                        <Link className="categoriesCardLink" to="#">
                            <CategoryCard />
                        </Link>
                        <Link className="categoriesCardLink" to="#">
                            <CategoryCard />
                        </Link>
                        <Link className="categoriesCardLink" to="#">
                            <CategoryCard />
                        </Link>
                        <Link className="categoriesCardLink" to="#">
                            <CategoryCard />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category;