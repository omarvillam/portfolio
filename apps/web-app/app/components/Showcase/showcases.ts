interface ShowcaseInterface {
  title: string;
  source: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color: 'black' | 'white';
}

const showcases: ShowcaseInterface[] = [
    {
    title: "address",
    source: "/showcase/map.mp4",
    position: "bottom-left",
      color: 'white',
  },
  {
    title: "editor",
    source: "/showcase/poster.mp4",
    position: "bottom-right",
    color: 'white',
  },
  {
    title: "stripe",
    source: "/showcase/paywall.mp4",
    position: "bottom-left",
    color: 'white',
  },
  {
    title: "fridges",
    source: "/showcase/automatron.png",
    position: "bottom-left",
    color: 'white',
  },
  {
    title: "landing",
    source: "/showcase/landing.mp4",
    position: "bottom-left",
    color: 'white',
  },
  {
    title: "retirement",
    source: "/showcase/lykas.png",
    position: "bottom-left",
    color: 'white',
  }
]

export {showcases};
export type { ShowcaseInterface };
