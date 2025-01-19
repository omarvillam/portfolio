import React from 'react'
import { ShowcaseInterface } from "../Showcase/showcases";
import { trans } from "../../lib/lang";

function Card({ title, position, color, source, label, href, component }: ShowcaseInterface) {
  return (
    <article className="bg-primary rounded-lg w-full border border-secondary p-2">
      <div className="relative rounded-lg w-full h-full shadow-sm overflow-hidden">
        {source.includes(".mp4") ? (
          <video
            title={title}
            src={source}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={source}
            alt={trans(title)}
            className="w-full h-full object-cover"
          />
        )}

        <div
          className={`
            absolute px-2 text-sm
            ${
            color === 'black'
              ? 'text-black bg-white/50 backdrop-blur-sm'
              : color === 'white'
                ? 'text-white bg-black/50 backdrop-blur-sm'
                : 'text-[rgba(0, 0, 0, 0.565)] bg-white/50 backdrop-blur-sm font-normal'
          }
            ${
            position === 'top-left' && 'top-0 left-3'
          }
            ${
            position === 'top-right' && 'top-0 right-3'
          }
            ${
            position === 'bottom-left' && 'bottom-0 left-3'
          }
            ${
            position === 'bottom-right' && 'bottom-0 right-3'
          }
          `}
        >
          <h3>{trans(title)}</h3>
        </div>
      </div>

      {(component || href) && (
        <a
          className="mt-2 block text-sm rounded-lg w-full text-center bg-secondary px-3 py-2 text-quartery font-bold hover:bg-quartery hover:text-primary transition-colors duration-200"
          href={href ? href : `/c/${component}`}
          target="_blank"
        >
          {trans(`showcase.${label}`)}
        </a>
      )}
    </article>
  );
}

export default Card;
