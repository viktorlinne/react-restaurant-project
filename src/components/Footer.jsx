import React from 'react';
import {Link} from "react-scroll";

const Footer = () => {
    return (
        <div className={"bg-nav text-black mt-8"}>
            <div className={"flex text-center flex-col md:flex-row justify-between p-8 lg:px-32 px-5"}>
                <div className={"w-full md:w-1/4 mt-4"}>

                    <h1 className={"font-semibold text-xl pb-4"}>
                        La Mamas Pizzeria
                    </h1>

                    <p className={"font-medium"}>
                        Välkommna att njuta av en riktig pizza bakad i Kungsbackas riktigt gedigna pizzerior
                    </p>

                </div>

                <div className={"w-4/5 max-w-3xl mt-4"}>

                    <iframe
                        className={"h-96 w-full rounded-lg shadow-lg"}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2144.442148676628!2d12.073869577175577!3d57.48783625703811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464fe94a55409011%3A0xfdcd869443c8942d!2sLa%20Mama%20Pizzeria!5e0!3m2!1ssv!2sse!4v1736427018358!5m2!1ssv!2sse"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    >
                    </iframe>

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
