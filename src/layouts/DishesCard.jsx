import React from "react";
import { Link } from "react-scroll";

const DishesCard = (props) => {
    return (
        <div className={"bg-white w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg"}>

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

                <Link
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                >
                    <button
                        className="px-6 py-1 border-2 border-button hover:bg-white
                                   hover:border-button text-black hover:text-button transition-all rounded-full"
                    >
                        Lägg till i varukorg
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default DishesCard;
