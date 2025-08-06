import Image from 'next/image';

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

        <div className="flex flex-col xl:grid xl:grid-cols-2 gap-6 xl:gap-10 xl:items-start">
          {/* Contact Item - Email */}
          <div className="flex flex-col justify-center items-center xl:items-start">
            <div className="flex items-center gap-4 xl:gap-6 p-4 xl:p-8 bg-white md:bg-transparent rounded-lg md:rounded-none shadow-sm md:shadow-none w-full">
              <Image
                src="/images/contact/monitor.png"
                alt="Email Icon"
                width={160}
                height={160}
                className="w-24 h-24 xl:w-40 xl:h-40 flex-shrink-0"
              />
              <div className="text-gray-700 text-center md:text-left">
                <p className="font-bold text-base md:text-lg xl:text-2xl">olenaholub.dev@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Item - Phone */}
          <div className="flex flex-col justify-center items-center xl:items-start">
            <div className="flex items-center gap-4 xl:gap-6 p-4 xl:p-8 bg-white md:bg-transparent rounded-lg md:rounded-none shadow-sm md:shadow-none w-full">
              <Image
                src="/images/contact/phone.png"
                alt="Phone Icon"
                width={160}
                height={160}
                className="w-24 h-24 xl:w-40 xl:h-40 flex-shrink-0"
              />
              <div className="text-gray-700 text-center md:text-left">
                <p className="font-bold text-base md:text-lg xl:text-2xl">+34643448065</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}