import React from 'react'
import Card from "../Card/Card";
import {showcases} from "./showcases";

function Showcase() {
  return (
    <section
      className={"p-2"} id={"showcase"}>
      <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 gap-x-2 space-y-2">
        {showcases.map((showcase, i) => (
          <Card key={i} {...showcase} title={"showcase." + showcase.title} />
        ))}
      </div>
    </section>
  )
}

export default Showcase
