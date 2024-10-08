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
    position: 'Senior Full Stack',
    duration: '2022 — Present',
    link: 'https://www.vecindary.com',
  },
  {
    icon: '/icons/sync.jpeg',
    company: 'Synctree',
    position: 'Senior Full Stack',
    duration: '2021 — 2023',
    link: 'https://www.synctree.com',
  },
  {
    icon: '/icons/iw.jpeg',
    company: 'Ignition Wolf',
    position: 'Junior Frontend',
    duration: '2019 — 2021',
    link: 'https://ignitionwolf.com/',
  },
  {
    icon: '/icons/freelance.jpg',
    company: 'Freelancing',
    position: 'Junior Frontend',
    duration: '2018 — 2019',
    link: 'https://www.google.com',
  }
]

export { experience }