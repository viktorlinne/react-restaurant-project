import React from 'react'
import DishesCard from "../layouts/DishesCard.jsx";
import img from "./assets/dish-img.jpg"

const Dishes = () => {
    return (
        <div>
            <h1>
                Våra Rätter
            </h1>
            <div>
                <DishesCard img={img} title={"Pizza"} price={"100 kr"}/>
            </div>
        </div>
    )
};

export default Dishes;