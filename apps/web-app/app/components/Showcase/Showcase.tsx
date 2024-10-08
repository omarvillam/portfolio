import React from 'react'
import Card from "../Card/Card";
import {showcases} from "./showcases";

function Showcase() {
  return (
    <section
      className={"p-2"}>
      <div className="columns-2 sm:columns-3 md:columns-3 gap-x-2 space-y-2">
        {showcases.map((showcase, i) => (
          <Card key={i} {...showcase} />
        ))}
      </div>
    </section>
  )
}

export default Showcase
