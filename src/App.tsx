import './App.css'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiTypescript,

} from "react-icons/si";

function App() {
  const handleScrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const items = document.querySelectorAll('.animate-item')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting)
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -15% 0px',
      }
    )

    items.forEach((item) => observer.observe(item))
    return () => items.forEach((item) => observer.unobserve(item))
  }, [])

  return (
    <>
      <Navbar />
      <section id="hero" className="hero-bg min-h-screen w-full flex items-center justify-center text-white px-4 animate-item fade-up">
      <div className="floating-balls absolute inset-0 pointer-events-none">
        <span className="floating-ball ball-1" />
        <span className="floating-ball ball-2" />
        <span className="floating-ball ball-3" />
        <span className="floating-ball ball-4" />
        <span className="floating-ball ball-5" />
        <span className="floating-ball ball-6" />
        <span className="floating-ball ball-7" />
        <span className="floating-ball ball-8" />
        <span className="floating-ball ball-9" />
        <span className="floating-ball ball-10" />
      </div>

      <div className="container mx-auto text-center relative z-10 animate-item fade-up">
        <h1 className="text-6xl font-bold text-fuchsia-100 pb-4">
          Hello, It's Tamara
        </h1>

        <p className="text-5xl text-fuchsia-300">
          I'm a passionate Web Developer
        </p>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleScrollToAbout}
              className="cta relative inline-flex text-2xl mt-8 items-center justify-center px-6 py-3 border border-fuchsia-400 text-fuchsia-200 overflow-visible animate-item fade-up"
            >
              <span className="relative z-20">View my work 🡫</span>
              <span aria-hidden className="pulse pulse-1" />
              <span aria-hidden className="pulse pulse-2" />
              <span aria-hidden className="pulse pulse-3" />
            </button>
          </div>
      </div>
    </section>

    <section id="about" className="about-section min-h-screen flex items-center justify-center px-4 py-24 text-white animate-item fade-up">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 relative inline-block animate-item fade-up">
          <h2 className="text-5xl font-bold text-fuchsia-100 pb-4">About Me</h2>
          <div className="absolute bottom-0 left-0 w-32 h-2 bg-fuchsia-900"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-12">
          <div className="flex flex-col items-center lg:items-start justify-start animate-item slide-left">
          
            <p className="text-lg text-fuchsia-200 leading-relaxed">
              I’m a fourth-year Computer Science and Multimedia Technology student at the University of Costa Rica, with a strong passion for crafting modern, user-focused web applications. I enjoy combining creativity and technical problem-solving to build intuitive digital experiences that are both functional and visually appealing. Throughout my studies, I have worked with technologies such as JavaScript, TypeScript, React, and database systems, continuously expanding my knowledge through personal academic projects. I am always eager to learn new tools, improve my development skills, and take on challenges that help me grow as a web developer.
            </p>
            <a href="public/Docs/CV-Tamara-Bonilla.pdf" target="_blank"
  rel="noopener noreferrer" className="mt-6 px-6 py-3 border border-fuchsia-400 text-fuchsia-200 overflow-visible text-lg  hover:bg-fuchsia-400/20 transition-colors">
              Download Resume
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-20 animate-item slide-right">
            <div className="skill-card">
              <FaHtml5 className="skill-icon" />
              <p className="mt-2 text-center">HTML</p>
            </div>
            <div className="skill-card">
              <FaCss3Alt className="skill-icon" />
              <p className="mt-2 text-center">CSS</p>
            </div>
            <div className="skill-card">
              <SiJavascript className="skill-icon" />
              <p className="mt-2 text-center">JavaScript</p>
            </div>
            <div className="skill-card">
              <SiTypescript className="skill-icon" />
              <p className="mt-2 text-center">TypeScript</p>
            </div>
            <div className="skill-card">
              <FaReact className="skill-icon" />
              <p className="mt-2 text-center">React</p>
            </div>
            <div className="skill-card">
              <SiTailwindcss className="skill-icon" />
              <p className="mt-2 text-center">Tailwind</p>
            </div>
            <div className="skill-card">
              <FaFigma className="skill-icon" />
              <p className="mt-2 text-center">Figma</p>
            </div>
            <div className="skill-card">
              <FaNodeJs className="skill-icon" />
              <p className="mt-2 text-center">Node.js</p>
            </div>
            <div className="skill-card">
              <FaGitAlt className="skill-icon" />
              <p className="mt-2 text-center">Git</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id ="projects" className='projects-section min-h-screen  items-center justify-center px-4 py-24 text-white animate-item fade-up'>
      <div className="container mx-auto max-w-6xl animate-item fade-up">
        <h2 className="text-5xl font-bold text-fuchsia-100 pb-5 pt-10">Projects</h2>
      </div>
      <div className="container mx-auto max-w-6xl mt-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">

          <div className="project-card bg-black/50 backdrop-blur-md border border-fuchsia-900/50 p-6 rounded-lg hover:transition-transform hover:scale-105 flex flex-col h-full animate-item slide-left">
            <img src="/img/project1.png" alt="Project 1" className="mb-4 w-full h-56 object-cover rounded-md" />
            <div>
              <h1 className="text-2xl font-bold mb-4">Puramente</h1>
              <p>A modern educational platform that combines technology and interactive learning tools to help students develop skills in a fun and effective way. <br />Credentials: superadmin@puramente.com Password:SuperAdmin2025!</p>
            </div>
            <div className="flex gap-4 mt-auto">
              <a href="https://github.com/tallermulti2025-PM/PuraMente---Producci-n.git" target="_blank" rel="noopener noreferrer" className="block text-fuchsia-100 hover:underline border border-fuchsia-900/50 p-2 rounded-lg">View on GitHub</a>
              <a href="https://puramente.vercel.app/" target="_blank" rel="noopener noreferrer" className="block text-fuchsia-100 hover:underline border border-fuchsia-900/50 p-2 rounded-lg">Live Demo</a>
            </div>
          </div>

          <div className="project-card bg-black/50 backdrop-blur-md border border-fuchsia-900/50 p-6 rounded-lg hover:transition-transform hover:scale-105 flex flex-col h-full animate-item slide-right">
            <img src="/img/project2.png" alt="Project 2" className="mb-4 w-full h-56 object-cover rounded-md" />
            <div>
              <h1 className="text-2xl font-bold mb-4">FemSafe</h1>
              <p>FemSafe is a mobile-focused web application that allows women to mark safe and unsafe locations on a Google Maps interface and access information about available support resources. <br />

 Code is available on GitHub. For the best experience, use mobile view. <br /> Credentials: bonillaatami@gmail.com Password:femSafe2025</p>
            </div>
            <div className="flex gap-4 mt-auto">
              <a href="https://github.com/tamib0ke/FemSafe.git" target="_blank" rel="noopener noreferrer" className="block text-fuchsia-100 hover:underline border border-fuchsia-900/50 p-2 rounded-lg">View on GitHub</a>
            </div>
          </div>

          <div className="project-card bg-black/50 backdrop-blur-md border border-fuchsia-900/50 p-6 rounded-lg hover:transition-transform hover:scale-105 flex flex-col h-full animate-item slide-left">
            <img src="/img/project3.png" alt="Project 3" className="mb-4 w-full h-56 object-cover rounded-md" />
            <div>
              <h1 className="text-2xl font-bold mb-4">Min's Way</h1>
              <p>Mi's Way is a Java maze game developed in NetBeans. Players must navigate through a maze filled with traps and shortcuts to reach the goal. This was my first programming project and represents the beginning of my journey as a developer. <br /></p>
            </div>
            <div className="flex gap-4 mt-auto">
              <a href="https://github.com/tamib0ke/Min-sWay.git" target="_blank" rel="noopener noreferrer" className="block text-fuchsia-100 hover:underline border border-fuchsia-900/50 p-2 rounded-lg">View on GitHub</a>
            </div>
          </div>

        </div>

      </div>
    </section>
    <footer>

    </footer>
    </>
  )
}

export default App