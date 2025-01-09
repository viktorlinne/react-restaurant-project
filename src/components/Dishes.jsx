import React from 'react';
import CategoriesCard from '/src/layouts/CategoriesCard.jsx';
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
            <h1 id="menu" className={"text-4xl font-semibold text-center pt-16 pb-10"}>
                Vårat Utbud:
            </h1>

            <div className={"flex flex-row flex-wrap gap-8 justify-center mt-4"}>
                <CategoriesCard to="pizzor" img={pizzaimg} title={"Pizzor"}/>
                <CategoriesCard to="kebabrätter" img={kebabimg} title={"Kebabrätter"}/>
                <CategoriesCard to="hamburgare" img={hamburgareimg} title={"Hamburgare"}/>
                <CategoriesCard to="tex-mex" img={burritoimg} title={"Tex Mex"}/>
                <CategoriesCard to="pastarätter" img={pastaimg} title={"Pastarätter"}/>
                <CategoriesCard to="sallader" img={salladimg} title={"Sallader"}/>
                <CategoriesCard to="såser" img={såsimg} title={"Såser"} />
                <CategoriesCard to="tillbehör" img={tillbehörimg} title={"Tillbehör"} />
                <CategoriesCard to="drycker" img={dryckimg} title={"Drycker"} />
            </div>

        </div>
    )
};

export default Dishes;


