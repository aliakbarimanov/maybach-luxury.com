// import react icons
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

// import Link
import { Link } from "react-router-dom";

const ProductDetails = () => {
  return (
    <section className="productDetails">
      <ul className="breadCrumbs">
        <li>
          <Link to="#">breadcrumb</Link>
        </li>
      </ul>
      <div className="body">
        <div className="productImages">
          <div className="smallImages">
            <img src="#" alt="Product image" />
            <img src="#" alt="Product image" />
            <img src="#" alt="Product image" />
          </div>
          <div className="mainImage">
            <img src="#" alt="Product image" />
            <IoIosArrowDown/>
            <MdKeyboardArrowRight/>
            <IoIosArrowBack/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
