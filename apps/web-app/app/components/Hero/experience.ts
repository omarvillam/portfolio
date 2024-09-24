interface ExperienceInterface {
  icon: string;
  company: string;
  position: string;
  duration: string;
}

const experience: ExperienceInterface[] = [
  {
    icon: '/icons/vec.jpeg',
    company: 'Vecindary',
    position: 'Senior Frontend Developer',
    duration: '2022 — Present'
  },
  {
    icon: '/icons/sync.jpeg',
    company: 'Synctree',
    position: 'Senior Frontend Developer',
    duration: '2021 — 2023'
  },
  {
    icon: '/icons/iw.jpeg',
    company: 'Ignition Wolf',
    position: 'Junior Frontend Developer',
    duration: '2019 — 2021'
  },
  {
    icon: 'assets',
    company: 'Freelancing',
    position: 'Junior Frontend Developer',
    duration: '2018 — 2019'
  }

]

export { experience }