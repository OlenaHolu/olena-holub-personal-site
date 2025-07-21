'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [showOthers, setShowOthers] = useState(false);

  return (
    <section id="portfolio" className="min-h-screen bg-gray-50 py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>

      {/* Main Project */}
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-center bg-white shadow-md rounded-xl overflow-hidden p-6">
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/freediveanalyzerCROP.png"
            alt="FreediveAnalyzer"
            width={600}
            height={400}
            className="rounded-md object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="text-2xl font-bold">FreediveAnalyzer</h3>
          <p className="text-sm text-gray-500">Personal Project – Full Stack App (2024)</p>
          <p className="text-gray-700">
            App to log and analyze freediving sessions. Includes dive planning, stats,
            oxygen tables, and interactive charts for session reviews.
          </p>
          <div className="flex flex-wrap gap-2 text-sm">
            {['Next.js', 'MongoDB', 'Tailwind', 'Chart.js'].map((tech) => (
              <span
                key={tech}
                className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href="https://freediveanalyzer.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full transition"
          >
            View Live
          </a>
        </div>
      </div>

      {/* Toggle Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => setShowOthers(!showOthers)}
          className="text-yellow-600 hover:text-yellow-800 font-medium underline"
        >
          {showOthers ? 'Hide other projects' : '+ More Projects'}
        </button>
      </div>

      {/* Other Projects */}
      {showOthers && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden p-4 flex flex-col">
              <Image
                src="/images/penyesAPP.png"
                alt={"PenyesAPP"}
                width={500}
                height={300}
                className="rounded-md object-cover mb-4"
              />
              <h4 className="text-xl font-bold">Instituto Project - PenyesAPP</h4>
              <p className="text-sm text-gray-500 mb-2">Sorteo de peñas</p>
              <p className="text-gray-700 mb-3">Next.js project</p>
              <div className="flex flex-wrap gap-2 text-sm mt-auto">
                {['Next.js', 'MongoDB', 'Tailwind', 'Chart.js'].map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden p-4 flex flex-col">
              <Image
                src="/images/socialAPP.png"
                alt={"SocialAPP"}
                width={500}
                height={300}
                className="rounded-md object-cover mb-4"
              />
              <h4 className="text-xl font-bold">Instituto Project - PenyesAPP</h4>
              <p className="text-sm text-gray-500 mb-2">Sorteo de peñas</p>
              <p className="text-gray-700 mb-3">Next.js project</p>
              <div className="flex flex-wrap gap-2 text-sm mt-auto">
                {['Next.js', 'MongoDB', 'Tailwind', 'Chart.js'].map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
        </div>
      )}
    </section>
  );
}
