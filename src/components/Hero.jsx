import { Download, Mail } from "lucide-react";
import instagram from '../assets/instagram.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import Xtwiter from '../assets/twitter.png';
import CV from '../assets/CV.pdf';
import hero from '../assets/hero.png';
import hi from '../assets/hi.png';

const Hero = ({ darkMode }) => {
    const socialIcons = [
        { icon: instagram, alt: 'instagram' },
        { icon: github, alt: 'github' },
        { icon: linkedin, alt: 'linkedin' },
        { icon: Xtwiter, alt: 'X-twitter' },
    ];

    const darkTheme = {
        textPrimary: 'text-white',
        textSecoundary: 'text-gray-300',
        buttonSecoundary: 'text-white border-2 border-orange-500 hover:bg-orange-600',
        decorativeCircle: 'bg-orange-500 opacity-10',
    };

    const lightTheme = {
        textPrimary: 'text-gray-900',
        textSecoundary: 'text-gray-700',
        buttonSecoundary: 'text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white',
        decorativeCircle: 'bg-orange-400 opacity-30',
    };

    const theme = darkMode ? darkTheme : lightTheme;
    return (
        <div className='relative overflow-hidden min-h-screen flex flex-col'>
            <section
                id='home'
                data-aos='fade-up'
                data-aos-delay='250'
                className='body-font z-10'
            >
                <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-32 flex-col lg:flex-row items-center justify-between lg:mt-0 mt-14'>
                    <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0'>
                        <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'>
                            {socialIcons.map((social, index) => (
                                <a
                                    key={index}
                                    href='#'
                                    target='_blank'
                                    rel='noreferrer'
                                    data-aos-delay={`${400 + index * 100}`}
                                    className='transform hover:scale-110 transition-transform duration-300'
                                >
                                    <img src={social.icon} alt={social.alt} className={`w-8 h-8 sm:h-10 object-contain ${darkMode ? '' : 'filter brightness-75'}`} />
                                </a>
                            ))}
                        </div>
                        <h1 className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
                            data-aos='fade-up'
                            data-aos-delay='500'
                        >
                            Hi, I'm Oussana
                        </h1>
                        <p
                            className={`mb-6 sm:mb-8 leading-relaxed max-w-lg ${theme.textSecoundary}`}
                            data-aos='fade-up'
                            data-aos-delay='600'
                        >
                            Web development student at YouCode, driven to build modern, fast web apps. Strong on the
                            frontend—HTML5, CSS3, JavaScript (ES6+), TypeScript, and Tailwind—and growing my backend
                            skills with PHP. Comfortable with MySQL and PostgreSQL, plus everyday tools like Git,
                            Docker, and Linux.
                        </p>
                        {/* buttons */}
                        <div className='w-full pt-4 sm:pt-6 '>
                            <div className='flex flex-col sm-flex-row justify-center lg:justify-start gap-3 sm:gap-4'
                                data-aos='fade-up'
                                data-aos-delay='700'>
                                <a href={CV} download className='w-full sm:w-auto'>
                                    <button className='w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 hover:shadaw[0_0_400px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform'>
                                        <Download /> Download CV
                                    </button>
                                </a>
                                <a href="#contact" className="w-full sm:w-auto">
                                    <button className={`w-full sm:w-auto inline-flex items-center ${theme.buttonSecoundary} justify-center border-0 py-3 px-6 sm:px-8 hover:shadaw[0_0_400px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform`}>
                                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                        Contact Me
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* hero image - right column */}
                    <div
                        className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center'
                        data-aos='fade-left'
                        data-aos-delay='400'
                    >
                        <div className='relative w-4/5 sm:w-3/4 lg:w-full'>
                            <div className='overflow-hidden'>
                                <img src={hero} alt="hero image" className='w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500' />
                            </div>
                            <img
                                src={hi}
                                alt="Hi icon"
                                className="absolute -top-3 sm:top-4 left-40 sm:left-40 w-30 h-30 sm:w-20 sm:h-16 md:w-20 md:h-20 object-contain animate-bounce opacity-90 z-10"
                            />
                        </div>
                    </div>
                </div>
                <div className={`absolute -top-20 -left-20 w-40 h-40 sm:w64 sm:h-64 ${theme.decorativeCircle} rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000 hidden sm:block `}>

                </div>
            </section>
        </div>
    );
};

export default Hero;