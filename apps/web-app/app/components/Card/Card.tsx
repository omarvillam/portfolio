import React from 'react'
import {ShowcaseInterface} from "../Showcase/showcases";

function Card({title, position, color, source}: ShowcaseInterface) {
  return (
    <article className="relative bg-primary rounded-lg w-full border border-secondary p-2">
      {/* Video o Imagen con sombra */}
      {source.includes(".mp4") ? (
        <video
          title={title}
          src={source}
          className="rounded-lg w-full h-full object-cover shadow-sm" // Clase de sombra
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <img
          src={source}
          alt={title}
          className="rounded-lg w-full h-full object-cover shadow-sm" // Clase de sombra
        />
      )}

      {/* Título con color condicional */}
      <h3
        className={`absolute text-sm p-2
      ${color === 'black' ? 'text-black' : color === 'white' ? 'text-[rgba(255, 255, 255, 0.592)]' : 'text-[rgba(0, 0, 0, 0.565)] font-normal'}
      ${position === 'top-left' && 'top-2 left-3'}
      ${position === 'top-right' && 'top-2 right-3'}
      ${position === 'bottom-left' && 'bottom-2 left-3'}
      ${position === 'bottom-right' && 'bottom-2 right-3'}`}
      >
        {title}
      </h3>
    </article>
  )
}

export default Card