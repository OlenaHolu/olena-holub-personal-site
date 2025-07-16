// pages/index.tsx
import Image from 'next/image';
import SideIcons from '@/components/SideIcons';

export default function Home() {
  return (
    <div className="relative scroll-smooth">
      <SideIcons />

      {/* HERO SECTION */}
    <section
      id="home"
      className="relative flex flex-col lg:flex-row min-h-screen bg-white"
    >
      <div className="lg:w-1/2 px-8 lg:px-24 py-20 flex flex-col justify-center z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 text-gray-800">
          HI THERE!
        </h1>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 leading-tight">
          I’M <span className="text-yellow-500">OLENA</span>
        </h2>
        <p className="uppercase text-sm font-semibold bg-yellow-400 text-black px-3 py-1 w-max mb-6 tracking-wide rounded shadow">
          Full Stack Developer
        </p>
        <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-md leading-relaxed">
          I build beautiful, performant, and scalable web applications using modern
          tools like React, Next.js, Node.js and more. Currently based in Spain.
        </p>
        <a
          href="#about"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow transition duration-200"
        >
          MORE ABOUT ME
        </a>
      </div>

      <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full grayscale hover:grayscale-0 transition duration-300 ease-in-out">
        <Image
          src="/images/olena.jpg"
          alt="Olena Holub"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      </section>



      {/* ABOUT SECTION */}
      <section id="about" className="min-h-screen bg-gray-100 p-16">
        <h2 className="text-4xl font-bold mb-8">ABOUT ME</h2>
        <p className="text-lg mb-4 max-w-2xl">
          I’m <strong>Olena Holub</strong>, a full-stack developer passionate about creating meaningful user experiences. I specialize in building responsive, accessible, and performant web applications.
        </p>

        <div className="grid grid-cols-2 gap-8 mt-8">
          {/* Left - Metrics */}
          <div className="grid grid-cols-2 gap-4 text-center bg-black text-yellow-400 p-6 rounded-lg">
            <div>
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm">YEARS EXPERIENCE</div>
            </div>
            <div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm">PROJECTS DONE</div>
            </div>
            <div>
              <div className="text-2xl font-bold">30+</div>
              <div className="text-sm">HAPPY CLIENTS</div>
            </div>
            <div>
              <div className="text-2xl font-bold">3K+</div>
              <div className="text-sm">FOLLOWERS</div>
            </div>
          </div>

          {/* Right - Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-2">What I Do?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>💻 Web Development</li>
              <li>📱 Responsive Design</li>
              <li>⚙️ API Integration</li>
              <li>🎨 UI/UX Design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* RESUME SECTION */}
<section id="resume" className="min-h-screen bg-white p-16">
  <h2 className="text-4xl font-bold mb-8">RESUME</h2>
  <div className="grid md:grid-cols-2 gap-12">

    {/* Education */}
    <div>
      <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Education</h3>
      <div className="mb-6">
        <h4 className="font-bold text-lg">MSc Computer Science</h4>
        <p className="text-sm text-gray-600">University of Kyiv • 2017 - 2019</p>
        <p className="text-gray-700 mt-2">
          Specialized in full-stack development, AI systems and modern frontend architecture.
        </p>
      </div>
      <div>
        <h4 className="font-bold text-lg">BSc Software Engineering</h4>
        <p className="text-sm text-gray-600">Polytechnic University • 2013 - 2017</p>
        <p className="text-gray-700 mt-2">
          Learned programming foundations, algorithms, and system design principles.
        </p>
      </div>
    </div>

    {/* Experience */}
    <div>
      <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Experience</h3>
      <div className="mb-6">
        <h4 className="font-bold text-lg">Senior Full Stack Developer</h4>
        <p className="text-sm text-gray-600">Tech Company • 2022 - Present</p>
        <p className="text-gray-700 mt-2">
          Leading a team to build scalable SaaS applications using React, Node.js, and AWS.
        </p>
      </div>
      <div className="mb-6">
        <h4 className="font-bold text-lg">Frontend Developer</h4>
        <p className="text-sm text-gray-600">Startup Hub • 2019 - 2022</p>
        <p className="text-gray-700 mt-2">
          Developed modern UI interfaces with React, Tailwind CSS and integrated RESTful APIs.
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  
    
  );
}
