import React from 'react';
import DishesCard from "/src/layouts/DishesCard.jsx";
import pizzaimg from "/src/assets/pizza.jpg";
import kebabimg from "/src/assets/kebab.jpg";
import hamburgareimg from "/src/assets/hamburgare.jpg";
import burritoimg from "/src/assets/burrito.jpg";
import pastaimg from "/src/assets/pasta.jpg";
import salladimg from "/src/assets/sallad.jpg";
import såsimg from "/src/assets/sås.jpg";
import tillbehörimg from "/src/assets/tillbehör.webp";
import dryckimg from "/src/assets/dryck.webp";


const Dishes = () => {
    return (
        <div className={"min-h-screen flex flex-col justify-center items-center lg:px-32 px-5"}>
            <h1 className={"text-4xl font-semibold text-center pt-24 pb-10"}>
                Vårat Utbud:
            </h1>
            <div className={"flex flex-row flex-wrap gap-8 justify-center"}>
                <DishesCard img={pizzaimg} title={"Pizzor"}/>
                <DishesCard img={kebabimg} title={"Kebabrätter"}/>
                <DishesCard img={hamburgareimg} title={"Hamburgare"}/>
                <DishesCard img={burritoimg} title={"Mexikanska Rätter"}/>
                <DishesCard img={pastaimg} title={"Pastarätter"}/>
                <DishesCard img={salladimg} title={"Sallader"}/>
                <DishesCard img={såsimg} title={"Såser"}/>
                <DishesCard img={tillbehörimg} title={"Tillbehör"}/>
                <DishesCard img={dryckimg} title={"Drycker"}/>
            </div>
        </div>
    )
};

export default Dishes;