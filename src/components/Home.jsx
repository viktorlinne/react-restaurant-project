import React from 'react';

const Home = () => {
    return (
        <div className={"min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/hero.jpg')] bg-cover bg-no-repeat"}>
            <div className={"w-full lg:w-2/3 space-y-5"}>

                <h1 className={"text-white font-semibold text-6xl"}>
                    Välkommen till La Mamas!
                </h1>

                <p className={"text-white mt-4"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>

            </div>
        </div>
    )
}

export default Home;
