// import images
import bannerMen from "../assets/images/categories/men/banner.webp";
import menFirst from "../assets/images/categories/men/first.webp";
import menSecond from "../assets/images/categories/men/second.webp";
import menThird from "../assets/images/categories/men/third.webp";
import menFourth from "../assets/images/categories/men/fourth.webp";

import bannerWomen from "../assets/images/categories/women/banner.webp";
import womenFirst from "../assets/images/categories/women/first.webp";
import womenSecond from "../assets/images/categories/women/second.webp";
import womenThird from "../assets/images/categories/women/third.webp";
import womenFourth from "../assets/images/categories/women/fourth.webp";



const data = [
    {
        categories: [
            {
                id: 1,
                name: "men",
                image: bannerMen,
                description: "MAYBACH Icons of Luxury presents a premium range of must-have men's products and accessories.",
                categories: [
                    {
                        id: 1,
                        name: "bags",
                        image: menFirst,
                        categories: [
                            {
                                id: 1,
                                name: "business bags",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 2,
                                name: "travel bags",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 3,
                                name: "daypacks",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            }
                        ],
                    },
                    {
                        id: 2,
                        name: "accessories",
                        image: menSecond,
                        categories: [
                            {
                                id: 1,
                                name: "keyrings",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 2,
                                name: "wallets & cart cases",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 3,
                                name: "phone cases",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 4,
                                name: "stationery",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 5,
                                name: "cufflinks",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                        ],
                    },
                    {
                        id: 3,
                        name: "clothing",
                        image: menThird,
                        categories: [
                            {
                                id: 1,
                                name: "keyrings",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 2,
                                name: "wallets & cart cases",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 3,
                                name: "phone cases",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 4,
                                name: "stationery",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 5,
                                name: "cufflinks",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                        ],
                    },
                    {
                        id: 4,
                        name: "collections",
                        image: menFourth,
                        categories: [
                            {
                                id: 1,
                                name: "keyrings",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 2,
                                name: "wallets & cart cases",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 3,
                                name: "phone cases",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 4,
                                name: "stationery",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 5,
                                name: "cufflinks",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                        ],
                    }
                ]
            },
            {
                id: 2,
                name: "women",
                image: bannerWomen,
                description: "MAYBACH Icons of Luxury presents a premium range of must-have men's products and accessories.",
                data: [
                    {
                        id: 1,
                        name: "bags",
                        image: womenFirst,
                    },
                    {
                        id: 2,
                        name: "accessories",
                        image: womenSecond,
                    },
                    {
                        id: 3,
                        name: "clothing",
                        image: womenThird,
                    },
                    {
                        id: 4,
                        name: "collections",
                        image: womenFourth,
                    }
                ]
            },
            {
                id: 3,
                name: "accessories",
            },
            {
                id: 4,
                name: "new",
            },
            {
                id: 5,
                name: "fine writing",
            },
            {
                id: 6,
                name: "eyewear",
            },
            {
                id: 7,
                name: "saddlery",
            },
            {
                id: 8,
                name: "boutiques",
            },
            {
                id: 9,
                name: "about",
            },
        ]
    }
];

export default data;