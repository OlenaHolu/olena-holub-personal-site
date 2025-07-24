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
            <SideIcons />

            {/* HERO SECTION */}
            <section
                id="home"
                className="relative flex flex-col lg:flex-row min-h-screen bg-white"
            >
                <div className="lg:w-1/2 px-8 lg:px-24 py-20 flex flex-col justify-center z-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-3xl font-extrabold mb-3 text-gray-800">
                        HI THERE!
                    </h1>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 leading-tight">
                        I’M <span className="text-yellow-500">OLENA</span>
                    </h2>
                    <p className="uppercase text-sm font-semibold bg-yellow-400 text-black px-3 py-1 w-max mb-6 tracking-wide rounded shadow">
                        Full Stack Developer
                    </p>
                    <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-2xl leading-relaxed text-justify">
                        Creative and detail-oriented full-stack web developer specializing in modern technologies like <strong>JavaScript</strong>, <strong>Next.js</strong>, <strong>PHP</strong>, <strong>Laravel</strong> and <strong>Symfony</strong>. I build scalable, elegant applications with clean code and great user experience.
                        Currently based in Spain and open to exciting remote or on-site opportunities.
                    </p>


                    <a
                        href="#about"
                        className="inline-block w-max text-sm sm:text-base bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow transition duration-200"
                    >
                        MORE ABOUT ME
                    </a>
                </div>

                <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full sepia-0 hover:sepia transition duration-300 ease-in-out">
                    <Image
                        src="/images/olenaCROP.jpg"
                        alt="Olena Holub"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>
            </section>

            <div className="flex">
                <div className="sticky top-0 h-screen">
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <About />
                    <Resume />
                    <Portfolio />
                    <Recommendation />
                    <Contact />
                </div>
            </div>

            <SideIcons />
        </div>
    );
}
