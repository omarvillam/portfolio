import React from 'react'
import {stack} from "./stack";

function TechStack() {
  return (
    <section className={"flex justify-between sm:justify-start items-start mt-10 h-fit px-10 lg:px-20 gap-10 bg-primary flex-wrap"}>
      {stack.map((tech, i) => (
        <img src={tech.source} alt={tech.name} key={i} className={"w-12 h-12 object-contain"} />
      ))}
    </section>
  )
}

export default TechStack