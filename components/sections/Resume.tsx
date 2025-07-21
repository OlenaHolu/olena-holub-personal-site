export default function Resume() {
    return (
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

    );
}