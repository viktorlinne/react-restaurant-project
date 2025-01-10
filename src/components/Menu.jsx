import React from 'react'
import DishesCard from "../layouts/DishesCard.jsx";
import pizzaimg from "../assets/pizza.jpg"
import kebabimg from "../assets/kebab.jpg"
import hamburgareimg from "/src/assets/hamburgare.jpg";
import burritoimg from "/src/assets/burrito.jpg";
import pastaimg from "/src/assets/pasta.jpg";
import salladimg from "/src/assets/sallad.jpg";
import såsimg from "/src/assets/sås.jpg";
import tillbehörimg from "/src/assets/tillbehör.webp";
import dryckimg from "/src/assets/dryck.webp";

const Menu = () => {

    const menuItems = [
        {img: pizzaimg, title: "Margherita", price: "110kr", category: "Pizza"},
        {img: pizzaimg, title: "Funghi", price: "110kr", category: "Pizza"},
        {img: pizzaimg, title: "Vesuvio", price: "110kr", category: "Pizza"},
        {img: pizzaimg, title: "Calzone (Inbakad)", price: "120kr", category: "Pizza"},
        {img: pizzaimg, title: "Al Tonno", price: "115kr", category: "Pizza"},
        {img: pizzaimg, title: "Venezia", price: "120kr", category: "Pizza"},
        {img: kebabimg, title: "Kebab med bröd", price: "125kr", category: "Kebabrätter"},
        {img: kebabimg, title: "Kyckling med bröd", price: "125kr", category: "Kebabrätter"},
        {img: kebabimg, title: "Falafel med bröd", price: "125kr", category: "Kebabrätter"},
        {img: kebabimg, title: "Kycklingrulle", price: "125kr", category: "Kebabrätter"},
        {img: kebabimg, title: "Kebabrulle", price: "125kr", category: "Kebabrätter"},
        {img: kebabimg, title: "Falafelrulle", price: "125kr", category: "Kebabrätter"},
        {img: hamburgareimg, title: "Hamburgare 90g", price: "115kr", category: "Hamburgare"},
        {img: hamburgareimg, title: "Hamburgare 150g", price: "125kr", category: "Hamburgare"},
        {img: hamburgareimg, title: "Ostburgare 90g", price: "115kr", category: "Hamburgare"},
        {img: hamburgareimg, title: "Ostburgare 150g", price: "125kr", category: "Hamburgare"},
        {img: hamburgareimg, title: "Baconburgare 90g", price: "115kr", category: "Hamburgare"},
        {img: hamburgareimg, title: "Baconburgare 150g", price: "125kr", category: "Hamburgare"},
        {img: burritoimg, title: "Quesadillas", price: "110kr", category: "Tex Mex"},
        {img: burritoimg, title: "Nachotallrik", price: "130kr", category: "Tex Mex"},
        {img: burritoimg, title: "Burrito", price: "115kr", category: "Tex Mex"},
        {img: burritoimg, title: "Enchiladas", price: "125kr", category: "Tex Mex"},
        {img: burritoimg, title: "Tacos", price: "120kr", category: "Tex Mex"},
        {img: burritoimg, title: "Fajitas", price: "125kr", category: "Tex Mex"},
        {img: pastaimg, title: "Diavolo", price: "130kr", category: "Pastarätter"},
        {img: pastaimg, title: "Tortelloni", price: "125kr", category: "Pastarätter"},
        {img: pastaimg, title: "Funghi", price: "110kr", category: "Pastarätter"},
        {img: pastaimg, title: "Pesto", price: "120kr", category: "Pastarätter"},
        {img: pastaimg, title: "Carbonara", price: "115kr", category: "Pastarätter"},
        {img: pastaimg, title: "Bolognese", price: "110kr", category: "Pastarätter"},
        {img: salladimg, title: "Kycklingsallad", price: "130kr", category: "Sallader"},
        {img: salladimg, title: "Tonfisksallad", price: "125kr", category: "Sallader"},
        {img: salladimg, title: "Räksallad", price: "110kr", category: "Sallader"},
        {img: salladimg, title: "Kebabsallad", price: "120kr", category: "Sallader"},
        {img: salladimg, title: "Amerikansk Sallad", price: "115kr", category: "Sallader"},
        {img: salladimg, title: "Grekisk Sallad", price: "110kr", category: "Sallader"},
        {img: såsimg, title: "Kebabsås Mild", price: "15kr", category: "Såser"},
        {img: såsimg, title: "Kebabsås Stark", price: "15kr", category: "Såser"},
        {img: såsimg, title: "Vitlöksås", price: "15kr", category: "Såser"},
        {img: såsimg, title: "Balsamica", price: "15kr", category: "Såser"},
        {img: såsimg, title: "Mild Sås", price: "15kr", category: "Såser"},
        {img: såsimg, title: "Jönköpingsås", price: "10kr", category: "Såser"},
        {img: tillbehörimg, title: "Pizzasallad", price: "35kr", category: "Tillbehör"},
        {img: tillbehörimg, title: "Kycklingvingar 5st", price: "40kr", category: "Tillbehör"},
        {img: tillbehörimg, title: "Cheese Dops 5st", price: "40kr", category: "Tillbehör"},
        {img: tillbehörimg, title: "Pommes Frites", price: "25kr", category: "Tillbehör"},
        {img: tillbehörimg, title: "Chili Cheese 5st", price: "40kr", category: "Tillbehör"},
        {img: tillbehörimg, title: "Mozzarella Sticks 5st", price: "30kr", category: "Tillbehör"},
        {img: dryckimg, title: "Coca Cola", price: "25kr", category: "Drycker"},
        {img: dryckimg, title: "Coca Cola Zero 5st", price: "25kr", category: "Drycker"},
        {img: dryckimg, title: "Fanta Orange", price: "25kr", category: "Drycker"},
        {img: dryckimg, title: "Fanta Exotic", price: "25kr", category: "Drycker"},
        {img: dryckimg, title: "Sprite", price: "25kr", category: "Drycker"},
        {img: dryckimg, title: "Sprite Zero", price: "25kr", category: "Drycker"},


    ];

    return (

        <div>
            <div id="pizzor" className={"flex flex-col justify-center items-center lg:px-32 px-5"}>

                <h1 className={"text-4xl font-bold text-center lg:pt-8 pt-24 pb-10"}>
                    Pizzor
                </h1>

                <div className={"flex flex-wrap gap-4 justify-center mt-4"}>
                    {menuItems.filter((menuItem) => menuItem.category === "Pizza")
                        .map((menuItem, i) => (
                            <DishesCard
                                key={i}
                                img={menuItem.img}
                                title={menuItem.title}
                                price={menuItem.price}
                            />
                        ))}
                </div>


                <h1 className={"text-4xl font-bold text-center lg:pt-8 pt-24 pb-10"}>
                    Kebabrätter
                </h1>

                <div className={"flex flex-wrap gap-4 justify-center mt-4"}>
                    {menuItems.filter((menuItem) => menuItem.category === "Kebabrätter")
                        .map((menuItem, i) => (
                            <DishesCard
                                key={i}
                                img={menuItem.img}
                                title={menuItem.title}
                                price={menuItem.price}
                            />
                        ))}
                </div>

                <h1 id="hamburgare" className={"text-4xl font-bold text-center lg:pt-8 pt-24 pb-10"}>
                    Hamburgare
                </h1>

                <div className={"flex flex-wrap gap-4 justify-center mt-4"}>
                    {menuItems.filter((menuItem) => menuItem.category === "Hamburgare")
                        .map((menuItem, i) => (
                            <DishesCard
                                key={i}
                                img={menuItem.img}
                                title={menuItem.title}
                                price={menuItem.price}
                            />
                        ))}
                </div>


                <h1 id="tex-mex" className={"text-4xl font-bold text-center lg:pt-8 pt-24 pb-10"}>
                    Tex Mex
                </h1>

                <div className={"flex flex-wrap gap-4 justify-center mt-4"}>
                    {menuItems.filter((menuItem) => menuItem.category === "Tex Mex")
                        .map((menuItem, i) => (
                            <DishesCard
                                key={i}
                                img={menuItem.img}
                                title={menuItem.title}
                                price={menuItem.price}
                            />
                        ))}
                </div>


                <h1 id="pastarätter" className={"text-4xl font-bold text-center lg:pt-8 pt-24 pb-10"}>
                    Pastarätter
                </h1>

                <div className={"flex flex-wrap gap-4 justify-center mt-4"}>
                    {menuItems.filter((menuItem) => menuItem.category === "Pastarätter")
                        .map((menuItem, i) => (
                            <DishesCard
                                key={i}
                                img={menuItem.img}
                                title={menuItem.title}
                                price={menuItem.price}
                            />
                        ))}
                </div>


                <h1 id="sallader" className={"text-4xl font-bold text-center lg:pt-8 pt-24 pb-10"}>
                    Sallader
                </h1>

                <div className={"flex flex-wrap gap-4 justify-center mt-4"}>
                    {menuItems.filter((menuItem) => menuItem.category === "Sallader")
                        .map((menuItem, i) => (
                            <DishesCard
                                key={i}
                                img={menuItem.img}
                                title={menuItem.title}
                                price={menuItem.price}
                            />
                        ))}
                </div>


                <h1 id="såser" className={"text-4xl font-bold text-center lg:pt-8 pt-24 pb-10"}>
                    Såser
                </h1>

                <div className={"flex flex-wrap gap-4 justify-center mt-4"}>
                    {menuItems.filter((menuItem) => menuItem.category === "Såser")
                        .map((menuItem, i) => (
                            <DishesCard
                                key={i}
                                img={menuItem.img}
                                title={menuItem.title}
                                price={menuItem.price}
                            />
                        ))}
                </div>


                <h1 id="tillbehör" className={"text-4xl font-bold text-center lg:pt-8 pt-24 pb-10"}>
                    Tillbehör
                </h1>

                <div className={"flex flex-wrap gap-4 justify-center mt-4"}>
                    {menuItems.filter((menuItem) => menuItem.category === "Tillbehör")
                        .map((menuItem, i) => (
                            <DishesCard
                                key={i}
                                img={menuItem.img}
                                title={menuItem.title}
                                price={menuItem.price}
                            />
                        ))}
                </div>


                <h1 id="drycker" className={"text-4xl font-bold text-center lg:pt-8 pt-24 pb-10"}>
                    Drycker
                </h1>

                <div className={"flex flex-wrap gap-4 justify-center mt-4"}>
                    {menuItems.filter((menuItem) => menuItem.category === "Drycker")
                        .map((menuItem, i) => (
                            <DishesCard
                                key={i}
                                img={menuItem.img}
                                title={menuItem.title}
                                price={menuItem.price}
                            />
                        ))}
                </div>

            </div>
        </div>
    )
}

export default Menu