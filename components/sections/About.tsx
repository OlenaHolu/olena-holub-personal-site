
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';

export default function About() {
  const { t } = useTranslation('common');

  return (
    <section id="about" className="min-h-screen bg-gray-100 px-4 sm:px-12 lg:px-24 py-5">
      {/* Title */}
      <div className="flex justify-center mb-12">
        <h2 className="text-4xl font-bold text-center w-full px-6 py-6 border-2 border-gray-400 inline-block">
          {t('about.sectionTitle')}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <div className="mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl py-4 lg:py-6 text-center lg:text-left">
            <Trans
              ns="common"
              i18nKey="about.heroTitle"
              components={{ 1: <strong /> }}
            />
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed text-left lg:text-justify">
            <Trans
              ns="common"
              i18nKey="about.heroDescription"
              components={{
                0: <br />,
                1: <strong />
              }}
            />
          </p>
        </div>

        {/* Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8 lg:items-start">
          {/* Stats */}
          <div className="lg:col-span-2 order-2 lg:order-1 lg:h-full">
            <div className="relative grid grid-cols-2 gap-1 text-yellow-400 text-center bg-black rounded-lg overflow-hidden p-1 lg:h-full">
              {/* Líneas decorativas */}
              <div className="hidden sm:block absolute left-1/2 top-[8%] bottom-[8%] w-0.5 border-l border-dashed border-gray-500 z-0" />
              <div className="hidden sm:block absolute top-1/2 left-0 w-[calc(50%-16px)] border-t border-dashed border-gray-500 z-0" />
              <div className="hidden sm:block absolute top-1/2 right-0 w-[calc(50%-16px)] border-t border-dashed border-gray-500 z-0" />

              <div className="flex flex-col items-center justify-center p-4 sm:p-6 z-10 bg-black rounded">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">2</div>
                <div className="text-xs sm:text-sm mt-1">{t('about.stats.years')}</div>
              </div>

              <div className="flex flex-col items-center justify-center p-4 sm:p-6 z-10 bg-black rounded">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">5+</div>
                <div className="text-xs sm:text-sm mt-1">{t('about.stats.projects')}</div>
              </div>

              <div className="flex flex-col items-center justify-center p-4 sm:p-6 z-10 bg-black rounded">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">100%</div>
                <div className="text-xs sm:text-sm mt-1">{t('about.stats.dedication')}</div>
              </div>

              <div className="flex flex-col items-center justify-center p-4 sm:p-6 z-10 bg-black rounded">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">🇺🇦 🇷🇺 🇪🇸 🇬🇧</div>
                <div className="text-xs sm:text-sm mt-1">{t('about.stats.languages')}</div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="order-1 lg:order-2 lg:h-full flex flex-col">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 lg:mb-6 text-gray-900 text-center lg:text-left">
              {t('about.servicesTitle')}
            </h3>

            <div className="space-y-4 lg:space-y-6 text-gray-700 flex-1 lg:flex lg:flex-col lg:justify-start">
              {(['service1', 'service2', 'service3'] as const).map((key, idx) => (
                <div
                  key={key}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left p-4 sm:p-0 bg-white sm:bg-transparent rounded-lg sm:rounded-none shadow-sm sm:shadow-none"
                >
                  <Image
                    src={`/images/about/${idx + 1}.png`}
                    alt={t(`about.${key}.title`)}
                    width={60}
                    height={60}
                    className="sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0 h-auto" // h-auto para mantener proporción
                  />
                  <div>
                    <p className="font-bold text-sm sm:text-base mb-1">{t(`about.${key}.title`)}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{t(`about.${key}.desc`) || t(`about.${key}.description`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
