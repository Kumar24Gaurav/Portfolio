import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skill from '../components/Skill'
import Project from '../components/Project'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Skill />
            <Project />
            <Work />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home