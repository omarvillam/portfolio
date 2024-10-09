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
    title: "Interactive Address Lookups",
    source: "/showcase/map.mp4",
    position: "bottom-left",
      color: 'white',
  },
  {
    title: "Printable Product Editor",
    source: "/showcase/poster.mp4",
    position: "bottom-right",
    color: 'white',
  },
  {
    title: "Stripe Payment Gateway",
    source: "/showcase/paywall.mp4",
    position: "bottom-left",
    color: 'white',
  },
  {
    title: "Smart Fridges IoT",
    source: "/showcase/automatron.png",
    position: "bottom-left",
    color: 'white',
  },
  {
    title: "Management of Retirement Plan",
    source: "/showcase/lykas.png",
    position: "bottom-left",
    color: 'white',
  }
]

export {showcases};
export type { ShowcaseInterface };
