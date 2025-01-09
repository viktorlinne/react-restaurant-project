import React from "react";
import { Link } from "react-scroll";
import Button from "./Button.jsx";

const DishesCard = (props) => {
    return (
        <div className={"w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg"}>
            {/* Center the image */}
            <div className="flex items-center justify-center">
                <img
                    className="rounded-xl w-full h-40 object-cover"
                    src={props.img}
                    alt="example of food"
                />
            </div>
            <div className={"space-y-4"}>
                <h3 className={"font-semibold text-center text-xl pt-6"}>{props.title}</h3>
            </div>
            <div className={"flex flex-row items-center justify-center gap-4"}>
                <h3 className={"font-semibold text-lg"}>{props.price}</h3>
                {/* Wrap the button in a Link */}
                <Link
                    to={props.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                >
                    <Button title={`Hoppa till ${props.title}`} />
                </Link>
            </div>
        </div>
    );
};

export default DishesCard;
