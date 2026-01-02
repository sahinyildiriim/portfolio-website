import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  loop,
  mbk,
  carrent,
  jobit,
  tripguide,
  threejs,
  dou,
  na,
  pms,
  loopmobile,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Chairman",
    company_name: "Muhendis Beyinler Club",
    icon: mbk,
    iconBg: "#383E56",
    date: "(February 2025 – Present",
    points: [
      " Served as the Chairman for the university's most active student community. Led and managed a 6-person executive team, establishing the club's annual strategic roadmap and event calendar.",
      "Successfully managed the planning, budgeting, and operational processes for 20-25 annual events, including technical seminars, workshops, and social activities.",
      " Strengthened communication between members and sub-committees, optimizing task allocation and performance tracking processes. Increased the number of active members through initiatives aimed at enhancing member engagement.",
      "Managed corporate communications with industry professionals and sponsor companies, securing both financial and in-kind resources for the club.",
    ],
  },

  {
    title: "Full stack Developer",
    company_name: "Loop “Yazılım ve Fikir Geliştirmeˮ Team",
    icon: loop,
    iconBg: "#E6DEDD",
    date: "Jan 2023 -February 2026 ",
    points: [
      "Actively contributed to the front-end development of web-based projects, participating in all stages of the SDLC (analysis, coding, and testing).eloping and maintaining web applications using React.js and other related technologies.",
      "Applied foundational knowledge of Python and Java to web projects, gaining hands-on experience with React. Focused on building modular architectures and ensuring code reusability.",
      " Led internal brainstorming sessions to drive idea generation. Delivered creative solutions to technical challenges, ensuring projects were completed within deadlines",
    ],
  },
];

const testimonials = [{}, {}, {}];

const projects = [
  {
    name: "PMS&VMS",
    description:
      " Contributed to the development of Visitor (VMS) and Property Management Systems (PMS) by building modular and scalable User Interfaces using React. Focused on code maintainability through reusable components and implemented seamless API integrations for complex data flows. Utilized Git for version control to ensure smooth collaboration in team workflows.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pms,
    source_code_link: "https://github.com/sahinyildiriim",
  },
  {
    name: "LOOP Mobile",
    description:
      " Developed a cross-platform mobile application using React Native and Expo. Engineered a robust Java backend implementing a layered services architecture to ensure code modularity and scalability. Integrated PostgreSQL for reliable data management and built a comprehensive Admin Panel for efficient system administration and content control.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: loopmobile,
    source_code_link: "https://github.com/sahinyildiriim",
  },
];
const educations = [
  {
    title: "Dogus University ",
    company_name: "B.Sc. in Computer Engineering",
    icon: dou,
    iconBg: "#E6DEDD",
    date: "(2022 – Present)",
    points: [
      "Scholarship: Awarded 100% Full Scholarship based on outstanding academic performance",
      "Relevant Coursework: Data Structures, Algorithms, Operating Systems, Database Management, Object Oriented Programming.",
    ],
  },
  {
    title: "Nesibe Aydın",
    company_name: "High School",
    icon: na,
    iconBg: "#E6DEDD",
    date: "(2017-2021)",
    points: ["I have completed my high school education."],
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  educations,
};
