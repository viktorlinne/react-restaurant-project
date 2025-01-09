import React from 'react';
import about from '../assets/about.png';

const About = () => {
    return (
        <div className={"flex flex-col justify-center items-center lg:px-32 px-5"}>

            {/* Heading Section */}
            <div className={"mt-4"}>
                <h1 className={"font-semibold text-4xl text-center"}>
                    Varför Välja Oss?
                </h1>
                <p className={"text-center p-4"}>
                    Vi värnar om hantverket som är att baka pizza och har skapat oss ett namn för oss själva
                    genom att alltid erbjuda god pizza med färska ingredienser.
                </p>
            </div>

            {/* Image */}
            <img
                className={"w-4/5 max-w-3xl rounded-lg shadow-lg mt-4"}
                src={about}
                alt="image of restaurant exterior"
            />

            {/* Iframe */}
            <div className={"w-4/5 max-w-3xl mt-4"}>
                <iframe
                    id={"find-us"}
                    className={"h-96 w-full rounded-lg shadow-lg"}
                    src="https://www.google.com/maps/embed?..."
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    style={{ border: "none" }}
                ></iframe>
            </div>

        </div>
    );
};

export default About;
