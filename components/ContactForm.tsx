'use client';
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const valideteEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'All fields are required.',
      });
      return;
    }

    if (!valideteEmail(form.email)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
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
          title: 'Success',
          text: 'Your message has been sent successfully!',
        });
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
            text: 'There was an error sending your message. Please try again later.',
        });
      setStatus('Failed to send message.');
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'An unexpected error occurred. Please try again later.',
    });
    setStatus('An unexpected error occurred.');
  }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        value={form.message}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
      <button type="submit" className="bg-yellow-400 text-white px-4 py-2 rounded">
        Send
      </button>
      <p className="text-sm text-green-600">{status}</p>
    </form>
  );
}
