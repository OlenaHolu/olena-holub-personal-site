// components/AboutMe.tsx
export default function AboutMe() {
    return (
      <section id="about" className="bg-gray-100 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">ABOUT ME</h2>
          <p className="text-xl text-gray-600 mb-8">
            I’m <strong className="text-black">Olena Holub</strong>, Full Stack Developer based in Spain.
          </p>
          <p className="text-gray-500 mb-12 max-w-3xl">
            I have a passion for building modern, responsive, and accessible web applications. With experience across
            multiple technologies and a strong eye for design, I love collaborating with teams and clients to bring
            ideas to life.
          </p>
  
          {/* Stats section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
            <div>
              <p className="text-3xl font-bold text-yellow-500">7+</p>
              <p className="text-sm text-gray-600 mt-1">YEARS EXPERIENCE</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-500">50+</p>
              <p className="text-sm text-gray-600 mt-1">PROJECTS DONE</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-500">20+</p>
              <p className="text-sm text-gray-600 mt-1">HAPPY CLIENTS</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-500">10K</p>
              <p className="text-sm text-gray-600 mt-1">FOLLOWERS</p>
            </div>
          </div>
  
          {/* What I do */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">🖨️</div>
              <h4 className="font-semibold text-lg mb-1">Print Design</h4>
              <p className="text-sm text-gray-500">
                Strong foundation in layout, typography and branding applied in digital and print media.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">💻</div>
              <h4 className="font-semibold text-lg mb-1">Web Development</h4>
              <p className="text-sm text-gray-500">
                Expert in React, Next.js, Tailwind CSS and building modern responsive apps.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">📸</div>
              <h4 className="font-semibold text-lg mb-1">Photography</h4>
              <p className="text-sm text-gray-500">
                Passionate about capturing life moments, especially nature and cityscapes.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  