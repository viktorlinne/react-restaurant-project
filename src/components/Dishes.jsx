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
    const categories = [
        {to: "pizzor", img: pizzaimg, title: "Pizzor"},
        {to: "kebabrätter", img: kebabimg, title: "Kebabrätter"},
        {to: "hamburgare", img: hamburgareimg, title: "Hamburgare"},
        {to: "tex-mex", img:burritoimg, title: "Tex Mex"},
        {to: "pastarätter", img:pastaimg, title: "Pastarätter"},
        {to: "sallader", img:salladimg, title: "Sallader"},
        {to: "såser", img:såsimg, title: "Såser"},
        {to: "tillbehör", img:tillbehörimg , title: "Tillbehör"},
        {to: "drycker", img:dryckimg, title: "Drycker"},
    ];
    return (
        <div className={"flex flex-col justify-center items-center lg:px-32 px-5"}>
            <h1 id="menu" className={"text-4xl font-semibold text-center pt-16 pb-10"}>
                Vårat Utbud:
            </h1>
            <div className={"flex flex-row flex-wrap gap-8 justify-center mt-4 w-full"}>
                {categories.map((category, i) => {
                    return <CategoriesCard key={i} to={category.to} img={category.img} title={category.title}/>
                })}
            </div>
        </div>
    );
};

export default Dishes;


