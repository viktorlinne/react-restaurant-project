import React from 'react';

const Footer = () => {
    return (
        <div className={"bg-black text-white rounded-t-3xl mt-8 md:mt-0"}>
            <div className={"flex flex-col md:flex-row justify-between p-8 md:px-32 px-5"}>
                <div className={"w-full md:w-1/4"}>
                    <h1 className={"font-semibold text-xl pb-4"}>
                        La Mamas Pizzeria
                    </h1>
                    <p className={"text-sm"}>
                        Välkommna att njuta en av Kungsbackas riktigt gedigna pizzerior
                    </p>
                </div>
                <div className={"font-medium text-xl pb-4 pt-5 md:pt-0"}>

                    <nav className={"flex flex-col gap-2"}>

                        <a className={"hover:text-button transition-all cursor-pointer"} href="/">Startsida</a>
                        <a className={"hover:text-button transition-all cursor-pointer"} href="/">Meny</a>
                        <a className={"hover:text-button transition-all cursor-pointer"} href="/">Om Oss</a>
                        <a className={"hover:text-button transition-all cursor-pointer"} href="/">Hitta Oss</a>
                        <a className={"hover:text-button transition-all cursor-pointer"} href="/">Recensioner</a>

                    </nav>

                </div>

                <p className={"text-center py-4"}>
                    @Copyright utvecklad av <span className={"text-button"}>Viktor Linné</span> | All Rights
                    Reserved {/*Lägga till länk till eventuell egen hemsida här!!!*/}
                </p>

            </div>
        </div>
    )
}

export default Footer;