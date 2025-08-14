import Image from 'next/image';
import ContactForm from '../ContactForm';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';

export default function Contact() {
  const { t } = useTranslation('common');

  return (
    <section id="contact" className="min-h-screen bg-gray-100 px-4 sm:px-12 lg:px-24 py-5">

      <div className="flex justify-center mb-12">
        <h2 className="text-4xl font-bold text-center w-full px-6 py-6 border-2 border-gray-400 inline-block">
          {t('contact.sectionTitle')}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl py-4 lg:py-6 text-center lg:text-left">
            <Trans
              ns="common"
              i18nKey="contact.heroTitle"
              components={{ 1: <strong /> }}
            />

          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed text-left lg:text-justify">
            {t('contact.heroDescription')}
          </p>
        </div>

        {/* Contact items */}
        <div className="flex flex-col xl:grid xl:grid-cols-2 gap-8">
          {/* Email */}
          <div className="flex items-center bg-white rounded-2xl shadow-md p-6 lg:p-8 transition hover:shadow-xl">
            <Image
              src="/images/contact/monitor.png"
              alt="Email Icon"
              width={160}
              height={160}
              className="w-20 h-20 xl:w-32 xl:h-32 object-contain"
            />
            <div className="ml-6 text-left">
              <a
                href={`mailto:${t('contact.email.address')}?subject=I'd like to work with you&body=Hello!`}
                className="text-lg xl:text-2xl font-semibold text-gray-800"
              >
                {t('contact.email.address')}
              </a>
              <p className="text-sm xl:text-base text-gray-500 mt-1">
                {t('contact.email.label')}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center bg-white rounded-2xl shadow-md p-6 lg:p-8 transition hover:shadow-xl">
            <Image
              src="/images/contact/phone.png"
              alt="Phone Icon"
              width={160}
              height={160}
              className="w-20 h-20 xl:w-32 xl:h-32 object-contain"
            />
            <div className="ml-6 text-left">
              <a
                href={`tel:${t('contact.phone.number')}`}
                className="text-lg xl:text-2xl font-semibold text-gray-800"
              >
                {t('contact.phone.number')}
              </a>
              <p className="text-sm xl:text-base text-gray-500 mt-1">
                {t('contact.phone.label')}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 lg:mt-16">
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
