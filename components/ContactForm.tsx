'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send message.');
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
      <p className="text-sm">{status}</p>
    </form>
  );
}
