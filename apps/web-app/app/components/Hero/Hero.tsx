import React from 'react'
import {experience} from "./experience";
import {currentLanguage, trans} from '../../lib/lang'

function Hero() {
  return (
    <section className={"flex justify-between items-start px-10 md:px-20 lg:pt-16 pt-10 bg-primary flex-wrap sm:px-0 gap-y-10"} id={"home"}>
      <div className={"flex justify-center flex-col lg:basis-1/2 basis-full"}>
        <h1 className={"sm:text-5xl text-3xl font-bold mt-0 lg:whitespace-nowrap"}>{trans("hero.title")}</h1>
        <p className={"mt-6 text-quartery leading-7"}>
          {trans("hero.bio.part1")}
          <br/><br/>
          {trans("hero.bio.part2")}
          <br/><br/>
          {trans("hero.bio.part3")}
        </p>
      </div>
      <div className={"flex justify-center flex-col w-full lg:w-[40%]"}>
        <div className={"border border-secondary rounded-lg p-6"}>
          <div className={"flex gap-2 justify-start items-center"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" className="size-6 text-tertiary">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"/>
            </svg>
            <h3 className={"text-white"}>Experience</h3>
          </div>
          <div className={"mt-6"}>
            {experience.map((exp, i) => (
              <div className="flex justify-start gap-4 mt-5 relative" key={i}>
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <a href={exp.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={exp.icon}
                      alt={exp.company}
                      className="w-6 h-6 rounded-full relative z-20 transition-transform duration-300 ease-in-out transform hover:scale-125 hover:cursor-pointer"
                    />
                  </a>
                  {/* Border circle ::before */}
                  <span
                    className="absolute inset-0 flex items-center justify-center before:content-[''] before:absolute before:w-9 before:h-9 before:border before:border before:rounded-full before:z-10"></span>
                  {/* Border tertiary ::after */}
                  <span
                    className="absolute inset-0 flex items-center justify-center after:content-[''] after:absolute after:w-10 after:h-10 after:border after:border-tertiary after:rounded-full after:z-0"></span>

                  {/* Timeline line */}
                  {i !== experience.length - 1 && (
                    <span className="absolute top-10 left-1/2 w-px bg-tertiary h-full"></span>
                  )}
                </div>

                <div className={"flex justify-center flex-col w-full"}>
                  <h3 className={"text-white"}>{exp.company}</h3>
                  <div className={"flex justify-between items-center gap-2"}>
                    <h4 className={"text-tertiary text-sm"}>{trans("experience." + exp.position)}</h4>
                    <h5 className={"text-tertiary text-sm whitespace-nowrap"}>{exp.duration}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={"flex justify-between w-full flex-row gap-4 mt-4"}>
          <a
            className="text-sm rounded-lg w-full text-center bg-secondary px-3 py-2 text-quartery font-bold hover:bg-quartery hover:text-primary transition-colors duration-200"
            href={`${currentLanguage === 'en' ? 'https://drive.google.com/file/d/1dTVj_lawXT7OH5BfQe9B5wkfP9RXHl2G/view?usp=drive_link' : 'https://drive.google.com/file/d/1qGSn7EkIXO2XFVWobItgrIzT93QrgAeQ/view?usp=drive_link'}`}
            target="_blank"
          >
            {trans("hero.resume")}
          </a>
          <a
            className="text-sm rounded-lg w-full text-center bg-secondary px-3 py-2 text-quartery font-bold hover:bg-quartery hover:text-primary transition-colors duration-200"
            href="mailto:omarvillaleads@gmail.com"
          >
            {trans("hero.contact")}
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero