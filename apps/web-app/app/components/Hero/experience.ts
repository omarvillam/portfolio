import {trans} from "../../lib/lang";

interface ExperienceInterface {
  icon: string;
  company: string;
  position: string;
  duration: string;
  link: string;
}

const experience: ExperienceInterface[] = [
  {
    icon: '/icons/vec.jpeg',
    company: 'Vecindary',
    position: 'founder',
    duration: `2023 — ${trans("experience.present")}`,
    link: 'https://vecindary.com',
  },
  {
    icon: '/icons/sync.jpeg',
    company: 'Synctree',
    position: 'full',
    duration: '2021 — 2023',
    link: 'https://synctree.com',
  },
  {
    icon: '/icons/iw.jpeg',
    company: 'Ignition Wolf',
    position: 'full',
    duration: '2019 — 2021',
    link: 'https://ignitionwolf.com/',
  },
  {
    icon: '/icons/freelance.jpg',
    company: 'Freelancer',
    position: 'front',
    duration: '2018 — 2019',
    link: '#',
  }
]

export { experience }