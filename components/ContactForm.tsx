'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      Swal.fire({
        icon: 'error',
        title: 'Missing Fields',
        text: 'All fields are required.',
      });
      return;
    }

    if (!validateEmail(form.email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
      });
      return;
    }

    try {
      setStatus('Sending...');

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent',
          text: 'Thanks! I will get back to you shortly.',
        });
        setForm({ name: '', email: '', message: '' });
        setStatus('');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong. Please try again later.',
        });
        setStatus('');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Unexpected Error',
        text: 'Please try again later.',
      });
      setStatus('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <textarea
        name="message"
        placeholder="Your Message"
        rows={3}
        value={form.message}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg transition duration-200"
        >
          Send Message
        </button>
      </div>

      {status && (
        <p className="text-sm text-gray-600 mt-2 text-right italic">{status}</p>
      )}
    </form>
  );
}
