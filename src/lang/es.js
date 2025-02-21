export default {
  navbar: {
    aboutMe: "Sobre mí",
    blog: "Blog",
    projects: "Proyectos",
    contact: "Contacto",
  },
  footer: {
    intro: "Hola, soy",
    name: "Jhoan",
    stack: "Un desarrollador Backend - Videojuegos",
    thanks: "¡Gracias por visitar mi portafolio!",
    work: "Trabajo",
    home: "Inicio",
  },
  home: {
    title: "¡Hola, soy Jhoan!",
    stackBack: "Desarrollador Backend",
    stackGame: "Desarrollador de Videojuegos",
    descriptionBack:
      "Desarrollo aplicaciones web escalables con Laravel, Spring Boot y .NET, enfocandome en las mejores prácticas y arquitectura limpia. Apasionado por aprender nuevas tecnologías y resolver desafíos técnicos.",
    descriptionGame:
      "Desarrollo videojuegos con Unity, enfocandome en la jugabilidad y la experiencia del usuario.",
  },
  aboutMe: {
    title: "Sobre mí",
    description: [
      "Soy un desarrollador full-stack con especialización en backend y un creciente interés en el desarrollo de videojuegos. Me apasiona crear soluciones eficientes y bien estructuradas, combinando mi formación universitaria con aprendizaje autodidacta y proyectos personales.",
      "Mi enfoque principal está en el desarrollo y optimización de API Rest con frameworks como Laravel y Spring, además de ampliar mis conocimientos en .NET y fortalecer mi dominio de C#, PHP y Java.",
      "Recientemente, he comenzado a explorar el desarrollo de videojuegos con Unity, aplicando mis habilidades en lógica y estructuración de código para crear experiencias interactivas. Más allá de la tecnología, valoro el trabajo en equipo, la organización y la mejora continua.",
    ],
    email: "Correo",
    resume: "Currículum",
    phone: "Teléfono",
    experience: "Experiencia",
    stack: "Tecnologías",
    languages: "Lenguajes",
    frameworks: "Frameworks & Herramientas",
    extras: "Extras/Intereses",
  },
  experience: [
    {
      date: "Nov 2024 - Dic 2024",
      company: "Autónomo",
      position: "Desarrollador Full-Stack",
      resume: {
        text: [
          `Diseñé y desarrollé un catálogo web informativo para MrDogKat, una empresa especializada en snacks naturales para mascotas.`,
          `El proyecto se centró en crear una plataforma moderna y atractiva utilizando React y Tailwind CSS. Implementé un sistema de filtrado intuitivo que permite a los usuarios explorar productos por categorías, junto con una sección informativa sobre la empresa. Se puso especial énfasis en crear una interfaz limpia y responsiva que refleja la calidad de los productos naturales de la marca.`,
          `La implementación incluyó:`,
        ],
        list: [
          `Componentes React reutilizables para la visualización de productos.`,
          `Sistema de filtrado dinámico usando estados de React.`,
          `Diseño responsive y moderno utilizando Tailwind CSS.`,
          `Sección "Sobre Nosotros" con información corporativa.`,
        ],
      },
    },
  ],
  projects: {
    title: "Proyectos",
    project: [
      {
        projectImage: "/projectScreen/VirtualMarket.png",
        projectTitle: "Virtual Market Backend",
        projectTechnologies: ["PHP", "Laravel", "Insomnia", "PostgreSQL"],
        projectDescription:
          "API Rest para prueba técnica, con endpoints para la gestión de tiendas, productos, clientes y pedidos.",
        projectLink: "",
        projectRepository: "https://github.com/JDiazc0/virtual-market-backend",
      },
    ],
  },
};
