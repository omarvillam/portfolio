import React, {useEffect, useState} from 'react'

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollTop = 0;

  const handleScroll = () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(lastScrollTop > currentScroll || currentScroll <= 0);
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`flex items-center justify-center py-2 mt-5 px-5 bg-secondary rounded-full w-fit mx-auto border-1 border-tertiary fixed left-1/2 transform -translate-x-1/2 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-16'}`}>
    <ul className="flex items-center gap-2 justify-center gap-4">
        <li>
          <a className="text-sm hover:text-quartery" href="/">Omar</a>
        </li>
        <li>
          <a className="text-sm" href="#showcase">Showcase</a>
        </li>
        <li>
          <a className="text-sm rounded-full bg-primary px-4 py-2 text-quartery font-bold hover:bg-quartery hover:text-primary transition-colors duration-200"
             href="https://drive.google.com/file/d/17U5yBqiXGXyfLjQlFvAsPPWAl-idadvo/view"
             target="_blank"
          >
            Resume
          </a>
        </li>
        <li>
            <a className="text-sm rounded-full bg-primary px-4 py-2 text-quartery font-bold hover:bg-quartery hover:text-primary transition-colors duration-200"
            href="mailto:omarvillaleads@gmail.com"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar