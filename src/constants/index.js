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
        "Competed at Swimming NCAA's for the university, obtained a school record and All American Honorable Mention for my performance."
      ],
    },
    {
      title: "Senior Year",
      company_name: "University of North Carolina",
      icon: unclogo,
      iconBg: "#383E56",
      date: "August 2024 - Present",
      points: [
        "Courses in Probability and Statistics, Mobile Web Development, Algorithms and Analysis",
        "Team Captain for the UNC Swim and Dive Men's team. Along with being enrolled in the Richard A Baddour Leadership Academy."

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
      name: "GoodFilms",
      description:"This website allows users to search, favorite and rate movies. It uses the omdb api along with node express and regular javascript to save images",
      tags: [
        {
          name: "JavaScript",
          color: "",
        },
        {
          name: "Node",
          color: "",
        },
        {
          name: "CSS",
          color: "",
        },
      ],
      image: movieWebsite,
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