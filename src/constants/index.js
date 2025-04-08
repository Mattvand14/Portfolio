import {
    colganShark,
    athlete,
    guitarlogo,
    leader,
    unclogo,
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
    starbucks,
    tesla,
    shopify,
    movieWebsite,
    jobit,
    tripguide,
    threejs,
    MIC
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
    {id: "music",
     title: "Music",
    }
  ];
  
  const services = [
    {
      title: "Student",
      icon: unclogo,
    },
    {
      title: "Athlete",
      icon: athlete,
    },
    {
      title: "Musician",
      icon: guitarlogo,
    },
    {
      title: "Leader",
      icon: leader,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },

    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "HighSchool",
      company_name: "Charles J Colgan HighSchool",
      icon: colganShark,
      iconBg: "#383E56",
      date: "September 2017 - May 2021",
      points: [

      ],
    },
    {
      title: "Freshman Year",
      company_name: "University of North Carolina",
      icon: unclogo,
      iconBg: "#383E56",
      date: "August 2021 - May 2022",
      points: [
        ""

      ],
    },
    {
      title: "Sophmore Year",
      company_name: "University of North Carolina",
      icon: unclogo,
      iconBg: "#383E56",
      date: "Ausgust 2022 - May 2023",
      points: [
        ""

      ],
    },
    {
      title: "Junior Year",
      company_name: "University of North Carolina",
      icon: unclogo,
      iconBg: "#383E56",
      date: "August 2023 - May 2024",
      points: [
        "Took courses in Modern Web Development, Computer Hardware Organization, Models of Language and Computation, and Code Organization",
        "Competed at the NCAA Division 1 Swimming Championships for the university, obtained a school record and All American Honorable Mention for my performance.",
        "Developed a website where users can search films through the omdb API to rate and rank movies"
      ],
    },
    {
      title: "Senior Year",
      company_name: "University of North Carolina",
      icon: unclogo,
      iconBg: "#383E56",
      date: "August 2024 - May 2025",
      points: [
        "Courses in Probability and Statistics, Mobile Web Development, Algorithms and Analysis, Robotics, Artificial Intelligence and AI In Business",
        "Team Captain for the UNC Swim and Dive Men's team. Along with being enrolled in the Richard A Baddour Leadership Academy.",
        "Competed at the NCAA Division 1 Swimming Championships for the university, and held multiple school records",
        "Developed an Android App that takes pictures, analyzes pictures with Google's Vision API and connects to Gemini LLM to write and read the user a story about the picture",
        "Built an AI ChatBot, MIC, that focuses on the Business side of Music Industry",
        "Worked Collaboratively on a project to exam sentinment and emotion analysis within artifical intelligence and LLMs",
        "Worked Collaboratively on a project to analyze a large Zillow data set and provide a write up to a stakeholder in the real estate industry"
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "MIC",
      description:"Your Music Industry ChatBot, a custom AI Agent that can answer all your music industry needs. Has currated knowledge on topics such as copyright law, marketing, revenue diversification, and more. Helpful to artsits who are just starting out or experts looking to expand their audience.",
      tags: [
        {
          name: "JavaScript",
          color: "",
        },
        {
          name: "React",
          color: "",
        },
        {
          name: "TailWind",
          color: "",
        },
        {
          name:"",
          color:"",
        }
      ],
      image: MIC,
      source_code_link: "",
    },
    {
      name: "",
      description:
        "",
      tags: [
        {
          name: "",
          color: "",
        },
        {
          name: "",
          color: "",
        },
        {
          name: "",
          color: "",
        },
      ],
      image: "",
      source_code_link: "",
    },
    {
      name: "",
      description:
        "",
      tags: [
        {
          name: "",
          color: "",
        },
        {
          name: "",
          color: "",
        },
        {
          name: "",
          color: "",
        },
      ],
      image: "",
      source_code_link: "",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };