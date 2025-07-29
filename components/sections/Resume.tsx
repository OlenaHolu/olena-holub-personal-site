export default function Resume() {
    return (
        <section id="resume" className="min-h-screen bg-white px-4 sm:px-12 lg:px-24 py-5">
            <div className="flex justify-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-center w-full px-6 py-6 border-2 border-gray-400 inline-block">
                    RESUME
                </h2>
            </div>

            {/* EDUCATION BLOCK */}
            <div className="mb-16 border-b border-gray-300 pb-10">
                <h3 className="text-xl font-semibold mb-6">EDUCATION</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="text-lg px-2  text-white bg-yellow-400 font-bold mb-2">Master's in Finance</h4>
                        <p className="text-sm leading-relaxed">
                            Kyiv National Economic University <br />
                            Graduated in 2012 with strong focus on financial systems and data analysis.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg px-2  text-white bg-yellow-400 font-bold mb-2">Higher Degree in Web Dev</h4>
                        <p className="text-sm leading-relaxed">
                            IES Campanillas, Málaga, Spain <br />
                            2024 – Graduated with honors. Specialized in full-stack web technologies.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg px-2  text-white bg-yellow-400 font-bold mb-2">Online Certifications</h4>
                        <p className="text-sm leading-relaxed">
                            Completed practical training in React, Node.js, PHP and AWS on platforms like OpenBootcamp, freeCodeCamp, and YouTube.
                        </p>
                    </div>
                </div>
            </div>

            {/* EXPERIENCE BLOCK */}
            <div>
                <h3 className="text-xl font-semibold mb-6 border-b border-gray-300 pb-2">EXPERIENCE</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h4 className="text-lg px-2  text-white bg-yellow-400 font-bold mb-2">FreediveAnalyzer Project</h4>
                        <p className="text-sm leading-relaxed">
                            Developed an advanced data analytics tool for freedivers. Built with Laravel, Node.js, and Chart.js.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg px-2  text-white bg-yellow-400 font-bold mb-2">Full-Stack Projects</h4>
                        <p className="text-sm leading-relaxed">
                            Created responsive and scalable web apps using React, Next.js, PHP, and REST APIs. Deployed on Vercel & Railway.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg px-2  text-white bg-yellow-400 font-bold mb-2">Team Collaboration</h4>
                        <p className="text-sm leading-relaxed">
                            Experienced working with Git, GitHub, Figma, and agile tools. Focused on clean code, testing and team productivity.
                        </p>
                    </div>
                </div>
            </div>

        </section>

    );
}