import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 text-white">
      <Head>
        <title>Daniel Felipe Urbina Sierra | Portfolio</title>
        <meta name="description" content="Portfolio of Daniel Felipe Urbina Sierra - Mechanical Engineer & Software Engineering Student" />
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-20">
          <div className="rounded-full bg-white bg-opacity-20 w-40 h-40 flex items-center justify-center mb-6 shadow-lg">
            {/* Placeholder for profile photo */}
            <span className="text-6xl">👨‍💻</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">Daniel Felipe Urbina Sierra</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Mechanical Engineer & Software Engineering Student</h2>
          <p className="max-w-xl text-lg md:text-xl mb-6">Innovative problem solver with a passion for math, programming, and instructional design. Experienced in web development, automation, and 3D design.</p>
          <a href="#contact" className="px-6 py-3 bg-white text-purple-700 font-bold rounded-full shadow-lg hover:bg-yellow-300 hover:text-pink-700 transition">Contact Me</a>
        </section>
        {/* About Section */}
        <section id="about" className="py-16">
          <h3 className="text-3xl font-bold mb-4">About Me</h3>
          <p className="text-lg mb-2">Highly motivated and detail-oriented mechanical engineer with strong skills in math, programming, and instructional design. Excels at developing innovative solutions to complex problems and collaborating with teams to achieve project goals.</p>
        </section>
        {/* Experience Section */}
        <section id="experience" className="py-16">
          <h3 className="text-3xl font-bold mb-4">Experience</h3>
          <ul className="space-y-6">
            <li>
              <strong>Brigham Young University</strong> – Math Instructional Design Assistant (Aug 2023–Present)
              <ul className="list-disc ml-6 text-base">
                <li>Developed interactive activities and web pages using Javascript, CSS, and HTML for continuing education at BYU.</li>
                <li>Automated processes and repetitive tasks with Python scripts, enhancing efficiency.</li>
              </ul>
            </li>
            <li>
              <strong>Asfaltics, Bogota, Colombia</strong> – Python Developer (Oct 2022–Dec 2022)
              <ul className="list-disc ml-6 text-base">
                <li>Developed a GUI for OAK-D cameras and managed GPS data for video frames.</li>
                <li>Assembled and tested the system in a car.</li>
              </ul>
            </li>
            <li>
              <strong>National University of Colombia</strong> – Academic Tutor (Jan 2019–Dec 2019)
              <ul className="list-disc ml-6 text-base">
                <li>Math, physics, chemistry, and engineering tutor for students.</li>
              </ul>
            </li>
            <li>
              <strong>The Church of Jesus Christ of Latter Day Saints</strong> – Finance Department Assistant (Jan 2017–Jan 2019)
              <ul className="list-disc ml-6 text-base">
                <li>Improved office organization and managed financial documents.</li>
              </ul>
            </li>
          </ul>
        </section>
        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h3 className="text-3xl font-bold mb-4">Projects</h3>
          <ul className="space-y-6">
            <li>
              <strong>Robot Quail Feeder Design</strong> – National University of Colombia (Jun 2019–Dec 2019)
              <ul className="list-disc ml-6 text-base">
                <li>Designed a robot quail feeder from scratch, including 3D modeling and manufacturing plans.</li>
              </ul>
            </li>
            <li>
              <strong>Educacion para todos</strong> – TPI EXPOIDEAS+ 2020 Winner (Jan 2020–May 2020)
              <ul className="list-disc ml-6 text-base">
                <li>Created a virtual course with videos and a clear path for students lacking access to formal education.</li>
              </ul>
            </li>
          </ul>
        </section>
        {/* Education Section */}
        <section id="education" className="py-16">
          <h3 className="text-3xl font-bold mb-4">Education</h3>
          <ul className="space-y-4">
            <li>
              <strong>Brigham Young University</strong> – English Language Center (Currently)
            </li>
            <li>
              <strong>Universidad Nacional de Colombia</strong> – Mechanical Engineering (Graduated Dec 2022)
            </li>
            <li>
              <strong>Colegio Santa Ana</strong> – Academic Bachelor with Emphasis on Systems (Graduated Dec 2007)
            </li>
          </ul>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-16">
          <h3 className="text-3xl font-bold mb-4">Contact</h3>
          <p className="mb-2">Email: <a href="mailto:dfurbinasierra@gmail.com" className="underline hover:text-yellow-300">dfurbinasierra@gmail.com</a></p>
          <p className="mb-2">Phone: <a href="tel:385-358-5994" className="underline hover:text-yellow-300">385-358-5994</a></p>
        </section>
      </main>
    </div>
  );
} 