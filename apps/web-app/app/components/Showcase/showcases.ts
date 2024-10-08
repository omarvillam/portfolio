interface ShowcaseInterface {
  title: string;
  source: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color: 'black' | 'white';
  // buttonHref: string;
  // buttonText: string;
  // buttonIcon: any;
}

const showcases: ShowcaseInterface[] = [
    {
    title: "Google Maps",
    source: "/showcase/map.mp4",
    position: "bottom-left",
      color: 'black',
  },
  {
    title: "Live Editor",
    source: "/showcase/poster.mp4",
    position: "bottom-right",
    color: 'black',
  },
  {
    title: "Paywall",
    source: "/showcase/paywall.mp4",
    position: "bottom-left",
    color: 'black',
  },
  {
    title: "Live feedback",
    source: "/showcase/automatron.png",
    position: "bottom-left",
    color: 'black',
  },
  {
    title: "Retirement plan",
    source: "/showcase/lykas.png",
    position: "bottom-left",
    color: 'black',
  }
]

export {showcases};
export type { ShowcaseInterface };
