import React from 'react';
import about from '../assets/about.png'

const About = () => {
    return (
        <div className={"min-h-screen flex flex-col lg:flex-col justify-center items-center lg:px-32 px-5"}>

            <div className={"space-y-4 lg:pt-14"}>
                <h1 className={"font-semibold text-4xl text-center"}>
                    Varför Välja Oss?
                </h1>

                <p className={"text-center p-4"}>
                    Vi värnar om hantverket som är att baka pizza och har skapat oss ett namn för oss själva
                    genom att alltid erbjuda god pizza med färska ingredienser.
                </p>

            </div>

            <img className={"rounded-lg"} src={about} alt="image of restaurant exterior"/>


        </div>


    )
}

export default About;