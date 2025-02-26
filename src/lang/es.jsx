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
        content: (
          <div>
            <p>
              El 16 de enero inicié un nuevo reto en mi carrera: aprender Unity
              a través del bootcamp de{" "}
              <a href="https://colombia.generation.org/">Generation Colombia</a>
              . Durante semanas, fui explorando el motor, sus herramientas y las
              mejores prácticas de desarrollo de videojuegos.
            </p>
            <p>
              Como parte del proceso, desarrollé <strong>Doppel</strong>, un
              plataformas 2D que me permitió experimentar con programación,
              diseño visual y mecánicas de juego. Mi objetivo con este proyecto
              fue no solo aprender a usar Unity, sino también crear una
              experiencia jugable que reflejara mi crecimiento en esta etapa.
            </p>
            <img src="/blog/Doppel_blog.png" alt="" />
            <h3>¿Qué hice en Doppel?</h3>
            <ul>
              <li>
                Programación y mecánicas: Implementé los controles del
                personaje, las físicas del juego y la lógica detrás de cada
                nivel.
              </li>
              <li>
                Diseño visual: Creé el stylesheet y definí la estética del
                juego.
              </li>
              <li>
                Colaboración con la comunidad: Usé un background de{" "}
                <a href="https://macrune12.itch.io/parallax-forest.">
                  Macrune 12
                </a>{" "}
                creador en Itch.io para complementar el arte del juego.
              </li>
              <li>
                Level Design: Construí los niveles buscando un balance entre
                desafío y diversión.
              </li>
            </ul>
            <h3>¿Qué aprendí?</h3>
            <ul>
              <li>
                {" "}
                Estructuración del código en Unity para mantenerlo limpio y
                escalable.
              </li>
              <li>
                Uso de assets y cómo integrarlos correctamente en un juego.
              </li>
              <li>
                Diseño de niveles y su impacto en la experiencia del jugador.
              </li>
            </ul>
            <p>
              Este es solo el comienzo. Doppel fue mi primer paso en el
              desarrollo de videojuegos y ya estoy trabajando en nuevas
              ideas.¡Nos vemos en el siguiente proyecto!
            </p>
            <p>
              🔗 Prueba el juego aquí:{" "}
              <a href="https://cerodev.itch.io/doppel">Doppel</a>
            </p>
          </div>
        ),
      },
    ],
  },
};
