import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Code, Video, ShoppingCart, MapPin, GraduationCap, ArrowUp, X, Send, CheckSquare } from 'lucide-react';

const projectsData = [
  {
    id: "movieweb",
    title: "MovieWeb V2",
    desc: "A high-performance Netflix clone built with Next.js 14. Features HLS adaptive streaming, server-side rendering, and a custom local-first watch history system.",
    fullDescription: "MovieWeb V2 is a comprehensive video streaming platform designed to mimic the core features of Netflix. It utilizes modern web technologies to deliver a seamless and highly performant user experience.",
    features: [
      "HLS adaptive streaming for varying network conditions",
      "Server-Side Rendering (SSR) for improved SEO and initial load times",
      "Local-first watch history tracking without needing a user account",
      "Responsive, cinematic UI with dark mode"
    ],
    tags: ["Next.js 14", "TypeScript", "Tailwind", "HLS.js"],
    image: "/projects/movieweb-demo.png",
    icon: Video,
    color: "from-red-500",
    link: "https://movie-web-green-sigma.vercel.app/phim/sieu-nhan-dien-quang-geed",
    github: "https://github.com/minhancr123/movie_web"
  },
  {
    id: "megamart",
    title: "MegaMart E-commerce",
    desc: "Enterprise-grade e-commerce platform with Microservices architecture. Includes real-time inventory, flash sales, and comprehensive admin dashboard.",
    fullDescription: "MegaMart is a robust e-commerce application built to handle high traffic and complex transactions. Its microservices architecture ensures scalability and maintainability across various business domains.",
    features: [
      "Microservices architecture separating users, products, and orders",
      "Real-time inventory updates and conflict resolution during checkout",
      "Flash sale system with high concurrency handling using Redis",
      "Comprehensive admin dashboard for product and order management"
    ],
    tags: ["Next.js", "NestJS", "PostgreSQL", "Docker", "Redis"],
    image: "/projects/megamart-demo.png",
    icon: ShoppingCart,
    color: "from-blue-500",
    link: "https://mega-mart-amber.vercel.app/",
    github: "https://github.com/minhancr123/MegaMart"
  },
  {
    id: "badmintonshop",
    title: "Badminton Shop",
    desc: "A full-featured e-commerce platform dedicated to badminton equipment, featuring product filtering, cart management, and secure checkout.",
    fullDescription: "Badminton Shop is an e-commerce website built to provide a seamless shopping experience for badminton enthusiasts. It includes an intuitive UI for browsing products, a robust shopping cart system, and an admin panel for inventory management.",
    features: [
      "Dynamic product catalog with advanced filtering and search",
      "User authentication and secure session management",
      "Interactive shopping cart with real-time total calculation",
      "Responsive design optimized for both mobile and desktop"
    ],
    tags: ["React", "Node.js", "Express", "MongoDB"],
    image: "/projects/badmintonshop-demo.png",
    icon: ShoppingCart,
    color: "from-emerald-500",
    link: "https://github.com/minhancr123/BadmintonShop",
    github: "https://github.com/minhancr123/BadmintonShop"
  },
  {
    id: "quanlycongviec",
    title: "Task Management",
    desc: "A comprehensive work management tool designed to help individuals and teams organize tasks, track progress, and boost productivity.",
    fullDescription: "Task Manager (Quản Lý Công Việc) is a productivity application that allows users to create, assign, and track tasks. It features an intuitive interface for managing daily workflows and project milestones.",
    features: [
      "Task creation, assignment, and status tracking",
      "Role-based access control for team collaboration",
      "Real-time task updates and deadline management",
      "Clean, modern UI designed for high productivity"
    ],
    tags: ["React", "TypeScript", "Tailwind CSS"],
    icon: CheckSquare,
    color: "from-orange-500",
    link: "https://github.com/minhancr123/quanlycongviec",
    github: "https://github.com/minhancr123/quanlycongviec"
  }
];

