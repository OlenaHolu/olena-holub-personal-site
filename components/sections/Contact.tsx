import { Mail, MapPin, Phone, Monitor } from 'lucide-react';
import ContactForm from '../ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-gray-100 px-4 sm:px-12 lg:px-24 py-5">
      
    <div className="flex justify-center mb-12">
      <h2 className="text-4xl font-bold text-center w-full px-6 py-6 border-2 border-gray-400 inline-block">
        CONTACT
      </h2>
    </div>

      {/* Subtitle */}
      <div className="text-center mb-16">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Feel <span className="text-black font-black">free</span> to contact me!
        </h3>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          I would love to hear about your project and how I could help. Please fill in the form, 
          or get in touch using my contact information.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Contact Info - Left Side */}
          <div className="space-y-8">
            {/* Talk to me */}
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-6 text-center lg:text-left">
                Talk to me
              </h4>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="text-gray-600" size={24} />
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-1">Email</h5>
                  <p className="text-sm text-gray-600 mb-3">olenaholub.dev@gmail.com</p>
                  <a 
                    href="mailto:olenaholub.dev@gmail.com"
                    className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Write me →
                  </a>
                </div>

                {/* Location */}
                <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-gray-600" size={24} />
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-1">Location</h5>
                  <p className="text-sm text-gray-600 mb-3">Spain, Castellón</p>
                  <span className="text-sm text-gray-500">Remote available</span>
                </div>

                {/* Phone placeholder matching the image */}
                <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-gray-600" size={24} />
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-1">Messenger</h5>
                  <p className="text-sm text-gray-600 mb-3">Via email or LinkedIn</p>
                  <span className="text-sm text-gray-500">Message me →</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-6 text-center lg:text-left">
              Write me your project
            </h4>
            <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-800 tracking-wider">
            THANKS FOR PATIENCE!
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            I'll get back to you as soon as possible
          </p>
        </div>
      </div>
    </section>
  );
}