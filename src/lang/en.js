export default {
  navbar: {
    aboutMe: "About Me",
    blog: "Blog",
    projects: "Projects",
    contact: "Contact",
  },
  footer: {
    intro: "Hi, I'm",
    name: "Jhoan",
    stack: "A backend - Game Developer",
    thanks: "Thanks for visiting my portfolio!",
    work: "Work",
    home: "Home",
  },
  home: {
    title: "Hi, I'm Jhoan!",
    stackBack: "Backend Developer",
    stackGame: "Game Developer",
    descriptionBack:
      "I develop scalable web applications with Laravel, Spring Boot and .NET, focusing on best practices and clean architecture. Passionate about learning new technologies and solving technical challenges.",
    descriptionGame:
      "I develop video games with Unity, focusing on gameplay and user experience.",
  },
  aboutMe: {
    title: "About Me",
    description: [
      `Systems engineer with backend experience, exploring video game development in Unity.`,
      `As a backend developer, I have worked with Laravel and Spring, with knowledge in .NET, applying best practices to build scalable solutions. Currently, I am expanding my focus to video game development with Unity, integrating my experience in programming logic and software architecture to create interactive experiences.`,
      `I am passionate about designing efficient systems and solving complex problems. Now, I apply that knowledge in the game dev world, exploring mechanics, optimization and structures to build games with impact.`,
      `I'm always open to new opportunities and collaborations in technology and video games. If you want to connect, let's talk!`,
    ],
    email: "Email",
    resume: "Resume",
    phone: "Phone",
    experience: "Experience",
    stack: "Tech Stack",
    languages: "Languages",
    frameworks: "Frameworks & Tools",
    extras: "Extras/Interests",
  },
  experience: [
    {
      date: "Nov 2024 - Dec 2024",
      company: "Freelance",
      position: "Full-Stack Developer",
      resume: {
        text: [
          `I designed and developed an informative web catalog for MrDogKat, a company specialized in natural snacks for pets.`,
          `The project focused on creating a modern and attractive platform using React and Tailwind CSS. I implemented an intuitive filtering system that allows users to explore products by categories, along with an informative section about the company. Special emphasis was placed on creating a clean and responsive interface that reflects the quality of the brand's natural products.`,
          `The implementation included:`,
        ],
        list: [
          `Reusable React components for product visualization.`,
          `Dynamic filtering system using React states.`,
          `Responsive and modern design using Tailwind CSS.`,
          `“About Us” section with corporate information.`,
        ],
      },
    },
  ],
  projects: {
    title: "Projects",
    project: [
      {
        projectImage: "/projectScreen/Doppel.png",
        projectTitle: "Doppel",
        projectTechnologies: ["Unity", "C#"],
        projectDescription:
          "Videogame developed in 2D platform unity with mechanics of using alter ego abilities.",
        projectLink: "https://cerodev.itch.io/doppel",
        projectRepository: "https://github.com/JDiazc0/doppel",
      },
      {
        projectImage: "/projectScreen/VirtualMarket.png",
        projectTitle: "Virtual Market Backend",
        projectTechnologies: ["PHP", "Laravel", "Insomnia", "PostgreSQL"],
        projectDescription:
          "RESTful API for a technical test, with endpoints for manage products, clients, stores and orders.",
        projectLink: "",
        projectRepository: "https://github.com/JDiazc0/virtual-market-backend",
      },
    ],
  },
  contact: {
    title: "Contact",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
  },
};
