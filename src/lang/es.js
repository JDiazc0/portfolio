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
          `Diseño responsive y moderno utilizando SASS.`,
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
  blog: {
    title: "Blog",
    read: "Leer más",
    notFound: "Página no encontrada",
    blogs: [
      {
        title: "Doppel: Mi primer juego en Unity",
        date: "24-02-2025",
        preview:
          "El 16 de enero inicié un nuevo reto en mi carrera: aprender Unity a través del bootcamp de Generation Colombia.",
        topics: ["Unity", "C#", "Game Development"],
        url: "doppel",
        content: [
          `El 16 de enero inicié un nuevo reto en mi carrera: aprender Unity a través del bootcamp de Generation Colombia. Durante semanas, fui explorando el motor, sus herramientas y las mejores prácticas de desarrollo de videojuegos. Como parte del proceso, desarrollé Doppel, un plataformas 2D que me permitió experimentar con programación, diseño visual y mecánicas de juego. Mi objetivo con este proyecto fue no solo aprender a usar Unity, sino también crear una experiencia jugable que reflejara mi crecimiento en esta etapa.`,
          `En el desarrollo de Doppel, me enfoqué en varios aspectos fundamentales. Implementé los controles del personaje, las físicas del juego y la lógica detrás de cada nivel, lo que me permitió comprender a fondo la programación en Unity. También me encargué del diseño visual, creando el stylesheet y definiendo la estética del juego. En cuanto al diseño de niveles, construí cada escenario buscando un balance entre desafío y diversión. Para complementar el arte del juego, colaboré con la comunidad utilizando un background de un creador en Itch.io, https://macrune12.itch.io/parallax-forest.`,
          `Este proyecto me dejó importantes aprendizajes que han enriquecido mi comprensión del desarrollo de videojuegos. Aprendí sobre la estructuración del código en Unity, descubriendo cómo mantenerlo limpio y escalable para futuros desarrollos. También profundicé en el uso de assets y su correcta integración en el juego, así como en la importancia del diseño de niveles y su impacto directo en la experiencia del jugador.`,
          `Doppel representa solo el comienzo de mi viaje en el desarrollo de videojuegos. Este primer paso me ha motivado a seguir creando y ya me encuentro trabajando en nuevas ideas para futuros proyectos. Esta experiencia ha sido fundamental para mi crecimiento como desarrollador y estoy emocionado por lo que vendrá en el futuro.`,
        ],
      },
    ],
  },
};
