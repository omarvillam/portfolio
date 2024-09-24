import React from 'react'
import {experience} from "./experience";

function Hero() {
  return (
    <section className={"flex justify-between items-start py-30 px-20"}>
      <div className={"flex justify-center flex-col basis-1/2"}>
        <h1 className={"text-5xl font-bold"}>Omar Villalobos</h1>
        <h2 className={"text-xl"}>Web Developer</h2>

        <p className={"mt-10"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={"flex justify-center flex-col"}>
        <div className={"border border-secondary rounded-lg p-6"}>
          Icon Work
          {experience.map((exp, i) => (
            <div className={"flex justify-start gap-4 mt-4 relative"} key={i}>
              <img src={exp.icon} alt={exp.company} className={"w-6 h-6 rounded-full before:content-[''] before:absolute before:top-0 before:left-0 before:w-[50px] before:h-[50px] before:bg-red-500 before:rounded-full"} />
              <div className={"flex justify-center flex-col"}>
                <h3 className={"text-white"}>{exp.company}</h3>
                <div className={"flex justify-between gap-2"}>
                  <h4 className={"text-tertiary text-[12px]"}>{exp.position}</h4>
                  <h5 className={"text-tertiary text-[12px] text-right"}>{exp.duration}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero