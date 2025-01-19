import {ComponentProps} from "react";

interface Track {
  url: string;
  thumbnail: string;
  name: string;
  artistName: string;
  artistLink: string;
}

type IconProps = ComponentProps<'svg'> & {};

export type { Track, IconProps }