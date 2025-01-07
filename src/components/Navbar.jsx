import React from "react"
import {Link} from 'react-scroll'
import Button from "../layouts/Button"
import {BiRestaurant} from "react-icons/bi" //Byt till LaMamas logga

const Navbar = () => {
    return (
        <div className="fixed w-full">
            <div>
                <div
                    className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
                    <div className="flex flex-row items-center cursor-pointer">
                        <span>
                            <BiRestaurant size={32}/>
                        </span>
                        <h1 className="text-xl font-semibold">La Mamas</h1>
                    </div>
                    <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
                        <Link to={"startsida"} spy={true} smooth={true} duration={500}
                              className={"hover:text-brightColor transition-all cursor-pointer"}>Startsida</Link>
                        <div className="relative group">
                            <div className="flex items-center gap-1">
                                <Link to={"meny"} spy={true} smooth={true} duration={500}
                                      className={"hover:text-brightColor transition-all cursor-pointer"}>Meny</Link>
                            </div>
                            <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">

                                <li><Link to={"meny"} spy={true} smooth={true} duration={500}
                                          className={"hover:text-brightColor transition-all cursor-pointer"}>Pizzor</Link>
                                </li>

                                <li><Link to={"meny"} spy={true} smooth={true} duration={500}
                                          className={"hover:text-brightColor transition-all cursor-pointer"}>Rullar</Link>
                                </li>

                                <li><Link to={"meny"} spy={true} smooth={true} duration={500}
                                          className={"hover:text-brightColor transition-all cursor-pointer"}>Sallader</Link>
                                </li>
                            </ul>
                        </div>
                        <Link to={"om-oss"} spy={true} smooth={true} duration={500}
                              className={"hover:text-brightColor transition-all cursor-pointer"}>Om oss</Link>

                        <Link to={"hitta-oss"} spy={true} smooth={true} duration={500}
                              className={"hover:text-brightColor transition-all cursor-pointer"}>Hitta Oss</Link>

                        <Link to={"recensioner"} spy={true} smooth={true} duration={500}
                              className={"hover:text-brightColor transition-all cursor-pointer"}>Recensioner</Link>

                        <Button title={"Beställ Online"}/>

                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar