import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  html,
  css,
  reactjs,
  ubuntu,
  tailwind,
  mysql,
  linux,
  git,
  samaritans,
  oist,
  nextinnovation,
  cognizant,
  internshala,
  linkedin,
  hackerrank,
  karate,
  portfolio,
  pglife,
  sortingvisualiser,
  aws,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Qualifications",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Extracurricular",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: fullstack,
  },
];

const education = [
  {
    title: "Bachelors in Information Technology",
    company_name: "Oriental Institute Of Science And Technology, Bhopal",
    icon: oist,
    iconBg: "#fff",
    date: "2019-2023",
    points: [
      "Courses undertaken: Data Strucutures and Algorithms, Operating Systems, Database Management Systems, Distributed Computing, Object Oriented Programming, Computer Architecture, Computer Network, Compiler Design, Computer Graphics & Multimedia, Soft Computing, Cloud Computing, Information Security, Blockchain Technology, Analysis and Design of Algorithm, Artificial Intelligence, Software Engineering, Machine Learning, Data Science, Internet of Things.",
      "CGPA: 8.88/10",
    ],
  },
  {
    title: "Higher Secondary",
    company_name: "Samaritan Senior Secondary School-CBSE",
    icon: samaritans,
    iconBg: "#fff",
    date: "2018-2019",
    points: [
      "Courses undertaken: Physics, Chemistry and Mathematics.",
      "Percentage: 61.2%",
      ,
    ],
  },
  {
    title: "Senior Secondary",
    company_name: "Samaritan Senior Secondary School-CBSE",
    icon: samaritans,
    iconBg: "#fff",
    date: "2016-2017",
    points: [
      "Courses undertaken: Science, Social Studies, Languages and Mathematics.",
      "CGPA: 10/10",
    ],
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Ubuntu",
    icon: ubuntu,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Next Innovation Technology",
    icon: nextinnovation,
    iconBg: "#fff",
    date: "22 Jun 2023 - 29 Aug 2023",
    points: [
      "Developed a web application using HTML, CSS, Javascript, PHP and Bootstrap for the client.",
      "Designed user-friendly UI/UX with responsive designs to make it easy for users to navigate through the website. ",
      "Designed various different websites with responsive designs and dynamic content. ",
    ],
  },
  {
    title: "Programmer Analyst Trainee",
    company_name: "Cognizant",
    icon: cognizant,
    iconBg: "#fff",
    date: "Upcoming",
    points: ["Offer in hand"],
  },
  {
    title: "Campus Ambassador Intern: WFH",
    company_name: "Internshala",
    icon: internshala,
    iconBg: "#4885ed",
    date: "Apr 2021 - Jun 2021",
    points: [
      "Raised awareness about Internshala across the entire campus.",
      "Encouraged students to explore Internshala training programs and internships.",
      "Motivated students to enhance their skills by utilizing the opportunities provided by Internshala.",
      "I stood 279 out of 21,963 students selected from different colleges across India",
    ],
  },
];

const extracurricular = [
  {
    title: "1.5K+ Connections on LinkedIn",
    type: "Achievements",
    icon: linkedin,
    iconBg: "#0077B5",
    date: "April 2023",
    points: ["Credential ID: mohitsinghrajput"],
    credential: "https://www.linkedin.com/in/mohitsinghrajput/",
  },
  {
    title: "Java (Basic), CSS, SQL (Basic)-HackerRank",
    type: "Certification",
    icon: hackerrank,
    iconBg: "#000",
    date: "2022-2023",
    points: [
      "Credential ID: aac000e38dc9",
      "Credential ID: a274bb1292eb",
      "Credential ID: b024370fa737",
    ],
    credential: "https://www.hackerrank.com/certificates/aac000e38dc9",
  },
  {
    title: "Web Development-Internshala",
    type: "Certification",
    icon: internshala,
    iconBg: "#4885ed",
    date: "Sept 2021",
    points: ["Credential ID: 281DB109-2DA8-A160-DCBC-C6C0F552B57C"],
    credential:
      "https://trainings.internshala.com/verify-certificate/?certificate_number=281DB109-2DA8-A160-DCBC-C6C0F552B57C",
  },
  {
    title: "Combat Sport-Karate",
    type: "Extracurricular(Hobby)/Combat Sport",
    icon: karate,
    iconBg: "#d9dddc",
    date: "2006-2020",
    points: [
      "State level Gold medalist in Kumite.",
      "Renshi Cup National Championship Bronze medalist in Kumite.",
    ],
  },
];

const projects = [
  {
    name: "3D Portfolio",
    description:
      "Web Portfolio in React JS which uses 3D graphics and animations to bring the content into life. The website is divided into several main sections, including an about, Education, project, connect and contact section. Each section is designed to showcase 3D's unique style and creativity, with an emphasis on interactivity and user engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/mohitrajput2002/my-portfolio",
    live_project_link: "https://mohit-singh-rajput.vercel.app/",
  },
  {
    name: "PG Life",
    description:
      "The PG-Life Web Application is a platform designed to facilitate the management and search for Paying Guest (PG) accommodations. It allows users to explore available PG options, view details, and connect with potential landlords or tenants.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: pglife,
    source_code_link: "https://github.com/mohitrajput2002/PG_Life",
    live_project_link: "https://github.com/mohitrajput2002/PG_Life",
  },
  {
    name: "Sorting Visualizer",
    description:
      "The Sorting Visualizer is a web application that provides a visual representation of various sorting algorithms. It allows users to observe and understand how different sorting algorithms work by animating the sorting process.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: sortingvisualiser,
    source_code_link:
      "https://github.com/mohitrajput2002/sorting-visualizer-project.github.io.git",
    live_project_link: "https://sorting-visuallizer.netlify.app/",
  },
];

export {
  services,
  technologies,
  experiences,
  extracurricular,
  projects,
  education,
};
