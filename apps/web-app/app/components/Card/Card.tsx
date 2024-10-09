import React from 'react'
import {ShowcaseInterface} from "../Showcase/showcases";

function Card({title, position, color, source}: ShowcaseInterface) {
  return (
    <article className="relative bg-primary rounded-lg w-full border border-secondary p-2">
      {source.includes(".mp4") ? (
        <video
          title={title}
          src={source}
          className="rounded-lg w-full h-full object-cover shadow-sm"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <img
          src={source}
          alt={title}
          className="rounded-lg w-full h-full object-cover shadow-sm"
        />
      )}

      <div
        className={`absolute px-2 text-sm
    ${color === 'black' ? 'text-black bg-white/50 backdrop-blur-sm' :
          color === 'white' ? 'text-white bg-black/50 backdrop-blur-sm' :
            'text-[rgba(0, 0, 0, 0.565)] bg-white/50 backdrop-blur-sm font-normal'}
    ${position === 'top-left' && 'top-2 left-3'}
    ${position === 'top-right' && 'top-2 right-3'}
    ${position === 'bottom-left' && 'bottom-2 left-3'}
    ${position === 'bottom-right' && 'bottom-2 right-3'}`}
      >
        <h3>{title}</h3>
      </div>


    </article>
  )
}

export default Card