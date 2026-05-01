import { div } from "framer-motion/client";
import React from "react";
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'

const About = () => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='about'
            className='py-20 bg-dark-200'
        >
            <div className="container mx-auto px-6">
                {/**Heading */}
                <h2 className="text-3xl font-bold text-center mb-4">About <span className="text-purple">Me</span></h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">Get to know more about my background and passion</p>

                {/**image + content */}
                <div className="flex flex-col md:flex-row align-items-center gap-12">
                    {/**image */}
                    <div className="md:w-1/3 rounded-2xl overflow-hidden">
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="w-full h-full object-cover"
                            src={assets.profileImg} alt="profile" />
                    </div>

                    {/**content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="md:w-2/3"
                    >
                        <div className="rounded-2xl p-8 text-left md:text-left">
                            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
                            <p className="text-gray-300 mb-4">
                                I'm a passionate self-taught developer with a strong foundation in Python and a growing expertise in full stack development. My journey into programming began with a curiosity for how things work and a desire to create impactful solutions.
                            </p>
                            <p className="text-gray-300 mb-4">
                                I started with Python and gradually expanded into full stack development, working with technologies like HTML, CSS, Tailwind, JavaScript, React, and My-SQL.
                            </p>
                            <p className="text-gray-300 mb-10">
                                Currently, I am focused on strengthening my development skills, improving problem-solving through data structures and algorithms, and preparing for opportunities in the software industry. I am driven by continuous learning and aim to build scalable, real-world applications.
                            </p>

                            {/**cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {
                                    aboutInfo.map((data) => (
                                        <div key={data.title} className="bg-dark-300
                                        rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                                        >
                                            <div className="text-purple text-2xl mb-4">
                                                <data.icon />
                                            </div>
                                            <h4 className="text-xl font-semibold mb-3">{data.title}</h4>
                                            <p className="text-gray-400">{data.description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </motion.div>
    )
}

export default About