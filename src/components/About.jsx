import React from 'react';
import about from '../assets/about.png';

const About = () => {
    return (

        <div className={"flex flex-col justify-center items-center lg:px-32 px-5 mt-4"}>
            <div className={"mt-4"}>

                <h1 className={"font-semibold text-4xl text-center"}
                    id={"find-us"}>
                    Varför Välja Oss?
                </h1>

                <p className={"text-center p-4"}>
                    Vi värnar om hantverket som är att baka pizza och har skapat oss ett namn för oss själva
                    genom att alltid erbjuda god pizza med färska ingredienser.
                </p>

            </div>

            <img
                className={"w-4/5 max-w-3xl rounded-lg shadow-lg mt-4"}
                src={about}
                alt="image of restaurant exterior"
            />

            <div className={"w-4/5 max-w-3xl mt-4"}>

                <iframe
                    className={"h-96 w-full rounded-lg shadow-lg"}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2144.442148676628!2d12.073869577175577!3d57.48783625703811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464fe94a55409011%3A0xfdcd869443c8942d!2sLa%20Mama%20Pizzeria!5e0!3m2!1ssv!2sse!4v1736427018358!5m2!1ssv!2sse"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                >
                </iframe>

            </div>
        </div>
    );
};

export default About;
