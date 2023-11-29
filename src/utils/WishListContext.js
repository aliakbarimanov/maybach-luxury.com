// import react hooks
import { createContext, useState } from "react";

export const Context = createContext();

export const WishListContext = ({ children }) => {
    const [wishList, setWishList] = useState([]);

    const addToWishList = (data) => {
        setWishList([...wishList, data]);
    }

    const globalStates = { wishList, setWishList, addToWishList };

    return <Context.Provider value={globalStates}>{children}</Context.Provider>;
}