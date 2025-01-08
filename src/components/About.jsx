import React from 'react';
import about from '../assets/about.png'
import Button from "../layouts/Button.jsx";

const About = () => {
    return (
        <div className={"min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5"}>
            <img src={about} alt="image of restaurant exterior"/>

            <div className={"space-y-4 lg:pt-14"}>
                <h1 className={"font-semibold text-4xl text-center md:text-start"}>
                    Varför Välja Oss?
                </h1>

                <p className={" "}>
                    Vi värnar om hantverket som är att baka pizza och har därigenom skapat oss ett namn för oss själva
                    genom att alltid erbjuda god pizza med färska ingredienser.
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ea itaque laboriosam magni
                    molestias neque nostrum possimus quibusdam vel velit. Doloribus excepturi exercitationem expedita
                    fugit natus non reiciendis rem vitae.
                </p>

                <Button title={"Beställ Online"}/>
            </div>
        </div>


    )
}

export default About;