import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Dishes from './components/Dishes'
import About from "./components/About.jsx";
import Menu from './components/Menu'
import Review from "./components/Review.jsx";
import Footer from "./components/Footer.jsx";

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

                    <div id={"menu"}>
                        <Menu/>
                    </div>

                    <div id={"about"}>
                        <About/>
                    </div>

                    <div id={"reviews"}>
                        <Review/>
                    </div>

                    <div>
                        <Footer/>
                    </div>
                </main>
            </div>
        </>
    )
}

export default App
