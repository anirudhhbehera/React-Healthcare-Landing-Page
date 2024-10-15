import React from 'react';
import { LuGithub, LuLink, LuInstagram, LuLinkedin } from 'react-icons/lu'; // Importing the required icons

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6">
            <div className="flex flex-col items-center">
                <div className="flex items-center space-x-2 hover:text-blue-400 transition duration-200">
                    <LuGithub className="text-3xl" />
                    <a 
                        href="https://github.com/anirudhhbehera" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg font-semibold"
                    >
                        anirudhhbehera
                    </a>
                </div>

                <div className="mt-4 flex space-x-6">
                    <a
                        href="https://yourportfolio.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-blue-400 transition duration-200"
                    >
                        <LuLink className="text-xl mr-1" />
                        Portfolio
                    </a>

                    <a
                        href="https://github.com/anirudhhbehera?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-blue-400 transition duration-200"
                    >
                        <LuLink className="text-xl mr-1" />
                        View Projects
                    </a>

                    <a
                        href="https://www.linkedin.com/in/anirudhhbehera/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-blue-400 transition duration-200"
                    >
                        <LuLinkedin className="text-xl mr-1" />
                        LinkedIn
                    </a>

                    <a
                        href="https://www.instagram.com/__.anniii.___/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-blue-400 transition duration-200"
                    >
                        <LuInstagram className="text-xl mr-1" />
                        Instagram
                    </a>
                </div>

                <p className="mt-4 text-sm text-gray-400">© {currentYear} Anirudhh Behera. All rights reserved.</p> {/* Dynamic year */}
            </div>
        </footer>
    );
};

export default Footer;
