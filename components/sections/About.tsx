import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-100 px-4 sm:px-8 lg:px-24 py-8 lg:py-16">
      
      <div className="flex justify-center mb-8 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center px-4 sm:px-6 py-3 sm:py-4 lg:py-6 border-2 border-gray-400 w-full max-w-md lg:max-w-none">
          ABOUT ME
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        
        <div className="mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl py-4 lg:py-6 text-center lg:text-left">
            I'm <strong>Olena Holub,</strong> Full-Stack Web Developer
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed text-left lg:text-justify">
            specializing in modern technologies like <strong>JavaScript</strong>, <strong>Next.js</strong>, <strong>PHP</strong>, <strong>Laravel</strong> and <strong>Symfony</strong>. I build scalable, elegant applications with clean code and great user experience.
            Currently based in Spain and open to exciting remote or on-site opportunities.
            <br /><br />
            My deployment experience includes platforms like <strong>Vercel</strong>, <strong>Railway</strong>, and <strong>AWS</strong>. I also have solid experience with object-oriented languages like <strong>Java</strong> and <strong>Python</strong>, and I'm always committed to continuous learning and improving my development skills.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8 lg:items-start">
          
          {/* Stats Grid - Mobile/Tablet: full width, Desktop: 2 cols */}
          <div className="lg:col-span-2 order-2 lg:order-1 lg:h-full">
            <div className="relative grid grid-cols-2 gap-1 text-yellow-400 text-center bg-black rounded-lg overflow-hidden p-1 lg:h-full">
              {/* Decorative lines - hidden on mobile  */}
              <div className="hidden sm:block absolute left-1/2 top-[8%] bottom-[8%] w-0.5 border-l border-dashed border-gray-500 z-0" />
              <div className="hidden sm:block absolute top-1/2 left-0 w-[calc(50%-16px)] border-t border-dashed border-gray-500 z-0" />
              <div className="hidden sm:block absolute top-1/2 right-0 w-[calc(50%-16px)] border-t border-dashed border-gray-500 z-0" />

              <div className="flex flex-col items-center justify-center p-4 sm:p-6 z-10 bg-black rounded">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">2</div>
                <div className="text-xs sm:text-sm mt-1">YEARS OF TRAINING</div>
              </div>

              <div className="flex flex-col items-center justify-center p-4 sm:p-6 z-10 bg-black rounded">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">5+</div>
                <div className="text-xs sm:text-sm mt-1">PROJECTS COMPLETED</div>
              </div>

              <div className="flex flex-col items-center justify-center p-4 sm:p-6 z-10 bg-black rounded">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">100%</div>
                <div className="text-xs sm:text-sm mt-1">DEDICATION</div>
              </div>

              <div className="flex flex-col items-center justify-center p-4 sm:p-6 z-10 bg-black rounded">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">🇺🇦 🇷🇺 🇪🇸 🇬🇧</div>
                <div className="text-xs sm:text-sm mt-1">LANGUAGES SPOKEN</div>
              </div>
            </div>
          </div>

          {/* Services - Mobile/Tablet: full width, Desktop: 1 col */}
          <div className="order-1 lg:order-2 lg:h-full flex flex-col">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 lg:mb-6 text-gray-900 text-center lg:text-left">
              What I Do
            </h3>
            <div className="space-y-4 lg:space-y-6 text-gray-700 flex-1 lg:flex lg:flex-col lg:justify-start">
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left p-4 sm:p-0 bg-white sm:bg-transparent rounded-lg sm:rounded-none shadow-sm sm:shadow-none">
                <Image 
                  src="/images/about/1.png" 
                  alt="Full-Stack Development" 
                  width={60} 
                  height={60}
                  className="sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0"
                />
                <div>
                  <p className="font-bold text-sm sm:text-base mb-1">Full-Stack Web Development</p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Building modern, responsive applications using React, Next.js, Node.js, PHP, Laravel & Symfony.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left p-4 sm:p-0 bg-white sm:bg-transparent rounded-lg sm:rounded-none shadow-sm sm:shadow-none">
                <Image 
                  src="/images/about/2.png" 
                  alt="API Design" 
                  width={60} 
                  height={60}
                  className="sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0"
                />
                <div>
                  <p className="font-bold text-sm sm:text-base mb-1">API Design & Integration</p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Creating and consuming RESTful APIs, ensuring secure, scalable data flow across frontend and backend.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left p-4 sm:p-0 bg-white sm:bg-transparent rounded-lg sm:rounded-none shadow-sm sm:shadow-none">
                <Image 
                  src="/images/about/3.png" 
                  alt="Deployment" 
                  width={60} 
                  height={60}
                  className="sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0"
                />
                <div>
                  <p className="font-bold text-sm sm:text-base mb-1">Deployment & Continuous Learning</p>
                  <p className="text-xs sm:text-sm text-gray-600">
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