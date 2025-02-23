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
      "Ingeniero de sistemas con experiencia en backend, explorando el desarrollo de videojuegos en Unity.",
      "Como desarrollador backend, he trabajado con Laravel y Spring, con conocimientos en .NET, aplicando buenas prácticas para construir soluciones escalables. Actualmente, amplío mi enfoque hacia el desarrollo de videojuegos con Unity, integrando mi experiencia en lógica de programación y arquitectura de software para crear experiencias interactivas.",
      "Me apasiona el diseño de sistemas eficientes y la resolución de problemas complejos. Ahora, aplico ese conocimiento en el mundo del game dev, explorando mecánicas, optimización y estructuras para construir juegos con impacto.",
      "Siempre estoy abierto a nuevas oportunidades y colaboraciones en tecnología y videojuegos. Si quieres conectar, ¡hablemos!",
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
        projectImage: "/projectScreen/Doppel.png",
        projectTitle: "Doppel",
        projectTechnologies: ["Unity", "C#"],
        projectDescription:
          "Videojuego desarrollado en unity de plataformas 2D con mecánicas de uso de habilidades de alter ego",
        projectLink: "https://cerodev.itch.io/doppel",
        projectRepository: "https://github.com/JDiazc0/doppel",
      },
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
  contact: {
    title: "Contacto",
    name: "Nombre",
    email: "Correo",
    message: "Mensaje",
    send: "Enviar",
  },
  cv: {
    file: "/cv_Jhoan_Diaz_es.pdf",
  },
};
