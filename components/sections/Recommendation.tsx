import { useState } from 'react';
import Image from 'next/image';
import { FileText } from 'lucide-react'; // Asegúrate de tener lucide-react instalado

export default function Recommendation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="recommendation" className="min-h-screen bg-white px-4 sm:px-12 lg:px-24 py-5">
      <div className="flex justify-center mb-12">
        <h2 className="text-4xl font-bold text-center w-full px-6 py-6 border-2 border-gray-400 inline-block">
          RECOMMENDATIONS
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Texto de recomendación */}
        <div className="bg-gray-50 border-l-4 border-yellow-400 pl-6 pr-6 py-8 rounded-xl shadow-md relative">
          <p className="text-sm text-gray-500 italic mb-3">La Vall d’Uixó, July 18th, 2025</p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            “It is my pleasure to recommend <strong>Olena Holub</strong>, a student in the Web Application Development program (CFGS DAW) at our institution during 2023–2025. She has proven to be committed, responsible, and highly capable, with excellent academic results and a remarkable ability to apply her knowledge in real-world projects.”
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            “She stands out for her curiosity, autonomy, and teamwork skills. Her final project received the highest grade, and she consistently went beyond classroom expectations. I’m confident she will be an asset to any professional environment.”
          </p>

          <p className="mt-6 font-semibold text-gray-800">María Carmen Gómez Cano</p>
          <p className="text-sm text-gray-600">DAW Program Tutor – IES Benigasló (Castellón)</p>

          {/* Botón para abrir modal */}
          <button
            onClick={() => setIsOpen(true)}
            className="mt-6 inline-flex items-center gap-2 text-sm text-yellow-600 underline hover:text-yellow-800 transition"
          >
            <FileText size={18} />
            Read full letter
          </button>
        </div>
      </div>

      {/* Modal con imagen */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <div className="max-w-3xl w-full px-4">
            <Image
              src="/images/recommendation.jpeg"
              alt="Carta recomendación"
              width={1200}
              height={1600}
              className="rounded-md shadow-lg w-full h-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}
