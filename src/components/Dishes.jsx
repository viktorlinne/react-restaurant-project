import React from 'react';
import DishesCard from "/src/layouts/DishesCard.jsx";
import {Link} from 'react-scroll';
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
                <DishesCard to="pizzor" img={pizzaimg} title={"Pizzor"} />
                <DishesCard to="kebabrätter" img={kebabimg} title={"Kebabrätter"} />
                <DishesCard to="hamburgare" img={hamburgareimg} title={"Hamburgare"} />
                <DishesCard to="tex-mex" img={burritoimg} title={"Tex Mex"} />
                <DishesCard to="pastarätter" img={pastaimg} title={"Pastarätter"} />
                <DishesCard to="sallader" img={salladimg} title={"Sallader"} />
                <DishesCard to="såser" img={såsimg} title={"Såser"} />
                <DishesCard to="tillbehör" img={tillbehörimg} title={"Tillbehör"} />
                <DishesCard to="drycker" img={dryckimg} title={"Drycker"} />
            </div>

        </div>
    )
};

export default Dishes;