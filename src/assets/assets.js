import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.png';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
  profileImg,
}


export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Innovative',
    description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'Design Oriented',
    description: 'Beautiful design and user experience are at the heart of everything I create.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'I write maintainable, efficient code following best practices and modern patterns.',
    color: 'text-blue'
  }
];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'React']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Python', 'Flask', 'Django']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'SQLite', 'MySQL']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Postman', 'VS Code']
  }
];



export const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects, technical skills, and blogs in a clean and structured manner.",
    image: projectImg4,
    tech: ["React", "Tailwind CSS", "Framer Motion", "Frontend"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "https://github.com/Kumar24Gaurav/Portfolio/tree/main",
  },
  {
    title: "Finance Tracker",
    description: "A real-time finance tracking application with data visualization, JWT-based authentication, and role-based user access control.",
    image: projectImg5,
    tech: ["Flask", "HTML/CSS", "JavaScript", "Python", "MySQL"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "#",
    code: "https://github.com/Kumar24Gaurav/Finance_tracker/tree/master",
  }
];


export const workData = [
  {
    role: "Full Stack Developer - Training",
    company: "Besant Technologies",
    duration: "Completed",
    description:
      "Completed a comprehensive full stack development training program, gaining hands-on experience in building web applications using React, Django, Python, and MySQL.",
    color: "purple"
  },
  {
    role: "Python Developer - Internship",
    company: "Nasya Software Technologies Pvt. Ltd.",
    duration: "Dec (2025) - March (2026)",
    description:
      "Interned as a Python Developer, contributing to backend development and API integration while enhancing my skills in Python programming and software development practices.",
    color: "pink"
  }
];
