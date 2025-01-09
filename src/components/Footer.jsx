import React from 'react';
import {Link} from "react-scroll";

const Footer = () => {
    return (
        <div className={"bg-nav text-black"}>
            <div className={"flex flex-col md:flex-row justify-between p-8 lg:px-32 px-5"}>
                <div className={"w-full md:w-1/4 mt-4"}>
                    <h1 className={"font-semibold text-xl pb-4"}>
                        La Mamas Pizzeria
                    </h1>
                    <p className={"font-medium"}>
                        Välkommna att njuta av en riktig pizza bakad i Kungsbackas riktigt gedigna pizzerior
                    </p>
                </div>
                <div className={"font-medium text-xl pb-4 mt-4"}>

                    <nav className={"flex flex-col gap-2"}>

                        <Link to={"home"}
                              spy={true}
                              smooth={true}
                              duration={500}
                              className={"hover:text-button transition-all cursor-pointer"}> Startsida</Link>

                        <Link to={"menu"}
                              spy={true}
                              smooth={true}
                              duration={500}
                              className={"hover:text-button transition-all cursor-pointer"}>Meny</Link>

                        <Link to={"about"}
                              spy={true}
                              smooth={true}
                              duration={500}
                              className={"hover:text-button transition-all cursor-pointer"}>Om oss</Link>

                        <Link to={"reviews"}
                              spy={true}
                              smooth={true}
                              duration={500}
                              className={"hover:text-button transition-all cursor-pointer"}>Recensioner</Link>

                    </nav>

                </div>


            </div>

            <p className={"text-center font-medium mt-4 p-4"}>
                @Copyright utvecklad av <span className={"text-button font-medium text-xl"}>Viktor Linné</span> | All
                Rights
                Reserved {/* Lägg till länk till egen sida!!! */}
            </p>

        </div>
    )
}

export default Footer;
