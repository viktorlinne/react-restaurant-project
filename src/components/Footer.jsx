import React from 'react';

const Footer = () => {
    return (
        <div className={"bg-black text-white rounded-t-3xl mt-8"}>
            <div className={"flex flex-col md:flex-row justify-between p-8 lg:px-32 px-5"}>
                <div className={"w-full md:w-1/4 mt-4"}>
                    <h1 className={"font-semibold text-xl pb-4"}>
                        La Mamas Pizzeria
                    </h1>
                    <p className={"text-sm"}>
                        Välkommna att njuta en av Kungsbackas riktigt gedigna pizzerior
                    </p>
                </div>
                <div className={"font-medium text-xl pb-4 mt-4"}>

                    <nav className={"flex flex-col gap-2"}>
                        <a className={"hover:text-button transition-all cursor-pointer"} href="/">Startsida</a>
                        {/* (Other links) */}
                    </nav>

                </div>

                <p className={"text-center py-4 mt-4"}>
                    @Copyright utvecklad av <span className={"text-button"}>Viktor Linné</span> | All Rights
                    Reserved {/* Add link if needed */}
                </p>

            </div>
        </div>
    )
}

export default Footer;
