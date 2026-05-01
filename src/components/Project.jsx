import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import { div } from 'framer-motion/client'
import ProjectCard from './ProjectCard'


const Project = () => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='projects'
            className='py-20'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>
                    My
                    <span className='text-purple'> Projects</span> </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>A section of my recent works</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>

                    {/**Project Card */}
                    {
                        projects.map((project) => (
                            <ProjectCard key={project.title} {...project} />
                        ))
                    }

                </div>
            </div>
        </motion.div>
    )
}


export default Project