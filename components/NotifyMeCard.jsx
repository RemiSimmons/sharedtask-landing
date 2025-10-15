'use client';

import { useState } from 'react';
import { Bell, CheckCircle } from 'lucide-react';

export default function NotifyMeCard() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setEmail('');
      } else {
        const data = await response.json();
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-8 text-center animate-fade-in max-w-xl mx-auto">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
        <h3 className="text-2xl font-bold mb-2 text-gray-900">You're on the list!</h3>
        <p className="text-lg text-gray-600">
          We'll notify you as soon as Pro launches.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl p-8 max-w-xl mx-auto border-2 border-primary/20">
      <div className="text-center mb-6">
        <Bell className="w-8 h-8 text-primary mx-auto mb-3" />
        <h3 className="text-2xl font-bold mb-2 text-gray-900">
          Be the first to know when Pro launches
        </h3>
        <p className="text-base text-gray-600">
          Get exclusive early access and special launch pricing
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-5 py-3 text-base border-2 border-gray-300 rounded-full focus:border-primary focus:outline-none transition-colors"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary text-white px-6 py-3 rounded-full text-base font-semibold hover:scale-105 hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {isSubmitting ? 'Notifying...' : 'Notify Me'}
        </button>
      </form>

      {error && (
        <p className="text-red-600 text-center mt-3 text-sm">{error}</p>
      )}
    </div>
  );
}

