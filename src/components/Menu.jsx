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
    return (
        <div className={"bg-background"}>
            <div id="pizzor" className={"min-h-screen flex flex-col justify-center items-center lg:px-32 px-5"}>
                <h1 className={"text-4xl font-bold text-center lg:pt-8 pt-24 pb-10"}>
                    Pizzor
                </h1>

                <div className={"flex flex-wrap gap-8 justify-center"}>
                    <DishesCard img={pizzaimg} title={"Pizza"} price={"100 kr"}/>
                    <DishesCard img={pizzaimg} title={"Pizza"} price={"100 kr"}/>
                    <DishesCard img={pizzaimg} title={"Pizza"} price={"100 kr"}/>
                    <DishesCard img={pizzaimg} title={"Pizza"} price={"100 kr"}/>
                    <DishesCard img={pizzaimg} title={"Pizza"} price={"100 kr"}/>
                    <DishesCard img={pizzaimg} title={"Pizza"} price={"100 kr"}/>
                </div>

                <h1 className={"text-4xl font-bold text-center lg:pt-8 pt-24 pb-10"}>
                    Kebabrätter
                </h1>
                <div id="kebabrätter" className={"flex flex-wrap gap-8 justify-center"}>
                    <DishesCard img={kebabimg} title={"Kebabrätter"} price={"100 kr"}/>
                    <DishesCard img={kebabimg} title={"Kebabrätter"} price={"100 kr"}/>
                    <DishesCard img={kebabimg} title={"Kebabrätter"} price={"100 kr"}/>
                    <DishesCard img={kebabimg} title={"Kebabrätter"} price={"100 kr"}/>
                    <DishesCard img={kebabimg} title={"Kebabrätter"} price={"100 kr"}/>
                    <DishesCard img={kebabimg} title={"Kebabrätter"} price={"100 kr"}/>
                </div>

                <h1 id="hamburgare" className={"text-4xl font-bold text-center lg:pt-8 pt-24 pb-10"}>
                    Hamburgare
                </h1>
                <div className={"flex flex-wrap gap-8 justify-center"}>
                    <DishesCard img={hamburgareimg} title={"Hamburgare"} price={"100 kr"}/>
                    <DishesCard img={hamburgareimg} title={"Hamburgare"} price={"100 kr"}/>
                    <DishesCard img={hamburgareimg} title={"Hamburgare"} price={"100 kr"}/>
                    <DishesCard img={hamburgareimg} title={"Hamburgare"} price={"100 kr"}/>
                    <DishesCard img={hamburgareimg} title={"Hamburgare"} price={"100 kr"}/>
                    <DishesCard img={hamburgareimg} title={"Hamburgare"} price={"100 kr"}/>
                </div>

                <h1 id="tex-mex" className={"text-4xl font-bold text-center lg:pt-8 pt-24 pb-10"}>
                    Tex Mex
                </h1>
                <div className={"flex flex-wrap gap-8 justify-center"}>
                    <DishesCard img={burritoimg} title={"Tex Mex"} price={"100 kr"}/>
                    <DishesCard img={burritoimg} title={"Tex Mex"} price={"100 kr"}/>
                    <DishesCard img={burritoimg} title={"Tex Mex"} price={"100 kr"}/>
                    <DishesCard img={burritoimg} title={"Tex Mex"} price={"100 kr"}/>
                    <DishesCard img={burritoimg} title={"Tex Mex"} price={"100 kr"}/>
                    <DishesCard img={burritoimg} title={"Tex Mex"} price={"100 kr"}/>
                </div>

                <h1 id="pastarätter" className={"text-4xl font-bold text-center lg:pt-8 pt-24 pb-10"}>
                    Pastarätter
                </h1>
                <div className={"flex flex-wrap gap-8 justify-center"}>
                    <DishesCard img={pastaimg} title={"Pastarätter"} price={"100 kr"}/>
                    <DishesCard img={pastaimg} title={"Pastarätter"} price={"100 kr"}/>
                    <DishesCard img={pastaimg} title={"Pastarätter"} price={"100 kr"}/>
                    <DishesCard img={pastaimg} title={"Pastarätter"} price={"100 kr"}/>
                    <DishesCard img={pastaimg} title={"Pastarätter"} price={"100 kr"}/>
                    <DishesCard img={pastaimg} title={"Pastarätter"} price={"100 kr"}/>
                </div>

                <h1 id="sallader" className={"text-4xl font-bold text-center lg:pt-8 pt-24 pb-10"}>
                    Sallader
                </h1>
                <div className={"flex flex-wrap gap-8 justify-center"}>
                    <DishesCard img={salladimg} title={"Sallader"} price={"100 kr"}/>
                    <DishesCard img={salladimg} title={"Sallader"} price={"100 kr"}/>
                    <DishesCard img={salladimg} title={"Sallader"} price={"100 kr"}/>
                    <DishesCard img={salladimg} title={"Sallader"} price={"100 kr"}/>
                    <DishesCard img={salladimg} title={"Sallader"} price={"100 kr"}/>
                    <DishesCard img={salladimg} title={"Sallader"} price={"100 kr"}/>
                </div>

                <h1 id="såser" className={"text-4xl font-bold text-center lg:pt-8 pt-24 pb-10"}>
                    Såser
                </h1>
                <div className={"flex flex-wrap gap-8 justify-center"}>
                    <DishesCard img={såsimg} title={"Såser"} price={"100 kr"}/>
                    <DishesCard img={såsimg} title={"Såser"} price={"100 kr"}/>
                    <DishesCard img={såsimg} title={"Såser"} price={"100 kr"}/>
                    <DishesCard img={såsimg} title={"Såser"} price={"100 kr"}/>
                    <DishesCard img={såsimg} title={"Såser"} price={"100 kr"}/>
                    <DishesCard img={såsimg} title={"Såser"} price={"100 kr"}/>
                </div>

                <h1 id="tillbehör" className={"text-4xl font-bold text-center lg:pt-8 pt-24 pb-10"}>
                    Tillbehör
                </h1>
                <div className={"flex flex-wrap gap-8 justify-center"}>
                    <DishesCard img={tillbehörimg} title={"Tillbehör"} price={"100 kr"}/>
                    <DishesCard img={tillbehörimg} title={"Tillbehör"} price={"100 kr"}/>
                    <DishesCard img={tillbehörimg} title={"Tillbehör"} price={"100 kr"}/>
                    <DishesCard img={tillbehörimg} title={"Tillbehör"} price={"100 kr"}/>
                    <DishesCard img={tillbehörimg} title={"Tillbehör"} price={"100 kr"}/>
                    <DishesCard img={tillbehörimg} title={"Tillbehör"} price={"100 kr"}/>
                </div>

                <h1 id="drycker" className={"text-4xl font-bold text-center lg:pt-8 pt-24 pb-10"}>
                    Drycker
                </h1>
                <div className={"flex flex-wrap gap-8 justify-center"}>
                    <DishesCard img={dryckimg} title={"Drycker"} price={"100 kr"}/>
                    <DishesCard img={dryckimg} title={"Drycker"} price={"100 kr"}/>
                    <DishesCard img={dryckimg} title={"Drycker"} price={"100 kr"}/>
                    <DishesCard img={dryckimg} title={"Drycker"} price={"100 kr"}/>
                    <DishesCard img={dryckimg} title={"Drycker"} price={"100 kr"}/>
                    <DishesCard img={dryckimg} title={"Drycker"} price={"100 kr"}/>
                </div>
            </div>
        </div>
    )
}

export default Menu