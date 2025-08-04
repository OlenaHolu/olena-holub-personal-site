export default function Resume() {
    return (
        <section id="resume" className="min-h-screen bg-white px-4 sm:px-12 lg:px-24 py-5">
            <div className="flex justify-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-center w-full px-6 py-6 border-2 border-gray-400 inline-block">
                    RESUME
                </h2>
            </div>

            <div className="px-8 flex flex-col justify-around min-h-[calc(100vh-15rem)]">
                <div className="border-b border-gray-300 pb-10">
                    <h3 className="text-xl font-semibold mb-6">EDUCATION</h3>
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                        <div>
                            <h4 className="inline-block w-max text-lg px-2  text-white bg-yellow-400 font-bold mb-2">Associate Degree in Web Dev</h4>
                            <p className="text-sm leading-relaxed">
                                <strong> IES Benigasló, Vall de Uxó, Castellón, Spain</strong> <br />
                                2024 – 2025 <br />
                                (Formación Profesional de Grado Superior) <br />
                                Graduated with honors. Focus on full-stack development, databases, and deployment tools.
                            </p>
                        </div>
                        <div>
                            <h4 className="inline-block w-max text-lg px-2 text-white bg-yellow-400 font-bold mb-2">English: Level B2</h4>
                            <p className="text-sm leading-relaxed">
                                <strong>EOI Castellón de la Plana, Spain</strong><br />
                                2022 – 2023 <br />
                                Completed with strong performance. Emphasis on business, tech, and academic communication.
                            </p>
                        </div>
                        <div>
                            <h4 className="inline-block w-max text-lg px-2 text-white bg-yellow-400 font-bold mb-2">Master's in Finance</h4>
                            <p className="text-sm leading-relaxed">
                                <strong>Zaporizhzhya National Technical University, Ukraine </strong> <br />
                                2003 – 2008 <br />
                                Graduated with distinction. Specialized in financial systems, analysis, and business planning.
                            </p>
                        </div>
                    </div>
                </div>

                {/* EXPERIENCE BLOCK */}
                <div className="pb-10">
                    <h3 className="text-xl font-semibold mb-6">EXPERIENCE</h3>
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                        <div>
                            <h4 className="inline-block w-max text-lg px-2 text-white bg-yellow-400 font-bold mb-2">
                                Full Stack Web Developer
                            </h4> <br />
                            <h4 className="inline-block w-max text-md text-yellow-600 font-bold mb-2">
                                Personal Project
                            </h4>
                            <p className="text-sm leading-relaxed">
                                <strong>Remote – Mar 2024 – Present</strong><br />
                                Created a full-stack platform for freediving analytics using Laravel (API) and React. Deployed with Vercel and Railway. Focused on data flow, user experience, and architecture.
                            </p>
                        </div>
                        <div>
                            <h4 className="inline-block w-max text-lg px-2 text-white bg-yellow-400 font-bold mb-2">
                                Web Developer Intern
                            </h4> <br />
                            <h4 className="inline-block w-max text-md text-yellow-600 font-bold mb-2">
                                ORBYS
                            </h4>
                            <p className="text-sm leading-relaxed">
                                <strong>Castellón, Spain – 2025</strong><br />
                                Full-stack development using Symfony and React. Participated in agile sprints, integrated APIs, and improved existing UX/UI features across internal platforms.
                            </p>
                        </div>

                        <div>
                            <h4 className="inline-block w-max text-lg px-2 text-white bg-yellow-400 font-bold mb-2">
                                Management, Analis
                            </h4> <br />
                            <h4 className="inline-block w-max text-md text-yellow-600 font-bold mb-2">
                                Banking sector
                            </h4>
                            <p className="text-sm leading-relaxed">
                                <strong>Zaporizhzhia, Ukraine – 2006 – 2014</strong><br />
                                Worked in the retail and corporate banking division. Conducted risk assessments, analyzed financial data, and supported loan portfolio management and customer relations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}