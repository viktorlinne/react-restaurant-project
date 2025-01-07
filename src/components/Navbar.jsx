import React from "react"
import {Link} from 'react-scroll'
import {BiRestaurant} from "react-icons/bi"

const Navbar = () => {
    return (
        <div className="fixed w-full">
            <div>
                <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
                    <div className="flex flex-row items-center cursor-pointer">
                        <span>
                            <BiRestaurant size={32}/>
                        </span>
                        <h1 className="text-xl font-semibold">La Mamas</h1>
                    </div>
                    <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
                        <Link to={"startsida"} spy={true} smooth={true} duration={500}
                              className={"hover:text-brightColor transition-all cursor-pointer"}>Startsida</Link>
                        <Link to={"meny"} spy={true} smooth={true} duration={500}
                              className={"hover:text-brightColor transition-all cursor-pointer"}>Meny</Link>
                        <Link to={"om-oss"} spy={true} smooth={true} duration={500} className={"hover:text-brightColor transition-all cursor-pointer"}>Om
                            oss</Link>
                        <Link to={"hitta-oss"} spy={true} smooth={true} duration={500} className={"hover:text-brightColor transition-all cursor-pointer"}>Hitta
                            Oss</Link>
                        <Link to={"recensioner"} spy={true} smooth={true} duration={500}
                              className={"hover:text-brightColor transition-all cursor-pointer"}>Recensioner</Link>

                        <button>Beställ Online</button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar