import React from 'react'
import {experience} from "./experience";

function Hero() {
  return (
    <section className={"flex justify-between items-start px-10 lg:px-20 pt-28 bg-primary flex-wrap sm:px-0 gap-y-10"}>
      <div className={"flex justify-center flex-col sm:basis-1/2 basis-full"}>
        <h1 className={"sm:text-5xl text-3xl font-bold mt-0 whitespace-nowrap"}>Software engineer</h1>
        <p className={"mt-6 text-tertiary leading-7"}>
          Hi, I’m Omar, a Full-Stack Software Engineer with experience building scalable applications using React, Remix, TypesScript, Golang, NodeJS and modern web technologies. I’m passionate about bridging technical and business needs to create impactful solutions. Right now, I’m excited about new challenges. I thrive on solving complex problems and delivering value through innovative code.
        </p>
      </div>
      <div className={"flex justify-center flex-col w-full sm:w-[40%]"}>
        <div className={"border border-secondary rounded-lg p-6"}>
          <div className={"flex gap-2 justify-start items-center"}>
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
                  <span className="absolute inset-0 flex items-center justify-center before:content-[''] before:absolute before:w-9 before:h-9 before:border before:border before:rounded-full before:z-10"></span>
                  {/* Border tertiary ::after */}
                  <span className="absolute inset-0 flex items-center justify-center after:content-[''] after:absolute after:w-10 after:h-10 after:border after:border-tertiary after:rounded-full after:z-0"></span>

                  {/* Timeline line */}
                  {i !== experience.length - 1 && (
                    <span className="absolute top-10 left-1/2 w-px h-[calc(60%)] bg-tertiary"></span>
                  )}
                </div>

                <div className={"flex justify-center flex-col w-full"}>
                  <h3 className={"text-white"}>{exp.company}</h3>
                  <div className={"flex justify-between items-center gap-2"}>
                    <h4 className={"text-tertiary text-sm"}>{exp.position}</h4>
                    <h5 className={"text-tertiary text-sm"}>{exp.duration}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero