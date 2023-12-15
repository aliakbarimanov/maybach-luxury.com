// import images
import sliderOne from "../assets/images/slider/sliderOne.jpeg";
import sliderTwo from "../assets/images/slider/sliderTwo.jpg";
import sliderThree from "../assets/images/slider/sliderThree.jpg";
import sliderFour from "../assets/images/slider/sliderFour.jpeg";

import menFirst from "../assets/images/categories/men/first.webp";
import menSecond from "../assets/images/categories/men/second.webp";
import menThird from "../assets/images/categories/men/third.webp";
import menFourth from "../assets/images/categories/men/fourth.webp";

import womenFirst from "../assets/images/categories/women/first.webp";
import womenSecond from "../assets/images/categories/women/second.webp";
import womenThird from "../assets/images/categories/women/third.webp";
import womenFourth from "../assets/images/categories/women/fourth.webp";

import bannerBag from "../assets/images/categories/bags/banner.webp";
import bussineBag from "../assets/images/categories/bags/bussineBag.webp";
import travelBag from "../assets/images/categories/bags/travelBag.webp";
import daypack from "../assets/images/categories/bags/daypack.webp";

import retroOne from "../assets/images/about/retroCars.jpg";
import retroTwo from "../assets/images/about/bags.jpg";
import retroThree from "../assets/images/about/eyewear.jpg";
import retroFour from "../assets/images/about/bag.jpg";


import men from "../assets/images/shopping/men.jpg";
import shoes from "../assets/images/shopping/shoes.jpg";



const data = [
    {
        categories: [
            {
                id: 1,
                name: "men",
                image: bannerBag,
                description: "MAYBACH Icons of Luxury presents a premium range of must-have men's products and accessories.",
                categories: [
                    {
                        id: 1,
                        name: "bags",
                        image: menFirst,
                        banner: bannerBag,
                        description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                        categories: [
                            {
                                id: 1,
                                name: "business bags",
                                image: bannerBag,
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                            },
                            {
                                id: 2,
                                name: "travel bags",
                                image: bannerBag,
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                            },
                            {
                                id: 3,
                                name: "daypacks",
                                image: bannerBag,
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
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
                                name: "jackets",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 2,
                                name: "shoes",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 3,
                                name: "polo shirts & t-shirts",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 4,
                                name: "suits",
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
                                name: "smoking accessories",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 2,
                                name: "the desire collection",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 3,
                                name: "unexpected moments",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 4,
                                name: "vision collection",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 5,
                                name: "driver's choice",
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
                image: bannerBag,
                description: "MAYBACH Icons of Luxury presents a premium range of must-have men's products and accessories.",
                categories: [
                    {
                        id: 1,
                        name: "bags",
                        image: womenFirst,
                        banner: bannerBag,
                        description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                        categories: [
                            {
                                id: 1,
                                name: "business bags",
                                image: bannerBag,
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                            },
                            {
                                id: 2,
                                name: "travel bags",
                                image: bannerBag,
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                            },
                            {
                                id: 3,
                                name: "daypacks",
                                image: bannerBag,
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                            }
                        ],
                    },
                    {
                        id: 2,
                        name: "accessories",
                        image: womenSecond,
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
                        image: womenThird,
                        categories: [
                            {
                                id: 1,
                                name: "jackets",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 2,
                                name: "shoes",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 3,
                                name: "polo shirts & t-shirts",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 4,
                                name: "suits",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                        ],
                    },
                    {
                        id: 4,
                        name: "collections",
                        image: womenFourth,
                        categories: [
                            {
                                id: 1,
                                name: "smoking accessories",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 2,
                                name: "the desire collection",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 3,
                                name: "unexpected moments",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 4,
                                name: "vision collection",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 5,
                                name: "driver's choice",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                        ],
                    }
                ]
            },
            {
                id: 3,
                name: "accessories",
                categories: [
                    {
                        id: 2,
                        name: "accessories",
                        image: womenSecond,
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
                        image: womenFourth,
                        categories: [
                            {
                                id: 1,
                                name: "smoking accessories",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 2,
                                name: "the desire collection",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 3,
                                name: "unexpected moments",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                        ],
                    }
                ]
            },
            {
                id: 4,
                name: "new",
                categories: [
                    {
                        id: 1,
                        name: "bags",
                        image: womenFirst,
                        banner: bannerBag,
                        description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                        categories: [
                            {
                                id: 1,
                                name: "business bags",
                                image: bannerBag,
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                            },
                            {
                                id: 2,
                                name: "travel bags",
                                image: bannerBag,
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                            },
                            {
                                id: 3,
                                name: "daypacks",
                                image: bannerBag,
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                            }
                        ],
                    },
                    {
                        id: 3,
                        name: "clothing",
                        image: womenThird,
                        categories: [
                            {
                                id: 1,
                                name: "jackets",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 2,
                                name: "shoes",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 3,
                                name: "polo shirts & t-shirts",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 4,
                                name: "suits",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                        ],
                    },
                ]
            },
            {
                id: 5,
                name: "fine writing",
                categories: [
                    {
                        id: 1,
                        name: "roller ball",
                        image: womenFirst,
                        banner: bannerBag,
                        description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                    },
                    {
                        id: 2,
                        name: "ballpointpen",
                        image: womenSecond,
                    },
                ]
            },
            {
                id: 6,
                name: "eyewear",
                categories: [
                    {
                        id: 2,
                        name: "accessories",
                        image: womenSecond,
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
                ]
            },
            {
                id: 7,
                name: "saddlery",
                categories: [
                    {
                        id: 3,
                        name: "clothing",
                        image: womenThird,
                        categories: [
                            {
                                id: 1,
                                name: "jackets",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 2,
                                name: "shoes",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 3,
                                name: "polo shirts & t-shirts",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                            {
                                id: 4,
                                name: "suits",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                        ],
                    },
                ]
            },
            {
                id: 8,
                name: "boutiques",
                categories: [
                    {
                        id: 1,
                        name: "boutiques",
                        image: womenFirst,
                        banner: bannerBag,
                        description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                        categories: [
                            {
                                id: 1,
                                name: "Dubai",
                                image: bannerBag,
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                            },
                            {
                                id: 2,
                                name: "Riyadh",
                                image: bannerBag,
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                            },
                            {
                                id: 3,
                                name: "Lissabon",
                                image: bannerBag,
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                            }
                        ],
                    },
                    {
                        id: 2,
                        name: "shop in shop",
                        image: womenSecond,
                        categories: [
                            {
                                id: 1,
                                name: "berlin",
                                description: "Discover the exquisite handcrafted leather bags from MAYBACH and enjoy the look, feel and scent of pure elegance.",
                                data: [{}],
                            },
                        ],
                    },
                ]
            },
            {
                id: 9,
                name: "about",
                categories: [

                    {
                        id: 2,
                        name: "philosophy",
                        image: womenSecond,
                    },
                    {
                        id: 3,
                        name: "history",
                        image: womenThird,
                    },
                ]
            },
        ],
        products: [
            {
                id: 1,
                category: "men",
                subcategory: "bags",
                thirdCategory: "business bags",
                name: "the advocate 1",
                productImage: bussineBag,
                description: "The MAYBACH business bag THE ADVISER I is perfectly organised and elegantly designed. The soft cowhide leather with its natural grain makes each bag a unique masterpiece.",
                about: "Full grain document bag",
                price: "2,300.00",
                colors: [
                    "red",
                    "blue",
                    "#005500",
                ],
                material: "Leather",
                stock: 9,
            },
            {
                id: 2,
                category: "men",
                subcategory: "bags",
                thirdCategory: "daypacks",
                name: "Daypack 2",
                productImage: daypack,
                description: "The MAYBACH business bag THE ADVISER I is perfectly organised and elegantly designed. The soft cowhide leather with its natural grain makes each bag a unique masterpiece. The pockets are meticulously sewn by hand, and the front zip pocket, reminiscent in its form of the MAYBACH logo, safely and conveniently stores important utensils such as a mobile phone, business cards and writing implements. Two main compartments are each subdivided into a practical array of interior pockets. A padded inside compartment protects a notebook computer, files and important documents. The high quality and exquisite appearance of this leather bag is underlined by a metal emblem with a subtle Maybach logo and the bag has been specially designed to fit onto a trolley grip for safe and easy transportation. Perfect in its appearance, yet practical and robust - this business bag is an outstanding organisational talent.",
                about: "Full daypack for walking",
                price: "1,900.00",
                colors: [
                    "red",
                    "blue",
                    "#005500",
                ],
                material: "Silk",
                stock: 2,
            },
            {
                id: 3,
                category: "men",
                subcategory: "bags",
                thirdCategory: "Travel bags",
                name: "Travel bag 2",
                productImage: travelBag,
                description: "The MAYBACH business bag THE ADVISER I is perfectly organised and elegantly designed. The soft cowhide leather with its natural grain makes each bag a unique masterpiece. The pockets are meticulously sewn by hand, and the front zip pocket, reminiscent in its form of the MAYBACH logo, safely and conveniently stores important utensils such as a mobile phone, business cards and writing implements. Two main compartments are each subdivided into a practical array of interior pockets. A padded inside compartment protects a notebook computer, files and important documents. The high quality and exquisite appearance of this leather bag is underlined by a metal emblem with a subtle Maybach logo and the bag has been specially designed to fit onto a trolley grip for safe and easy transportation. Perfect in its appearance, yet practical and robust - this business bag is an outstanding organisational talent.",
                about: "Full travel bag",
                price: "4,250.00",
                colors: [
                    "red",
                    "blue",
                    "#005500",
                ],
                material: "Cotton",
                stock: 18,
            }
        ],
        about: [
            {
                title: "retro cars",
                image: retroOne,
            },
            {
                title: "philosophy",
                image: retroFour,
            },
            {
                title: "design made in germany",
                image: retroThree,
            },
            {
                title: "mercedes maybach",
                image: retroTwo,
            },
        ],
        slider: [
            {
                name: "MEN'S COLLECTION",
                image: sliderOne,
                description: "MAYBACH Icons of Luxury presents a tempting range of must-have women's products and accessories.",
            },
            {
                name: "eyewear",
                image: sliderTwo,
                description: "MAYBACH Icons of Luxury presents a tempting range of must-have women's products and accessories.",
            },
            {
                name: "ACCESSORIES",
                image: sliderThree,
                description: "MAYBACH Icons of Luxury presents a tempting range of must-have women's products and accessories.",
            },
            {
                name: "WOMEN'S COLLECTION",
                image: sliderFour,
                description: "MAYBACH Icons of Luxury presents a tempting range of must-have women's products and accessories.",
            },
        ],
        shopping: [
            [
                {
                    image: men,
                    name: "men",
                },
                {
                    image: bussineBag,
                },
                {
                    image: shoes,
                },
            ],
            [
                {
                    image: womenFirst,
                    name: "women",
                },
                {
                    image: travelBag,
                },
                {
                    image: daypack,
                },
            ],
            [
                {
                    image: menThird,
                    name: "men",
                },
                {
                    image: daypack,
                },
                {
                    image: shoes,
                },
            ],
        ],
        promocode: "texnoera5",
    }
];

export default data;