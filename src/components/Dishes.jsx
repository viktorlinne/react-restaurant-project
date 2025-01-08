import React from 'react'
import DishesCard from "/src/layouts/DishesCard.jsx";
import img from "/src/assets/dish-img.jpg"

const Dishes = () => {
    return (
        <div className={"min-h-screen flex flex-col justify-center items-center lg:px-32 px-5"}>
            <h1 className={"text-4xl font-semibold text-center pt-24 pb-10"}>
                Våra Rätter
            </h1>
            <div className={"flex flex-wrap gap-8 justify-center"}>
                <DishesCard img={img} title={"Pizza"} price={"100 kr"}/>
                <DishesCard img={img} title={"Pizza"} price={"100 kr"}/>
                <DishesCard img={img} title={"Pizza"} price={"100 kr"}/>
                <DishesCard img={img} title={"Pizza"} price={"100 kr"}/>
                <DishesCard img={img} title={"Pizza"} price={"100 kr"}/>
                <DishesCard img={img} title={"Pizza"} price={"100 kr"}/>
                <DishesCard img={img} title={"Pizza"} price={"100 kr"}/>
                <DishesCard img={img} title={"Pizza"} price={"100 kr"}/>
                <DishesCard img={img} title={"Pizza"} price={"100 kr"}/>
                <DishesCard img={img} title={"Pizza"} price={"100 kr"}/>
                <DishesCard img={img} title={"Pizza"} price={"100 kr"}/>
                <DishesCard img={img} title={"Pizza"} price={"100 kr"}/>
                <DishesCard img={img} title={"Pizza"} price={"100 kr"}/>
                <DishesCard img={img} title={"Pizza"} price={"100 kr"}/>
                <DishesCard img={img} title={"Pizza"} price={"100 kr"}/>
                <DishesCard img={img} title={"Pizza"} price={"100 kr"}/>
            </div>
        </div>
    )
};

export default Dishes;