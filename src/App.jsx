import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

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

                    </div>
                </main>
            </div>
        </>
    )
}

export default App
