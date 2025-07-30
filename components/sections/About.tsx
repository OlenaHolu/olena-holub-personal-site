export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-100 px-4 sm:px-12 lg:px-24 py-5">
      <div className="flex justify-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-center w-full px-6 py-6 border-2 border-gray-400 inline-block">
          ABOUT ME
        </h2>
      </div>
      <div className="px-8">
        <h2 className="text-3xl py-6"> I´m <strong>Olena Holub,</strong> Full-Stack Web Developer  </h2>
        <p className="text-lg mb-8 text-gray-800 leading-relaxed text-justify w-full">
          specializing in modern technologies like <strong>JavaScript</strong>, <strong>Next.js</strong>, <strong>PHP</strong>, <strong>Laravel</strong> and <strong>Symfony</strong>. I build scalable, elegant applications with clean code and great user experience.
          Currently based in Spain and open to exciting remote or on-site opportunities.
          <br /><br />
          My deployment experience includes platforms like <strong>Vercel</strong>, <strong>Railway</strong>, and <strong>AWS</strong>.  I also have solid experience with object-oriented languages like <strong>Java</strong> and <strong>Python</strong>, and I’m always committed to continuous learning and improving my development skills.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="relative col-span-2 grid grid-cols-2 grid-rows-2 mt-10 text-yellow-400 text-center bg-black rounded overflow-hidden">
            <div className="absolute left-1/2 top-[8%] bottom-[8%]  w-0.5 border-l border-dashed border-gray-500 z-0" />
            <div className="absolute top-1/2 left-0 w-[calc(50%-16px)] border-t border-dashed border-gray-500 z-0" />
            <div className="absolute top-1/2 right-0 w-[calc(50%-16px)] border-t border-dashed border-gray-500 z-0" />

            <div className="flex flex-col items-center justify-center p-6 z-10">
              <div className="text-5xl font-bold">2</div>
              <div className="text-sm">YEARS OF TRAINING</div>
            </div>

            <div className="flex flex-col items-center justify-center p-6 z-10">
              <div className="text-5xl font-bold">5+</div>
              <div className="text-sm">PROJECTS COMPLETED</div>
            </div>

            <div className="flex flex-col items-center justify-center p-6 z-10">
              <div className="text-5xl font-bold">100%</div>
              <div className="text-sm">DEDICATION</div>
            </div>

            <div className="flex flex-col items-center justify-center p-6 z-10">
              <div className="text-4xl font-bold">🇺🇦 🇷🇺 🇪🇸 🇬🇧</div>
              <div className="text-sm">LANGUAGES SPOKEN</div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-4 text-gray-900">What I Do</h3>
            <div className="space-y-6 text-gray-700 text-sm">
              <div className="flex items-start gap-4">
                <img src="/images/about/1.png" alt="image about" className="text-yellow-500 mt-1" width={100} height={100} />
                <div>
                  <p className="font-bold">Full-Stack Web Development</p>
                  <p>
                    Building modern, responsive applications using React, Next.js, Node.js, PHP, Laravel & Symfony.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img src="/images/about/2.png" alt="image about" className="text-yellow-500 mt-1" width={100} height={100} />
                <div>
                  <p className="font-bold">API Design & Integration</p>
                  <p>
                    Creating and consuming RESTful APIs, ensuring secure, scalable data flow across frontend and backend.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img src="/images/about/3.png" alt="image about" className="text-yellow-500 mt-1" width={100} height={100} />
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
      </div>
    </section>
  );
}
