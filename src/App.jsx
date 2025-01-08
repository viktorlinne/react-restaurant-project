import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Dishes from './components/Dishes'
import About from "./components/About.jsx";
import Menu from './components/Menu'
import Review from "./components/Review.jsx";

function App() {
    return (
        <>
            <div>
                <Navbar/>

                <main>
                    <div id={"home"}>
                        <Home/>
                    </div>

                    <div id={"dishes"}>
                        <Dishes/>
                    </div>

                    <div id={"about"}>
                        <About/>
                    </div>

                    <div id={"menu"}>
                        <Menu/>
                    </div>

                    <div id={"reviews"}>
                        <Review/>
                    </div>
                </main>
            </div>
        </>
    )
}

export default App
