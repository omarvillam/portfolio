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
    position: 'Founding Engineer',
    duration: '2023 — Present',
    link: 'https://vecindary.com',
  },
  {
    icon: '/icons/sync.jpeg',
    company: 'Synctree',
    position: 'Full Stack Developer',
    duration: '2021 — 2023',
    link: 'https://synctree.com',
  },
  {
    icon: '/icons/iw.jpeg',
    company: 'Ignition Wolf',
    position: 'Full Stack Developer',
    duration: '2019 — 2021',
    link: 'https://ignitionwolf.com/',
  },
  {
    icon: '/icons/freelance.jpg',
    company: 'Freelancer',
    position: 'Frontend Developer',
    duration: '2018 — 2019',
    link: '#',
  }
]

export { experience }