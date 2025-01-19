import React from 'react'
import {Track} from "../types";

function TrackInfo({artistName, name, artistLink, url, thumbnail}: Track) {
  return (
    <>
      <img src={thumbnail} className={"w-[56px] rounded"} alt={name}/>
      <div className={"flex-col hidden sm:flex"}>
        <h3 className="text-sm">{name}</h3>
        <a href={artistLink} target={"_blank"} rel={"noreferrer"} className={"hover:underline hover:decoration-[#B3B3B3]"}>
          <p className="text-xs text-[#B3B3B3]">{artistName}</p>
        </a>
      </div>
    </>
  )
}

export default TrackInfo