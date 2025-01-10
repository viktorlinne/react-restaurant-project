import React, {useState} from "react"
import {Link} from 'react-scroll'
import Button from "../layouts/Button"
import {BiRestaurant} from "react-icons/bi" //Byt till LaMamas logga
import {AiOutlineClose} from "react-icons/ai";
import {AiOutlineMenuUnfold} from "react-icons/ai";
import {BiChevronDown} from "react-icons/bi";

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    }

    return (

        <div className="fixed w-full ">
            <div>
                <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-nav shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
                    <div className="flex flex-row items-center cursor-pointer">

                        <span>
                            <BiRestaurant size={32}/>
                        </span>

                        <Link to={"home"}
                              spy={true}
                              smooth={true}
                              duration={500}>
                          <h1 className="text-xl font-semibold hover:text-button transition-all cursor-pointer">La Mamas</h1>
                        </Link>

                    </div>

                    <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">

                        <Link to={"home"}
                              spy={true}
                              smooth={true}
                              duration={500}
                              className={"hover:text-button transition-all cursor-pointer"}>Startsida
                        </Link>

                        <div className="relative group">
                            <div className="flex items-center gap-1">

                                <Link to={"menu"}
                                      spy={true}
                                      smooth={true}
                                      duration={500}
                                      className={"hover:text-button transition-all cursor-pointer"}>Meny
                                </Link>

                                <BiChevronDown className={"cursor-pointer"}
                                               size={25}/>

                            </div>

                            <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">


                                <li><Link to={"pizzor"}
                                          spy={true}
                                          smooth={true}
                                          duration={500}
                                          className={"hover:text-button transition-all cursor-pointer"}>Pizza
                                </Link></li>


                                <li><Link to={"kebabrätter"}
                                          spy={true}
                                          smooth={true}
                                          duration={500}
                                          className={"hover:text-button transition-all cursor-pointer"}>Kebabrätter
                                </Link></li>


                                <li><Link to={"hamburgare"}
                                          spy={true}
                                          smooth={true}
                                          duration={500}
                                          className={"hover:text-button transition-all cursor-pointer"}>Hamburgare
                                </Link></li>


                                <li><Link to={"tex-mex"}
                                          spy={true}
                                          smooth={true}
                                          duration={500}
                                          className={"hover:text-button transition-all cursor-pointer"}>Tex Mex
                                </Link></li>


                                <li><Link to={"pastarätter"}
                                          spy={true}
                                          smooth={true}
                                          duration={500}
                                          className={"hover:text-button transition-all cursor-pointer"}>Pastarätter
                                </Link></li>


                                <li><Link to={"sallader"}
                                          spy={true}
                                          smooth={true}
                                          duration={500}
                                          className={"hover:text-button transition-all cursor-pointer"}>Sallader
                                </Link></li>


                                <li><Link to={"såser"}
                                          spy={true}
                                          smooth={true}
                                          duration={500}
                                          className={"hover:text-button transition-all cursor-pointer"}>Såser
                                </Link></li>


                                <li><Link to={"tillbehör"}
                                          spy={true}
                                          smooth={true}
                                          duration={500}
                                          className={"hover:text-button transition-all cursor-pointer"}>Tillbehör
                                </Link></li>


                                <li><Link to={"drycker"}
                                          spy={true}
                                          smooth={true}
                                          duration={500}
                                          className={"hover:text-button transition-all cursor-pointer"}>Drycker
                                </Link></li>

                            </ul>

                        </div>

                        <Link to={"about"}
                              spy={true}
                              smooth={true}
                              duration={500}
                              className={"hover:text-button transition-all cursor-pointer"}>Om oss
                        </Link>


                        <Link to={"reviews"}
                              spy={true}
                              smooth={true}
                              duration={500}
                              className={"hover:text-button transition-all cursor-pointer"}>Recensioner
                        </Link>

                        <Button title={"Beställ Online"}/>

                    </nav>

                    <div className={"md:hidden flex items-center"}>
                        {menu
                            ?
                            (<AiOutlineClose size={25}
                                             onClick={handleChange}/>)
                            :
                            (<AiOutlineMenuUnfold size={25}
                                                  onClick={handleChange}/>)
                        }

                    </div>
                </div>
                <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-black 
                                           text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full 
                                           h-fit transition-transform duration-300`}>


                    <Link to={"menu"}
                          spy={true}
                          smooth={true}
                          duration={500}
                          className={"hover:text-button transition-all cursor-pointer"}>Meny
                    </Link>

                    <Link to={"about"}
                          spy={true}
                          smooth={true}
                          duration={500}
                          className={"hover:text-button transition-all cursor-pointer"}>Om oss
                    </Link>

                    <Link to={"reviews"}
                          spy={true}
                          smooth={true}
                          duration={500}
                          className={"hover:text-button transition-all cursor-pointer"}>Recensioner
                    </Link>

                    <Button title={"Beställ Online"}/>

                </div>
            </div>
        </div>
    )
}

export default Navbar