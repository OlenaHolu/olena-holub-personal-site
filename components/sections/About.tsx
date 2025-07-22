import { Code2, Plug, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-100 px-4 sm:px-12 lg:px-24 py-16">
      <h2 className="text-4xl font-bold mb-8">ABOUT ME</h2>
      <p className="text-lg mb-8 text-gray-800 leading-relaxed text-justify w-full">
        I’m <strong>Olena Holub</strong>, a full-stack web developer passionate about building modern, performant, and user-friendly applications. I recently completed a Higher Degree in Web Application Development, graduating <strong>with honors</strong>, and gained hands-on experience developing real-world tools—most notably, <strong>FreediveAnalyzer</strong>, an advanced analytics platform for freedivers.
        <br /><br />
        I work with technologies like <strong>JavaScript</strong>, <strong>React</strong>, and <strong>Node.js</strong>, and have solid experience in backend development using <strong>PHP</strong>, <strong>Laravel</strong>, and <strong>Symfony</strong>. I enjoy building <strong>RESTful APIs</strong> and deploying projects with platforms like <strong>Vercel</strong> and <strong>Railway</strong>.
        <br /><br />
        I also have basic knowledge of <strong>Java</strong> and <strong>Python</strong>, and I’m always eager to explore new technologies and grow as a developer.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {/* Left - Metrics */}
        <div className="grid grid-cols-2 gap-4 text-center bg-black text-yellow-400 p-6 rounded-lg">
          <div>
            <div className="text-2xl font-bold">2</div>
            <div className="text-sm">YEARS OF TRAINING</div>
          </div>
          <div>
            <div className="text-2xl font-bold">10+</div>
            <div className="text-sm">PROJECTS COMPLETED</div>
          </div>
          <div>
            <div className="text-2xl font-bold">100%</div>
            <div className="text-sm">DEDICATION</div>
          </div>
          <div>
            <div className="text-2xl font-bold">∞</div>
            <div className="text-sm">PASSION FOR CODE</div>
          </div>
        </div>

        {/* Right - Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">What I Do</h3>
          <div className="space-y-6 text-gray-700 text-sm">
    <div className="flex items-start gap-4">
      <Code2 className="text-yellow-500 mt-1" size={20} />
      <div>
        <p className="font-bold">Full-Stack Web Development</p>
        <p>
          Building modern, responsive applications using React, Next.js, Node.js, PHP, Laravel & Symfony.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <Plug className="text-yellow-500 mt-1" size={20} />
      <div>
        <p className="font-bold">API Design & Integration</p>
        <p>
          Creating and consuming RESTful APIs, ensuring secure, scalable data flow across frontend and backend.
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <Rocket className="text-yellow-500 mt-1" size={20} />
      <div>
        <p className="font-bold">Deployment & Continuous Learning</p>
        <p>
          Fast and reliable deployment using Vercel and Railway. Always expanding my knowledge with new tools and tech.
        </p>
      </div>
    </div>
  </div>
        </div>
      </div>
    </section>
  );
}
