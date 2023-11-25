// import data
import men from "../db/men";

// import components
import CategoryCard from "../components/CategoryCard";

// import Link;
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <section className="category">
            <div className="banner">
                <img src={men.image} alt="Banner image" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="breadCrumbs">
                        <Link to="#">{men.title}</Link>
                    </div>
                    <div className="categoryDetails">
                        <h2 className="title">{men.title}</h2>
                        <p className="description">{men.description}</p>
                    </div>
                    <div className="categoriesCardList">
                        {
                            men.categories.map(item => (
                                <Link className="categoriesCardLink" to="#">
                                    <CategoryCard data={item} />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category;