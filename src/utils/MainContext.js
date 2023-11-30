// import react hooks
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const MainContext = ({ children }) => {
    const [wishList, setWishList] = useState([]);
    const [card, setCard] = useState([]);
    const [cardTotalProducts, setCardTotalProducts] = useState("");

    // wishList operations
    const addToWishList = (data) => {
        const existingWishProduct = wishList.find(item => item.id === data.id);
        if (!existingWishProduct) {
            setWishList([...wishList, data]);
        }
    }

    const removeCardWishList = (data) => {
        const updatedWishList = wishList.filter(item => item.id !== data.id);
        setWishList(updatedWishList);
    }

    // useEffect(() => {
    //     localStorage.setItem("wishList", JSON.stringify(wishList));
    // }, [wishList]);

    // useEffect(() => {
    //     const checkWishList = () => {
    //         const localWishList = JSON.parse(localStorage.getItem("wishList"));
    //         setWishList(localWishList);
    //     };
    //     checkWishList();
    // }, [wishList]);


    // card operations
    const addToCard = (data) => {
        const existingCardProduct = card.find(item => item.id === data.id);

        if (existingCardProduct) {
            const updatedProduct = card.filter(item => {
                if (item.id === existingCardProduct.id) {
                    return { ...existingCardProduct, quantity: existingCardProduct.quantity++ }
                } else {
                    return item;
                }
            });
            setCard(updatedProduct);

        } else {
            setCard([...card, { ...data, quantity: 1 }]);
        }
    }

    useEffect(() => {
        const productCount = card.map(item => item.quantity);
        const cardTotalProducts = productCount.reduce((acc, curr) => acc + curr, 0);
        setCardTotalProducts(cardTotalProducts);
    }, [card]);

    const removeProductCard = (data) => {
        if (data.quantity > 1) {
            const updatedCard = card.filter(item => {
                if (data.id === item.id) {
                    return { ...data, quantity: data.quantity-- };
                } else {
                    return item;
                }
            })
            setCard(updatedCard);
        } else {
            const updatedCard = card.filter(item => item.id !== data.id);
            setCard(updatedCard);
        }
    }

    const cardProductTotalPrice = card.map(item => Number(item.price.replace(",", "")) * item.quantity);
    const subTotalPrice = cardProductTotalPrice.reduce((acc, curr) => acc + curr, 0);

    const globalStates = { wishList, setWishList, addToWishList, removeCardWishList, card, setCard, addToCard, removeProductCard, cardTotalProducts, subTotalPrice };

    return <Context.Provider value={globalStates}>{children}</Context.Provider>;
}