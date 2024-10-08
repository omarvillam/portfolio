import React, {useEffect, useState} from 'react'

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollTop = 0;

  const handleScroll = () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
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
    <nav
      className={`flex items-center justify-center py-2 mt-5 px-5 bg-secondary rounded-full w-fit mx-auto border-1 border-tertiary fixed left-1/2 transform -translate-x-1/2 transition-transform duration-300 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 ${isVisible ? 'translate-y-0' : '-translate-y-16'}`}>
      <ul className="flex items-center gap-8 sm:gap-4 justify-center">
        <li>
          <a className="text-sm hover:text-quartery hidden sm:block" href="/">Omar</a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
               className={"size-6 sm:hidden block"}
               stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin={"round"}
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"/>
          </svg>
        </li>
        <li>
          <a className="text-sm hover:text-quartery hidden sm:block" href="/">Showcase</a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" className="size-6 sm:hidden block">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"/>
          </svg>

        </li>
        <li>
          <a
            className="text-sm rounded-full bg-primary px-3 py-2 text-quartery font-bold hover:bg-quartery hover:text-primary transition-colors duration-200"
            href="https://drive.google.com/file/d/17U5yBqiXGXyfLjQlFvAsPPWAl-idadvo/view"
            target="_blank"
          >
            Resume
          </a>
        </li>
        <li>
          <a
            className="text-sm rounded-full bg-primary px-3 py-2 text-quartery font-bold hover:bg-quartery hover:text-primary transition-colors duration-200"
            href="mailto:omarvillaleads@gmail.com"
          >
            Contact
          </a>
        </li>
      </ul>
      <span
        className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-quarterly/0 via-quarterly/40 to-quarterly/0 dark:from-quarterly/0 dark:via-quarterly/40 dark:to-quarterly/0">
</span>

    </nav>
  )
}

export default Navbar