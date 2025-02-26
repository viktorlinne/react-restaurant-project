import React from "react";
import { Link } from "react-scroll";

const CategoriesCard = (props) => {
    return (
        <div className={"bg-white w-60 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg"}>
            <div className="flex items-center justify-center">
                <img
                    className="rounded-xl w-full h-40 object-cover"
                    src={props.img}
                    alt="example of food"
                />
            </div>
            <div className={"space-y-4"}>
                <h3 className={"font-bold text-center text-xl pt-6"}>{props.title}</h3>
            </div>
            <div className={"flex flex-row items-center justify-center gap-4"}>
                <h3 className={"font-semibold text-lg"}>{props.price}</h3>
                <Link
                    to={props.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                >
                    <button className="px-6 py-1 border-2 text-black border-button hover:border-button  hover:text-button transition-all rounded-full">
                        Hoppa till {props.title}
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CategoriesCard;
