// import react-icons
import { FaArrowUpLong } from "react-icons/fa6";

// import useState
import {useState} from "react";

const ArrowUp = () => {

    const [active, setActive] = useState(false);

    window.addEventListener("scroll", ()=>{
        if(window.pageYOffset !== 0){
            setActive(true);
        }else{
            setActive(false);
        }
    });

    return (
        <div className={active ? "arrowMain active" : "arrowMain"} onClick={()=>window.scrollTo({top: 0, behavior: "smooth"})}>
            <FaArrowUpLong className="arrow" />
        </div>
    )
}

export default ArrowUp;