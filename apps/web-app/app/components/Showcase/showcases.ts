interface ShowcaseInterface {
  title: string;
  source: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color: 'black' | 'white';
  href?: string;
  label?: 'component' | 'production'
  component?: string;
}

const showcases: ShowcaseInterface[] = [
  {
    title: "address",
    source: "/showcase/map.mp4",
    position: "bottom-left",
    color: 'white',
  },
  {
    title: 'spotify',
    label: 'component',
    source: '/showcase/spotify-bar.mp4',
    position: 'bottom-left',
    color: 'white',
    component: 'spotify'
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
  },
  {
    title: "ai-finder",
    label: "production",
    href: "https://influencer-finder-co8n5k56t-omar-villalobos-projects.vercel.app/",
    source: "/showcase/ai-finder.mp4",
    position: "bottom-left",
    color: 'white',
  },
]

export {showcases};
export type { ShowcaseInterface };
