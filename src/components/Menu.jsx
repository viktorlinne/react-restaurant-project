import React from 'react'
import img from '../assets/pizza.jpg'
import DishesCard from "../layouts/DishesCard.jsx";

const Menu = () => {
    return (
        <div className={"min-h-screen flex flex-col justify-center items-center lg:px-32 px-5"}>
            <h1 className={"text-4xl font-bold text-center lg:pt-8 pt-24 pb-10"}>
                Vi Rekommenderar:
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
}

export default Menu