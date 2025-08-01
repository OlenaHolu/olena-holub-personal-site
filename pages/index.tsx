import Image from 'next/image';
import SideIcons from '../components/SideIcons';
import About from '../components/sections/About';
import Resume from '../components/sections/Resume';
import Portfolio from '../components/sections/Portfolio';
import Recommendation from '../components/sections/Recommendation';
import Contact from '../components/sections/Contact';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <div className="relative scroll-smooth">
      
      <div className="hidden lg:block">
        <SideIcons />
      </div>
      
      <section
        id="home"
        className="relative flex flex-col lg:flex-row min-h-screen bg-white"
      >

        <div className="w-full lg:w-1/2 px-4 sm:px-6 md:px-8 lg:px-24 py-8 sm:py-12 lg:py-20 flex flex-col justify-center z-10 order-2 lg:order-1">
          <h1 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold mb-2 sm:mb-3 text-gray-800">
            HI THERE!
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 text-gray-900 leading-tight">
            I'M <span 
              className="drop-shadow-[0_2px_3px_rgba(250,204,21,1)]"
              style={{
                WebkitTextStroke: '1px #facc15 sm:2px #facc15',
                color: 'white',
              }}
            >
              OLENA
            </span>
          </h2>
          <p className="uppercase text-xs sm:text-sm font-semibold bg-yellow-400 text-black px-2 sm:px-3 py-1 w-max mb-4 sm:mb-6 tracking-wide rounded shadow">
            Full Stack Web Developer
          </p>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed text-left sm:text-justify">
            Creative and detail-oriented full-stack web developer specializing in modern technologies like{' '}
            <strong>JavaScript</strong>, <strong>Next.js</strong>, <strong>PHP</strong>, <strong>Laravel</strong>{' '}
            and <strong>Symfony</strong>. I build scalable, elegant applications with clean code and great user experience.
            <br className="hidden sm:block" />
            <span className="block sm:inline mt-2 sm:mt-0">
              Currently based in Spain and open to exciting remote or on-site opportunities.
            </span>
          </p>
          <a
            href="#about"
            className="inline-block w-max text-sm sm:text-base bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow transition duration-200 active:scale-95"
          >
            MORE ABOUT ME
          </a>
        </div>

        <div className="w-full lg:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-screen order-1 lg:order-2 sepia-0 hover:sepia transition duration-300 ease-in-out">
          <Image
            src="/images/olenaCROP.JPG"
            alt="Olena Holub"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:sticky lg:top-0 lg:h-screen w-full lg:w-auto">
          <Sidebar />
        </div>
        
        <div className="flex-1 w-full">
          <About />
          <Resume />
          <Portfolio />
          <Recommendation />
          <Contact />
        </div>
      </div>

      <div className="block lg:hidden">
        <SideIcons />
      </div>
    </div>
  );
}