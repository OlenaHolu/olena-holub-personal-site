import { Mail, MapPin } from 'lucide-react';
import ContactForm from '../ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Contact</h2>
        <p className="text-center text-gray-600 mb-8">
          Feel free to get in touch! I'm currently open to new opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Formulario */}
          <ContactForm />

          {/* Info de contacto */}
          <div className="space-y-6 text-sm">
            <div className="flex items-center space-x-4">
              <Mail className="text-yellow-500" />
              <span>olenaholub.dev@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-yellow-500" />
              <span>Spain / Castellón</span>
            </div>
            <p className="mt-8 text-gray-500">
              I usually respond within 24 hours. You can also reach me via LinkedIn or GitHub (see icons).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
