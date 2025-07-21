import { useState } from 'react';
import Image from 'next/image';
import { FileText } from 'lucide-react'; // Asegúrate de tener lucide-react instalado

export default function Recommendation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="recommendation" className="min-h-screen py-20 px-6 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Texto de recomendación */}
        <div className="bg-gray-50 border-l-4 border-yellow-400 pl-6 pr-4 py-8 rounded-md shadow-sm relative">
          <p className="text-sm text-gray-500 italic mb-2">La Vall d’Uixó, 17 de julio de 2025</p>
          <p className="text-lg leading-relaxed mb-4">
            “Me complace recomendar a <strong>Olena Holub</strong>, quien ha sido alumna del ciclo de Desarrollo de Aplicaciones Web.
            Durante su formación en nuestro centro, demostró ser una estudiante ejemplar con actitud proactiva,
            excelente capacidad de aprendizaje y compromiso con su desarrollo profesional.”
          </p>
          <p className="text-lg leading-relaxed mb-4">
            “Destaca por su curiosidad, autonomía para resolver problemas y pasión genuina por el desarrollo de software.
            Obtuvo una <strong>matrícula de honor</strong> y mostró gran habilidad para trabajar en equipo y asumir responsabilidades.”
          </p>
          <p className="mt-6 font-semibold">María Carmen Gómez Cano</p>
          <p className="text-sm">Tutora del ciclo DAW – IES Benigasló (Castellón)</p>

          {/* Botón con ícono */}
          <button
            onClick={() => setIsOpen(true)}
            className="mt-4 inline-flex items-center gap-2 text-sm text-yellow-600 underline hover:text-yellow-800 transition"
          >
            <FileText size={16} />
            Ver carta de recomendación escaneada
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
