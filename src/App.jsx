import { useEffect, useState } from "react";
import AOS from "aos/";
import 'aos/dist/aos.css'
import Navebar from "./components/Navebar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100
        });
        document.documentElement.classList.add('dark');
    }, []);

    useEffect(() => {
        AOS.refresh()
    }, [darkMode]);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        document.documentElement.classList.toggle('dark');
    };
    return (
        <div className={darkMode
            ? "bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen"
            : "bg-linear-to-br from-gray-50 to-blue-50 min-h-screen"}>
            <Navebar darkMode = {darkMode} toggleDarkMode={toggleDarkMode} />
            <Hero darkMode = {darkMode} />
            <About darkMode={darkMode} />
            <Skills darkMode={darkMode} />
            <Projects darkMode={darkMode} />
            <Contact darkMode={darkMode} />
            <Footer darkMode={darkMode} />
        </div>
    )
}
export default App