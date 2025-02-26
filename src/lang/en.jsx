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
          `The project focused on creating a modern and attractive platform using React and SASS. I implemented an intuitive filtering system that allows users to explore products by categories, along with an informative section about the company. Special emphasis was placed on creating a clean and responsive interface that reflects the quality of the brand's natural products.`,
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
  cv: {
    file: "/cv_Jhoan_Diaz_en.pdf",
  },
  blog: {
    title: "Blog",
    read: "Read more",
    notFound: "Blog post not found",
    blogs: [
      {
        title: "Doppel: My first Unity game",
        date: "02-24-2025",
        preview: `On January 16 I started a new challenge in my career: learning Unity through Generation Colombia's bootcamp.`,
        topics: [`Unity`, `C#`, `Game Development`],
        url: `doppel`,
        content: (
          <div>
            <p>
              On January 16th I started a new challenge in my career: learning
              Unity through the{" "}
              <a href="https://colombia.generation.org/">Generation Colombia</a>{" "}
              bootcamp. For weeks, I explored the engine, its tools and the best
              practices of video game development.
            </p>
            <p>
              As part of the process, I developed <strong>Doppel</strong>, a 2D
              platformer that allowed me to experiment with programming, visual
              design and game mechanics. My goal with this project was not only
              to learn how to use Unity, but also to create a playable
              experience that reflected my growth at this stage.
            </p>
            <img src="/blog/Doppel_blog.png" alt="" />
            <h3>What did I do in Doppel?</h3>
            <ul>
              <li>
                Programming and mechanics: I implemented the character controls,
                the physics of the game and the logic behind each level.
              </li>
              <li>
                Visual design: I created the stylesheet and defined the
                aesthetics of the game.
              </li>
              <li>
                Collaboration with the community: I used a background of{" "}
                <a href="https://macrune12.itch.io/parallax-forest.">
                  Macrune12
                </a>{" "}
                creator in Itch.io to complement the game art.
              </li>
              <li>
                Level Design: I built the levels looking for a balance between
                challenge and fun.
              </li>
            </ul>
            <h3>What did I learn?</h3>
            <ul>
              <li>
                Structuring the code in Unity to keep it clean and scalable.
              </li>
              <li>
                Use of assets and how to integrate them correctly in a game.
              </li>
              <li>Level design and its impact on the player's experience.</li>
            </ul>
            <p>
              This is just the beginning. Doppel was my first step in game
              development and I'm already working on new ideas, see you in the
              next project!
            </p>
            <p>
              🔗 Try the game here:{" "}
              <a href="https://cerodev.itch.io/doppel">Doppel</a>
            </p>
          </div>
        ),
      },
    ],
  },
};
