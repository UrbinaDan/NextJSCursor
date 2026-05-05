// Portfolio website for Daniel Urbina, showcasing AI development, software engineering, and mechanical engineering projects and experience. Built with Next.js and Tailwind CSS for a modern, responsive design.
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const projects = [
  {
    title: 'AI Scene Understanding Pipeline',
    description:
      'Computer vision pipeline for segmentation, depth estimation, and layered scene reconstruction for PaperTheater AI.',
    tags: ['Computer Vision', 'Python', 'AI'],
  },
  {
    title: 'AI Assistant System',
    description:
      'Real-time AI assistant built with FastAPI, WebSockets, LLM responses, and retrieval-based context handling.',
    tags: ['FastAPI', 'LLM', 'RAG'],
  },
  {
    title: 'Canvas QA Automation Tool',
    description:
      'AI-assisted system for analyzing and improving course content quality using APIs and automated validation.',
    tags: ['Automation', 'APIs', 'EdTech'],
  },
  {
    title: 'AI-Powered Stock Analysis Tool',
    description:
      'Backend system using Python and FastAPI to automate financial data extraction and analysis.',
    tags: ['Python', 'FastAPI', 'Finance'],
  },
  {
    title: 'Autonomous Feeding Robot',
    description:
      'Mechanical engineering project designing an automated mobile robot with lift and controlled distribution systems.',
    tags: ['Robotics', 'CAD', 'Engineering'],
  },
];

const skills = [
  'Python',
  'JavaScript',
  'React',
  'Next.js',
  'FastAPI',
  'Flask',
  'MongoDB',
  'SQL',
  'AWS',
  'Docker',
  'GitHub Actions',
  'LangChain',
  'OpenAI API',
  'RAG',
  'Git',
  'Postman',
];

