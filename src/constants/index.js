const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Completed Projects" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/chat.png",
    title: "Problem-Solving Mindset",
    desc: "Approaching challenges with logic, creativity, and precision—breaking down complex issues to deliver clean, efficient solutions.",
  },
  {
    imgPath: "/images/seo.png",
    title: "Full-Stack Development",
    desc: "Bringing ideas to life with end-to-end development skills and scalable architecture.",
  },
  {
    imgPath: "/images/time.png",
    title: "Results-Driven Execution",
    desc: "Focusing on shipping real, impactful products—balancing speed with detail to ensure quality and functionality in every line of code.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    imgPath: "/images/exp2.png",
    title: "Web Developer",
    company: "Ajniha Welfare Society",
    location: "Toronto, Ontario",
    date: "August 2023 - Present",
    responsibilities: [
      "Designed and maintained the organization's responsive website to support donation campaigns and community outreach.",
      "Developed cross-platform mobile applications using React Native, integrating with Appwrite for backend services.",
      "Created visual content and social media graphics using Canva and Adobe Illustrator for digital campaigns.",
      "Optimized web performance and improved accessibility across devices and platforms.",
      "Collaborated with marketing teams to align development goals with outreach strategy."
    ],
  },
  {
    imgPath: "/images/exp1.png",
    title: "Software Developer Intern",
    company: "Teletalk Ltd",
    location: "Dhaka, Bangladesh",
    date: "May 2025 - September 2025",
    responsibilities: [
      "Engineered and maintained user-facing features using HTML, CSS, JavaScript, and React for internal web applications.",
      "Integrated REST APIs and worked alongside UX designers to ensure responsive and scalable design implementations.",
      "Assisted in testing, debugging, and performance optimization using browser dev tools and Lighthouse.",
      "Participated in sprint planning and contributed to version control with Git and GitHub."
    ],
  },
  {
    imgPath: "/images/exp5.svg",
    title: "Video Editor",
    company: "TMU Creative Team",
    location: "Toronto, Ontario",
    date: "September 2023 – January 2025",
    responsibilities: [
      "Edited promotional, event, and student life videos using Adobe Premiere Pro, meeting tight university campaign deadlines.",
      "Collaborated with the creative team to ensure all content aligned with TMU’s brand identity and visual guidelines.",
      "Exported multi-format content for social media, web, and digital signage across campus platforms.",
      "Provided technical input during concept development, helping shape media strategy for upcoming campaigns."
    ],
  },
  {
    imgPath: "/images/exp1.png",
    title: "Full Stack Developer Intern",
    company: "Teletalk Ltd",
    location: "Dhaka, Bangladesh",
    date: "May 2024 - September 2024",
    responsibilities: [
      "Developed full-stack web applications using React.js and Node.js with MongoDB integration.",
      "Collaborated with backend developers to design scalable API architecture and deploy using Docker.",
      "Contributed to documentation and codebase refactoring for better maintainability and readability.",
      "Enhanced app performance through lazy loading and component-based architecture."
    ],
  },
  {
    imgPath: "/images/exp3.png",
    title: "Full Stack Developer Intern",
    company: "SellStatic",
    location: "Toronto, Ontario",
    date: "May 2024 - September 2024",
    responsibilities: [
      "Designed and built frontend components for a product-based eCommerce platform using Next.js and Tailwind CSS.",
      "Implemented backend logic with Express.js and MongoDB for product listings and order management.",
      "Collaborated with design team to deliver pixel-perfect UI and mobile responsiveness.",
      "Produced product demo videos and edited promotional materials using Adobe Premiere Pro."
    ],
  },
  {
    imgPath: "/images/exp4.png",
    title: "Digital Media & Marketing Assistant",
    company: "Hart Stores",
    location: "Mississauga, Ontario",
    date: "August 2023 – April 2024",
    responsibilities: [
      "Created and edited social media videos and product promotion reels for Facebook and Instagram using Canva and Adobe Premiere Pro.",
      "Designed promotional banners and motion graphics for seasonal campaigns and website assets.",
      "Coordinated with marketing staff to brainstorm and execute visual storytelling strategies for product launches.",
      "Managed digital assets and ensured brand consistency across all published content."
    ],
  },
];





const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [

  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
  {
    name: 'github',
    imgPath: '/images/github.png'
  }
  
];

const projects = [
  {
    name: "Ajniha",
    image: "/images/ajniha.png",
    description:
      "Non-profit website designed to showcase causes, events, and donation drives. Built with responsive design.",
    link: "https://www.ajniha.org/",
  },
  {
    name: "SellStatic",
    image: "/images/sellstatic.png",
    description:
      "E-commerce platform demo with landing pages and modern animations using React and Tailwind CSS.",
    link: "https://www.sellstatic.com/",
  },
  {
    name: "Brainwave",
    image: "/images/brainwave.png",
    description:
      "Landing page for an AI productivity tool, focused on sleek design and fast performance.",
    link: "https://brainwave-beta-three.vercel.app/",
  },
  {
    name: "Eclat",
    image: "/images/eclat.png",
    description:
      "Portfolio-style website for a luxury brand concept, using elegant typography and transitions.",
    link: "https://eclat-brand.vercel.app/",
  },
  {
    name: "Cryptex",
    image: "/images/cryptex.png",
    description:
      "Crypto dashboard with market stats and wallet integration. Clean UI with chart visualizations.",
    link: "https://cryptexwatch.vercel.app/"
  },
  {
    name: "Hilink",
    image: "/images/hilink.png",
    description:
      "Adventure travel booking site with interactive elements and booking flow mockups.",
    link: "https://hi-link-delta.vercel.app/",
  },
  {
    name: "ReadMe",
    image: "/images/ReadMe.png",
    description:
      "AI-powered resume analyzer built with React and Puter.js",
    link: "https://read-me-pz26-chi.vercel.app/",
  },
  {
    name: "Hoobank",
    image: "/images/hoobank.png",
    description:
      "A sleek, responsive landing page for a fictional digital banking/card product.",
    link: "https://hoobank-nine-pi.vercel.app/",
  },
  {
    name: "BiteBoost",
    image: "/images/biteboost.png",
    description:
      "A modern web app that suggests recipes based on the ingredients you have at home.",
    link: "https://bite-boost.vercel.app/",
  },
  {
    name: "Zentry",
    image: "/images/zentry.png",
    description:
      " A high‑polish, Awwwards‑inspired landing page for a fictional gaming brand.",
    link: "https://zentry-mu-ten.vercel.app/",
  },
  {
    name: "CodeSphere",
    image: "/images/codesphere.png",
    link: "https://code-sphere-orcin.vercel.app/",
  },
  {
    name: "NoteFlow",
    image: "/images/noteflow.png",
    link: "https://note-flow-five.vercel.app/",
  },
  
];

export default projects;



export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects
};
