import Image from 'next/image';
import ContactForm from '../ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-gray-100 px-4 sm:px-12 lg:px-24 py-5">

      <div className="flex justify-center mb-12">
        <h2 className="text-4xl font-bold text-center w-full px-6 py-6 border-2 border-gray-400 inline-block">
          CONTACT
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">

        <div className="mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl py-4 lg:py-6 text-center lg:text-left">
            Fell <strong>free</strong> to contact me!
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed text-left lg:text-justify">
            I would love to hear about your project and how I could help. Please fill in the form,
            or get in touch using my contact information.
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
                href="mailto:olenaholub.dev@gmail.com?subject=I'd like to work with you&body=Hello!"
                className="text-lg xl:text-2xl font-semibold text-gray-800"
              >
                olenaholub.dev@gmail.com
              </a>
              <p className="text-sm xl:text-base text-gray-500 mt-1">Email me anytime</p>
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
                href="tel:+34643448065"
                className="text-lg xl:text-2xl font-semibold text-gray-800"
              >
                +34 643 448 065
              </a>
              <p className="text-sm xl:text-base text-gray-500 mt-1">Call or message me</p>
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