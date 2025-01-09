import React from 'react';
import Button from "../layouts/Button.jsx";

const Home = () => {
    return (
        <div
            className={"min-h-screen flex flex-row justify-between  items-center lg:px-32 px-5 bg-[url('./assets/hero.jpg')] bg-cover bg-no-repeat"}>
            <div className={"w-full lg:w-2/3 space-y-5"}>
                <h1 className={"text-white font-semibold text-6xl"}>
                    Välkommen till La Mamas!
                </h1>
                <p className={"text-white"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non nulla provident voluptatum?
                    Aliquam aliquid blanditiis commodi cupiditate, eveniet hic illo ipsa molestias neque nesciunt
                    perspiciatis quos rem rerum ut!
                </p>
                <div className={"lg:pl-44"}>
                    <Button title={"Beställ Online"}/>
                </div>
            </div>
        </div>
    )
}

export default Home;