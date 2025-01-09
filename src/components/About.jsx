import React from 'react';
import about from '../assets/about.png';
import { Link } from "react-scroll";

const About = () => {
    return (
        <div className={"bg-background min-h-screen flex flex-col lg:flex-col justify-center items-center lg:px-32 px-5"}>

            <div className={""}>
                <h1 className={"font-semibold text-4xl text-center"}>
                    Varför Välja Oss?
                </h1>

                <p className={"text-center p-4"}>
                    Vi värnar om hantverket som är att baka pizza och har skapat oss ett namn för oss själva
                    genom att alltid erbjuda god pizza med färska ingredienser.
                </p>
            </div>

            {/* Image */}
            <img className={"w-4/5 max-w-3xl rounded-lg shadow-lg"} src={about} alt="image of restaurant exterior" />

            {/* Iframe */}
            <Link>
                <iframe
                    id={"find-us"}
                    className={"w-4/5 max-w-3xl h-96 mt-4 shadow-lg rounded-lg"} // Same classes as the image
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2144.442148676628!2d12.073869577175577!3d57.48783625703811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464fe94a55409011%3A0xfdcd869443c8942d!2sLa%20Mama%20Pizzeria!5e0!3m2!1ssv!2sse!4v1736408964440!5m2!1ssv!2sse"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                ></iframe>
            </Link>

        </div>
    );
};

export default About;
