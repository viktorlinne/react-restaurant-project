import React from 'react';
import Button from "./Button.jsx";

const DishesCard = (props) => {
    return (
        <div className={"w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg"}>
            <img className={"rounded-xl"} src={props.img} alt="example of food"/>
            <div className={"space-y-4"}>
                <h3 className={"font-semibold text-center text-xl pt-6"}>{props.title}</h3>
            </div>
            <div className={"flex flex-row items-center justify-center gap-4"}>
                <h3 className={"font-semibold text-lg"}>{props.price}</h3>
                <Button title={"Beställ Online"}/>
            </div>
        </div>
    );
};

export default DishesCard;