function ScrambleText({
  japanese,
  english,
  speed = 40,
  delay = 300,
}) {
  const chars =
    'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン';

  // ✅ SSR-safe initial value (same on server + client)
  const [output, setOutput] = useState(japanese);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let frame = 0;
    let timeout;

    const animate = () => {
      let result = '';

      for (let i = 0; i < english.length; i++) {
        if (i < frame) {
          result += english[i];
        } else {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setOutput(result);

      if (frame <= english.length) {
        frame++;
        timeout = setTimeout(animate, speed);
      }
    };

    const start = setTimeout(() => {
      animate();
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(start);
    };
  }, [mounted, english, speed, delay]);

  return <span>{output}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
      </div>
      <Head>
        <title>Daniel Urbina | AI Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Daniel Urbina, Software Engineering student, Mechanical Engineer, and AI developer."
        />
      </Head>

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold">
            <ScrambleText
              japanese="ダニエル・ウルビナ"
              english="Daniel Urbina"
              speed={30}
              delay={300}
            />
          </a>

          <div className="hidden gap-6 text-sm text-gray-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid min-h-screen items-center gap-12 pt-24 md:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <motion.p variants={fadeUp} className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              <ScrambleText
                japanese="AIカイハツシャ・ソフトウェアコウガク・キカイコウガク"
                english="AI Developer • Software Engineering • Mechanical Engineering"
                speed={10}
                delay={300}
              />
            </motion.p>

            <motion.h1 variants={fadeUp} className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl"> 
              I build AI tools, automation systems, and software products.
            </motion.h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-gray-300">
              I am a Software Engineering student and Mechanical Engineer focused on AI,
              automation, computer vision, and full-stack development. I build practical
              systems using Python, JavaScript, FastAPI, APIs, LangChain, and OpenAI.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Contact Me
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/20 blur-2xl"></div>
              <img
                src="/NextJSCursor/profile.png"
                alt="Daniel Urbina"
                className="relative h-80 w-80 rounded-[2rem] border border-white/10 object-cover shadow-2xl"
              />
            </div>
          </motion.div>

        </motion.section>

        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 pb-24 md:grid-cols-4"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-3xl font-bold">5+</p>
            <p className="mt-2 text-sm text-gray-400">AI and software projects</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-3xl font-bold">100+</p>
            <p className="mt-2 text-sm text-gray-400">Deployed learning components improved</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-3xl font-bold">AI</p>
            <p className="mt-2 text-sm text-gray-400">LangChain, OpenAI, RAG, automation</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-3xl font-bold">Full Stack</p>
            <p className="mt-2 text-sm text-gray-400">Next.js, FastAPI, APIs, databases</p>
          </div>
        </motion.section>

        <motion.section
          id="about"
          className="border-t border-white/10 py-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        > 
          <h2 className="mb-6 text-4xl font-bold">About</h2>
          <p className="max-w-3xl text-lg leading-8 text-gray-300">
            I combine mechanical engineering problem-solving with software engineering
            and AI development. My work focuses on building useful technical systems,
            including AI assistants, automation tools, computer vision pipelines,
            dashboards, and backend APIs.
          </p>
        </motion.section>

        <section id="experience" className="border-t border-white/10 py-24">
          <h2 className="mb-10 text-4xl font-bold">Experience</h2>

          <div className="space-y-6">
           <motion.div
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.03 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-sm text-blue-400">Apr 2024 - Present</p>
              <h3 className="mt-2 text-2xl font-bold">Instructional Design Assistant</h3>
              <p className="text-gray-400">Ensign College • Salt Lake City, Utah</p>
              <p className="mt-4 text-gray-300">
                Developed and maintained software-driven learning tools using JavaScript,
                HTML, and CSS. Debugged production code and improved reliability across
                100+ deployed components.
              </p>
            </motion.div><motion.div
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.03 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >            
              <p className="text-sm text-blue-400">Aug 2023 - Apr 2024</p>
              <h3 className="mt-2 text-2xl font-bold">Math Instructional Design Assistant</h3>
              <p className="text-gray-400">Brigham Young University • Provo, Utah</p>
              <p className="mt-4 text-gray-300">
                Built and deployed web-based applications using JavaScript, HTML, and CSS.
                Designed reusable Python modules to improve scalability and reduce
                development time.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.03 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            > 
              <p className="text-sm text-blue-400">Sept 2022 - Dec 2022</p>
              <h3 className="mt-2 text-2xl font-bold">Python Developer</h3>
              <p className="text-gray-400">Asfaltics • Bogota, Colombia</p>
              <p className="mt-4 text-gray-300">
                Built a Python GUI integrating OAK-D cameras and GPS for AI-driven road
                inspection. Developed data processing pipelines and resolved multithreading
                issues for synchronized camera inputs.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="border-t border-white/10 py-24">
          <h2 className="mb-10 text-4xl font-bold">Projects</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-4 text-gray-300">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-sm text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
              
            ))}
          </div>
        </section>

        <section id="skills" className="border-t border-white/10 py-24">
          <h2 className="mb-10 text-4xl font-bold">Skills</h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="education" className="border-t border-white/10 py-24">
          <h2 className="mb-10 text-4xl font-bold">Education</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-blue-400">Expected 2026</p>
              <h3 className="mt-2 text-2xl font-bold">B.S. Software Engineering</h3>
              <p className="text-gray-400">Ensign College • Salt Lake City, Utah</p>
              <p className="mt-4 text-gray-300">
                OO Design, Data Structures, Java, Python, API Architecture, AI, and automation.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-blue-400">2022</p>
              <h3 className="mt-2 text-2xl font-bold">B.S. Mechanical Engineering</h3>
              <p className="text-gray-400">National University of Colombia • Bogota, Colombia</p>
              <p className="mt-4 text-gray-300">
                Robotic design, modeling, automation systems, mechanics, and engineering systems design.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 py-24">
          <h2 className="mb-6 text-4xl font-bold">Contact</h2>
          <p className="mb-8 max-w-2xl text-lg text-gray-300">
            I am open to AI, software engineering, automation, and technical internship opportunities.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:dfurbinasierra@gmail.com"
              className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/daniel-urbina-sierra"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/UrbinaDan"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">
        © 2026 Daniel Urbina. Built with Next.js and Tailwind CSS.
      </footer>
    </div>
  );
}