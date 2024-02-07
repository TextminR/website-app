export const team = [
  { 
    name: 'Andreas Sünder', role: 'Project Lead & AI Expert',
    email: 'asuender@student.tgm.ac.at',
    image: { src: '~/assets/images/team/asuender.png', alt: 'Andreas Sünder' },
  },
  { 
    name: 'Samira Ghaffari', role: 'Reseacher',
    email: 'sghaffari@student.tgm.ac.at',
    image: { src: '~/assets/images/team/sghaffari.png', alt: 'Samira Ghaffari' },
  },
  {
    name: 'Daniel Lengsteiner', role: 'Data Scientist',
    email: 'dlengsteiner@student.tgm.ac.at',
    image: { src: '~/assets/images/team/dlengsteiner.png', alt: 'Daniel Lengsteiner' },
  },
  { 
    name: 'Nicolas Pfeiler', role: 'Frontend Developer',
    email: 'npfeiler@student.tgm.ac.at',
    image: { src: '~/assets/images/team/npfeiler.png', alt: 'Nicolas Pfeiler' },
  },
];

export const features = [
  {
    title: 'Explore Trends',
    description: 'Gain insights into how the occurrence of topics changes over different time periods and explore trends in your data.',
    icon: 'flat-color-icons:bullish',
  },
  {
    title: 'Real time analysis',
    description: 'Analyze large volumes of text data within seconds and access the visualized results without delay.',
    icon: 'flat-color-icons:clock',
  },
  {
    title: 'Use in education',
    description: 'With our user-friendly interface, you can easily use our tool in education and apply it for real-world data.',
    icon: 'flat-color-icons:graduation-cap',
  },
];

export const milestones = [
  {
    title: 'Exploration',
    description: "We will dive into the topic of text analysis and explore the various methods to achieve it.",
    deadline: new Date('2023-10-31'),
    active: true,
    icon: 'tabler:search',
  },
  {
    title: 'Trained machine learning models',
    description: "By this stage, trained at least one machine learning model to be used for topic extraction.",
    deadline: new Date('2023-11-30'),
    active: true,
    icon: 'tabler:robot',
  },
  {
    title: 'Deployed user interface & visualizations',
    description: "We deploy a minimal user interface as a web app to visualize the results of the topic extraction.",
    deadline: new Date('2024-01-10'),
    active: true,
    icon: 'tabler:app-window',
  },
  {
    title: "Researched legal situation",
    description: "We researched the legal situation regarding the use of the tool and the output it produces.",
    deadline: new Date('2024-01-15'),
    active: true,
    icon: 'tabler:gavel',
  },
  {
    title: "Integrated topic labelling",
    description: "We integrate a production-ready language model to label the extracted topics.",
    deadline: new Date('2024-03-01'),
    active: false,
    delayed: true,
    icon: 'tabler:tags',
  },
  {
    title: "Finished project",
    description: "We finish our project and present it to the public.",
    deadline: new Date('2024-04-02'),
    active: false,
    icon: 'tabler:pennant',
  },
];