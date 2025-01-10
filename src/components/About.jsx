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

        </div>
    );
};

export default About;
