// import data
import data from "../db/data";

// import components
import CategoryCard from "../components/CategoryCard";

// import Link;
import { Link } from "react-router-dom";

// import useParams
import { useParams } from "react-router-dom";

const Category = () => {

    const {id} = useParams();

    const category = data[0].categories.filter(item=>item.id==id);
    console.log(id);

    return (
        <section className="category">
            <div className="banner">
                <img src="#" alt="Banner image" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="breadCrumbs">
                        <Link to="#">men</Link>
                    </div>
                    <div className="categoryDetails">
                        <h2 className="title">men</h2>
                        <p className="description">men</p>
                    </div>
                    <div className="categoriesCardList">
                        {/* {
                            men.categories.map(item => (
                                <Link className="categoriesCardLink" to="#">
                                    <CategoryCard data={item} />
                                </Link>
                            ))
                        } */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category;