const ScrollToTop = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setVisible(latest > 0.1);
    });
  }, [scrollYProgress]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 bg-blue-600 rounded-full text-white shadow-xl hover:bg-blue-700 z-50 transition-colors"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// -- COMPONENT: ProjectCard --
const ProjectCard = ({ title, desc, tags, image, link, github, icon: Icon, color, onClick }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-colors duration-500 shadow-2xl cursor-pointer"
    >
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} to-purple-600 opacity-0 group-hover:opacity-20 blur transition duration-500`}></div>

      {/* Image / Header */}
      <div className="relative h-48 overflow-hidden bg-slate-900 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        ) : (
          <div className={`w-20 h-20 rounded-full ${color.replace('from-', 'bg-')} bg-opacity-20 flex items-center justify-center`}>
            <Icon className="w-10 h-10 text-white" />
          </div>
        )}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
      </div>

      {/* Content */}
      <div className="relative p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
          <div className="flex gap-2">
            {github && (
              <a href={github} target="_blank" className="p-2 bg-slate-700/50 hover:bg-slate-600 rounded-full text-white transition-colors" title="View Source">
                <Github size={18} />
              </a>
            )}
            {link && (
              <a href={link} target="_blank" className="p-2 bg-blue-600/20 hover:bg-blue-600 hover:text-white rounded-full text-blue-400 transition-colors" title="Live Demo">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-full border border-slate-600">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// -- COMPONENT: CodingLaptop --
const CodingLaptop = () => {
  const [codeLines] = useState([
    "const developer = {",
    "  name: 'Huynh Minh An',",
    "  skills: ['React', 'Node'],",
    "  hardWorker: true,",
    "  problemSolver: true,",
    "  hireable: function() {",
    "    return true;",
    "  }",
    "};",
    "",
    "developer.build();"
  ]);

  return (
    <div className="relative w-full max-w-[500px] mx-auto perspective-1000 group">
      {/* Laptop Structure */}
      <motion.div
        initial={{ rotateX: 10, rotateY: -10, scale: 0.9 }}
        animate={{ rotateX: 0, rotateY: 0, scale: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="relative transform-gpu"
      >
        {/* Screen Bezel */}
        <div className="bg-slate-800 rounded-t-xl p-2 pb-0 shadow-2xl border border-slate-700 relative z-20">
          {/* Webcam */}
          <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mx-auto mb-2 ring-1 ring-slate-600"></div>

          {/* Screen Display */}
          <div className="bg-slate-950 rounded-t-md overflow-hidden h-[280px] md:h-[320px] relative border border-slate-800/50 flex flex-col shadow-inner">
            {/* Window Header */}
            <div className="bg-slate-900 p-2 flex gap-1.5 border-b border-white/5 items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              <div className="ml-2 text-[10px] text-slate-500 font-mono">portfolio.tsx</div>
            </div>

            {/* Code Content */}
            <div className="p-4 font-mono text-xs md:text-sm text-slate-300 space-y-1 overflow-hidden">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.3 }}
                  className="whitespace-pre"
                >
                  <span className="text-slate-600 select-none mr-2">{i + 1}</span>
                  <span dangerouslySetInnerHTML={{
                    __html: line
                      .replace('const', '<span class="text-purple-400">const</span>')
                      .replace('function', '<span class="text-purple-400">function</span>')
                      .replace('return', '<span class="text-purple-400">return</span>')
                      .replace('true', '<span class="text-orange-400">true</span>')
                      .replace(/'([^']+)'/g, '<span class="text-green-400">\'$1\'</span>')
                  }} />
                </motion.div>
              ))}
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2 h-4 bg-blue-400 inline-block ml-1 align-middle"
              />
            </div>
          </div>
        </div>

        {/* Keyboard Base */}
        <div className="bg-slate-700 h-4 md:h-5 rounded-b-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] relative z-10 border-t border-slate-950 mx-[2px]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-slate-600 rounded-b-md"></div>
        </div>
      </motion.div>

      {/* Animated Hands */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[400px] h-32 pointer-events-none z-30 opacity-80">
        <motion.div
          animate={{ y: [0, 5, 0], x: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 0.2, repeatType: "reverse" }}
          className="absolute bottom-0 left-10 w-24 h-24 bg-gradient-to-t from-slate-800 to-transparent rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 6, 0], x: [0, 2, 0] }}
          transition={{ repeat: Infinity, duration: 0.25, repeatType: "reverse", delay: 0.1 }}
          className="absolute bottom-0 right-10 w-24 h-24 bg-gradient-to-t from-slate-800 to-transparent rounded-full blur-xl"
        />
      </div>

    </div>
  );
};

// -- COMPONENT: ExperienceCard --
const ExperienceCard = ({ role, period, company, location, logo, description, techStack }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 md:pl-0"
    >
      <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
        {/* Timeline dots for desktop */}
        <div className="hidden md:flex flex-col items-center col-span-1 pt-2">
          <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-slate-900 shadow-xl flex items-center justify-center overflow-hidden shrink-0 z-10 relative">
            {logo ? (
              <img src={logo} alt={company} className="w-full h-full object-contain p-2 bg-white" />
            ) : (
              <div className="w-full h-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xl">
                {company.charAt(0)}
              </div>
            )}
          </div>
          <div className="w-0.5 h-full bg-gradient-to-b from-blue-500/50 to-transparent my-4 min-h-[100px]"></div>
        </div>

        {/* Content */}
        <div className="md:col-span-4 bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-colors duration-500 rounded-3xl p-6 shadow-2xl group relative overflow-hidden">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 blur transition duration-500"></div>

          <div className="relative">
            {/* Mobile Logo & Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="md:hidden w-12 h-12 rounded-full bg-white border-2 border-slate-700 shadow-xl flex items-center justify-center overflow-hidden shrink-0">
                  {logo ? (
                    <img src={logo} alt={company} className="w-full h-full object-contain p-1" />
                  ) : (
                    <div className="w-full h-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                      {company.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{role}</h3>
                  <div className="text-lg text-slate-300 font-medium">{company}</div>
                </div>
              </div>

              <div className="flex flex-col md:items-end text-sm text-slate-400">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> {period}</span>
                <span className="flex items-center gap-1 mt-1"><MapPin size={14} /> {location}</span>
              </div>
            </div>

            {/* Description List */}
            <ul className="space-y-3 mb-6 text-slate-400 text-sm leading-relaxed">
              {description.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
              {techStack.map((tech: string) => (
                <span key={tech} className="px-3 py-1 text-xs font-medium bg-slate-900/50 text-slate-300 rounded-full border border-slate-600">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// -- COMPONENT: ProjectModal --
const ProjectModal = ({ project, onClose }: any) => {
  if (!project) return null;
  const Icon = project.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      >
        <div
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
          onClick={onClose}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black text-white rounded-full transition-colors backdrop-blur-sm"
          >
            <X size={20} />
          </button>

          {/* Scrollable Content */}
          <div className="overflow-y-auto relative flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* Header / Image */}
            <div className="relative h-64 md:h-80 bg-slate-800 flex items-center justify-center shrink-0">
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <div className={`w-32 h-32 rounded-full ${project.color.replace('from-', 'bg-')} bg-opacity-20 flex items-center justify-center`}>
                  <Icon className="w-16 h-16 text-white" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{project.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-slate-800/80 text-slate-300 rounded-full border border-slate-600 backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 space-y-8">
              <div className="flex flex-col sm:flex-row gap-4">
                {project.github && project.github !== "#" && (
                  <a href={project.github} target="_blank" className="btn-secondary flex items-center gap-2 flex-1 justify-center">
                    <Github size={18} /> View Source
                  </a>
                )}
                {project.link && project.link !== "#" && (
                  <a href={project.link} target="_blank" className="btn-primary flex items-center gap-2 flex-1 justify-center">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">Overview</h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {project.fullDescription || project.desc}
                </p>
              </div>

              {project.features && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {project.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <span className="text-blue-500 mt-1">✓</span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// -- COMPONENT: CustomCursor --
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-blue-400 pointer-events-none z-[999] hidden md:block mix-blend-screen"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    >
      <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-sm" />
    </motion.div>
  );
};

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      <CustomCursor />
      <ScrollToTop />

      {/* Progress Bar */}
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50 shadow-[0_0_10px_#3b82f6]" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 backdrop-blur-xl bg-slate-950/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#home" className="font-bold text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 hover:opacity-80 transition-opacity">
            DEV.Pro
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contact" className="px-5 py-2 bg-white text-slate-900 rounded-full hover:bg-slate-200 transition-colors font-bold shadow-lg shadow-white/10">
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center gap-12">

          {/* Avatar Image - Centered & Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-48 h-48 md:w-64 md:h-64 mt-8"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-emerald-500 rounded-full blur-xl opacity-70 animate-pulse"></div>
            <img
              src="/my_image.jpg"
              alt="Huỳnh Minh An"
              className="relative w-full h-full object-cover rounded-full border-[6px] border-slate-900 shadow-2xl"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left space-y-8">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for Freelance & Full-time
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight"
              >
                Building <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
                  Digital Experiences
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                I'm a Full Stack Developer specializing in building exceptional digital products.
                Currently focused on <span className="text-white font-semibold">Next.js</span> & <span className="text-white font-semibold">React Ecosystems</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              >
                <a href="#projects" className="btn-primary flex items-center justify-center gap-2 group">
                  View Projects
                  <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </a>
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center gap-2">
                  <ExternalLink size={18} /> View CV
                </a>
              </motion.div>
            </div>

            {/* Right Column: Laptop Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden lg:block w-full"
            >
              <CodingLaptop />
            </motion.div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column: Text Info */}
            <div className="space-y-6">
              <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase">About Me</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Huỳnh Minh An
              </h3>
              <div className="flex items-center gap-2 text-slate-400">
                <div className="p-2 rounded-full bg-blue-500/10 text-blue-400">
                  <MapPin size={20} />
                </div>
                <span>Binh Tan District, Ho Chi Minh City</span>
              </div>

              <p className="text-slate-400 leading-relaxed">
                I am a passionate software engineer with a strong academic background and practical experience in full-stack development. I love building scalable applications and exploring new technologies to solve real-world problems.
              </p>

              {/* Education Card */}
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2 shrink-0 overflow-hidden">
                  <img src="/logo.png" alt="HUIT Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Ho Chi Minh City University of Industry and Trade</h4>
                  <p className="text-blue-400 text-sm font-medium">HUIT</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-slate-400 text-sm">GPA:</span>
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/20">3.52 / 4.0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Stats / Visuals */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-3xl rounded-full" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center transform translate-y-8">
                  <div className="text-4xl font-bold text-blue-400 mb-1">2+</div>
                  <div className="text-slate-400 text-sm">Years Coding</div>
                </div>
                <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-1">5+</div>
                  <div className="text-slate-400 text-sm">Projects Completed</div>
                </div>
                <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center transform translate-y-8">
                  <GraduationCap size={40} className="mx-auto text-emerald-400 mb-2" />
                  <div className="text-slate-400 text-sm">Bachelor degree of IT</div>
                </div>
                <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center">
                  <Code size={40} className="mx-auto text-orange-400 mb-2" />
                  <div className="text-slate-400 text-sm">Full Stack Dev</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3">My Journey</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Work Experience</h3>
          </motion.div>

          <div className="space-y-12 relative">
            <div className="absolute left-[16px] md:left-[39px] top-0 bottom-0 w-0.5 bg-slate-800 hidden md:block"></div>

            <ExperienceCard
              role="Fullstack Intern"
              company="Antoree"
              period="Feb 2025 – Jul 2025"
              location="Ho Chi Minh City, Vietnam"
              logo="/antoree-logo.png"
              description={[
                "Developed a highly engaging, interactive English testing interface tailored for students under 16 on a 1-on-1 online learning platform.",
                "Integrated AI models trained on teachers' lesson plans to automatically generate periodic assessment tests simulating real exam conditions.",
                "Implemented automated AI grading for multiple-choice questions, while building a dedicated workflow for teachers to evaluate speaking tasks.",
                "Enhanced user engagement by incorporating rich illustrative images into test questions to maintain student interest.",
                "Built a real-time proctoring and monitoring system using WebSockets, allowing admins to directly supervise students during exams to prevent cheating."
              ]}
              techStack={["React", "Node.js", "WebSockets", "AI Integration"]}
            />

            <ExperienceCard
              role="Fullstack Developer"
              company="SOF – Solution Of Future"
              period="Aug 2025 – Mar 2026"
              location="Ho Chi Minh City, Vietnam"
              logo="/sof-logo.png"
              description={[
                "Developed B2B SaaS products for POS, warehouse management, pallet tracking, HRM, and payroll systems used by enterprise customers.",
                "Built invoice management features and real-time revenue dashboards, enabling business users to track sales by day, month, year, and product trends.",
                "Developed warehouse and pallet management modules with QR/barcode synchronization between mobile devices and backend services.",
                "Improved inventory validation, stock tracking accuracy, and operational efficiency through warehouse workflow automation.",
                "Implemented HRM and payroll features with complex salary calculation logic, attendance tracking, and employee management workflows.",
                "Optimized attendance queries using indexing and keyset pagination, reducing response time from 3000ms to 100ms.",
                "Applied frontend data prefetching techniques to improve page responsiveness and user experience.",
                "Collaborated using Git workflow, including branching, pull requests, code review, and feature delivery."
              ]}
              techStack={["PHP", "ReactJS", "ElectronJS", "MySQL", "CouchDB"]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3">Featured Work</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Selected Projects</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                desc={project.desc}
                tags={project.tags}
                image={project.image}
                icon={project.icon}
                color={project.color}
                link={project.link}
                github={project.github}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills / Tech Stack Section */}
      <section id="skills" className="py-20 bg-slate-900/50 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-bold heading-gradient">Technology Stack</h2>
          <p className="text-slate-400 mt-4">Technologies I use to build amazing products</p>
        </div>

        {/* Infinite Scroll Marquee */}
        {/* Infinite Scroll Marquee */}
        <div className="relative flex overflow-x-hidden group py-4">
          <div className="animate-marquee whitespace-nowrap flex gap-8 px-4 shrink-0">
            {[
              { name: "React", icon: "react" },
              { name: "Next.js", icon: "nextdotjs" },
              { name: "TypeScript", icon: "typescript" },
              { name: "Node.js", icon: "nodedotjs" },
              { name: "Tailwind", icon: "tailwindcss" },
              { name: "PostgreSQL", icon: "postgresql" },
              { name: "Docker", icon: "docker" },
              { name: "Framer", icon: "framer" },
              { name: "MongoDB", icon: "mongodb" },
              { name: "Redis", icon: "redis" },
              { name: "NestJS", icon: "nestjs" },
              { name: "Git", icon: "git" },
              // Duplicate for smooth loop
              { name: "React", icon: "react" },
              { name: "Next.js", icon: "nextdotjs" },
              { name: "TypeScript", icon: "typescript" },
              { name: "Node.js", icon: "nodedotjs" },
              { name: "Tailwind", icon: "tailwindcss" },
              { name: "PostgreSQL", icon: "postgresql" },
              { name: "Docker", icon: "docker" },
              { name: "Framer", icon: "framer" },
              { name: "MongoDB", icon: "mongodb" },
              { name: "Redis", icon: "redis" },
              { name: "NestJS", icon: "nestjs" },
              { name: "Git", icon: "git" },
            ].map((skill, index) => (
              <div key={index} className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 border border-white/5 rounded-full backdrop-blur-sm mx-2">
                <img
                  src={`https://cdn.simpleicons.org/${skill.icon}/white`}
                  alt={skill.name}
                  className="w-6 h-6"
                />
                <span className="text-slate-200 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>

          <div className="animate-marquee whitespace-nowrap flex gap-8 px-4 shrink-0">
            {/* Second duplicate layer for seamless loop */}
            {[
              { name: "React", icon: "react" },
              { name: "Next.js", icon: "nextdotjs" },
              { name: "TypeScript", icon: "typescript" },
              { name: "Node.js", icon: "nodedotjs" },
              { name: "Tailwind", icon: "tailwindcss" },
              { name: "PostgreSQL", icon: "postgresql" },
              { name: "Docker", icon: "docker" },
              { name: "Framer", icon: "framer" },
              { name: "MongoDB", icon: "mongodb" },
              { name: "Redis", icon: "redis" },
              { name: "NestJS", icon: "nestjs" },
              { name: "Git", icon: "git" },
              // Duplicate for smooth loop
              { name: "React", icon: "react" },
              { name: "Next.js", icon: "nextdotjs" },
              { name: "TypeScript", icon: "typescript" },
              { name: "Node.js", icon: "nodedotjs" },
              { name: "Tailwind", icon: "tailwindcss" },
              { name: "PostgreSQL", icon: "postgresql" },
              { name: "Docker", icon: "docker" },
              { name: "Framer", icon: "framer" },
              { name: "MongoDB", icon: "mongodb" },
              { name: "Redis", icon: "redis" },
              { name: "NestJS", icon: "nestjs" },
              { name: "Git", icon: "git" },
            ].map((skill, index) => (
              <div key={index} className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 border border-white/5 rounded-full backdrop-blur-sm mx-2">
                <img
                  src={`https://cdn.simpleicons.org/${skill.icon}/white`}
                  alt={skill.name}
                  className="w-6 h-6"
                />
                <span className="text-slate-200 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-blue-600/5 skew-y-3 transform origin-bottom-right" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Let's Work Together
            </motion.h2>
            <p className="text-xl text-slate-400">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <a href="mailto:huynhminhanc5.pbchau@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors mb-6 group">
                  <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Email Me</div>
                    <div className="font-medium break-all">huynhminhanc5.pbchau@gmail.com</div>
                  </div>
                </a>

                <div className="flex gap-4 pt-6 border-t border-slate-700/50">
                  <a href="https://github.com/minhancr123" target="_blank" className="p-3 bg-slate-900 rounded-full hover:bg-slate-700 text-white transition-colors" title="GitHub">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/hu%E1%BB%B3nh-minh-an-101899347/" target="_blank" className="p-3 bg-slate-900 rounded-full hover:bg-blue-700 text-white transition-colors" title="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://www.facebook.com/an.huynh.846931/" target="_blank" className="p-3 bg-slate-900 rounded-full hover:bg-blue-600 text-white transition-colors" title="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              className="bg-slate-800/80 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl shadow-2xl space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for your message! This form is currently in simulation mode. Please use the email link directly to reach me.");
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Your Name</label>
                  <input type="text" required placeholder="John Doe" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Email Address</label>
                  <input type="email" required placeholder="john@example.com" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Message</label>
                <textarea required rows={4} placeholder="How can I help you?" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 bg-slate-950 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Huỳnh Minh An. All rights reserved.</p>
        <p className="mt-2">Built with <span className="text-white">Vite</span>, <span className="text-white">React</span> & <span className="text-white">Tailwind</span></p>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;
