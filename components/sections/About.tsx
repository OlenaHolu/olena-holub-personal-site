export default function About() {
    return (
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
    );
  }
     