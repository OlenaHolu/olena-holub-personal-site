'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';
import useTranslation from 'next-translate/useTranslation';

export default function ContactForm() {
  const { t } = useTranslation('common');
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
        title: t('contact.errors.missingTitle'),
        text: t('contact.errors.missingText'),
      });
      return;
    }

    if (!validateEmail(form.email)) {
      Swal.fire({
        icon: 'error',
        title: t('contact.errors.invalidEmailTitle'),
        text: t('contact.errors.invalidEmailText'),
      });
      return;
    }

    try {
      setStatus(t('contact.status.sending'));

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: t('contact.success.title'),
          text: t('contact.success.text'),
        });
        setForm({ name: '', email: '', message: '' });
        setStatus('');
      } else {
        Swal.fire({
          icon: 'error',
          title: t('contact.errors.generalTitle'),
          text: t('contact.errors.generalText'),
        });
        setStatus('');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: t('contact.errors.unexpectedTitle'),
        text: t('contact.errors.unexpectedText'),
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
          placeholder={t('contact.form.name')}
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="email"
          name="email"
          placeholder={t('contact.form.email')}
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <textarea
        name="message"
        placeholder={t('contact.form.message')}
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
          {t('contact.form.send')}
        </button>
      </div>

      {status && (
        <p className="text-sm text-gray-600 mt-2 text-right italic">{status}</p>
      )}
    </form>
  );
}
