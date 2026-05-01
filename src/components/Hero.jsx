import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const Hero = () => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='home'
            className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
        >
            {/**left side content */}
            <div className='container mx-auto px-20 flex flex-col md:flex-row items-center justify-between'>
                <div className='md:w-1/2 mb-10 md:mb-0'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                        Hi, I'm <span className='text-purple'>Kumar Gaurav</span>
                    </h1>
                    <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>Full Stack Developer</h2>
                    <p className='text-lg text-gray-300 mb-8'> I am a passionate Full Stack Developer with a strong foundation in building scalable web applications using modern technologies. I specialize in developing efficient backend systems with Python and integrating them with responsive, user-friendly frontend interfaces using React.</p>
                    <div className='flex space-x-4'>
                        <a href="#projects" className='px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration:300'>View Work</a>
                        <a href="#contact" className='px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition decoration-purple-300'>Contact Me</a>
                    </div>
                </div>
                {/**right side content */}
                <div className='md:w-1/2 flex justify-center'>
                    <div className='relative w-64 h-64 md:w-80 md:h-80'>
                        <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink animate-pluse-slow opacity-70'>
                            <motion.img
                                animate={{ y: [0, -20, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut"
                                }}
                                className='relative rounded-full w-64 h-64 and md:w-80 md:h-80 object-cover z-10 animate-float'
                                src={assets.profileImg} alt="profile" />
                        </div>
                    </div>
                </div>
            </div>


        </motion.div>
    )
}

export default Hero