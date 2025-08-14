'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FileText } from 'lucide-react';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';

export default function Recommendation() {
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="recommendation" className="min-h-screen bg-white px-4 sm:px-12 lg:px-24 py-5">
      <div className="flex justify-center mb-12">
        <h2 className="text-4xl font-bold text-center w-full px-6 py-6 border-2 border-gray-400 inline-block">
          {t('recommendation.sectionTitle')}
        </h2>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {/* Texto de recomendación */}
        <div className="bg-gray-50 border-l-4 border-yellow-400 pl-6 pr-6 py-8 rounded-xl shadow-md relative">
          <p className="text-sm text-gray-500 italic mb-3">
            {t('recommendation.date')}
          </p>
          
          <p className="text-lg italic text-gray-700 leading-relaxed mb-4">
            {t('recommendation.paragraph1')}
          </p>
          
          <p className="text-lg italic text-gray-700 leading-relaxed mb-4">
            {t('recommendation.paragraph2')}
          </p>
          <p className="text-lg italic text-gray-700 leading-relaxed mb-4">
            {t('recommendation.paragraph3')}
          </p>
          
          <p className="mt-6 font-semibold text-gray-800">
            {t('recommendation.author.name')}
          </p>
          <p className="text-sm text-gray-600">
            {t('recommendation.author.title')}
          </p>
          
          {/* Botón para abrir modal */}
          <button
            onClick={() => setIsOpen(true)}
            className="mt-6 inline-flex items-center gap-2 text-sm text-yellow-600 underline hover:text-yellow-800 transition"
          >
            <FileText size={18} />
            {t('recommendation.readFullLetter')}
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
              alt={t('recommendation.imageAlt')}
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