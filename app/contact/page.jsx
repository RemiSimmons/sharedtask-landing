'use client';

import { useState } from 'react';
import { Mail, User, MessageSquare, Send, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError('Something went wrong. Please try emailing us directly at support@sharedtask.ai');
      }
    } catch (err) {
      setError('Something went wrong. Please try emailing us directly at support@sharedtask.ai');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <header className="py-6 px-6 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center">
          <Link href="/" className="flex items-center text-gray-600 hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-gray-900">Get in Touch</h1>
            <p className="text-xl text-gray-600">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-white rounded-3xl shadow-xl p-12 text-center animate-fade-in">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Message Sent!</h2>
              <p className="text-xl text-gray-600 mb-8">
                Thanks for reaching out. We'll get back to you at {formData.email} within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-primary hover:underline font-semibold"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold text-gray-900 mb-2">
                    <User className="w-5 h-5 inline mr-2 text-primary" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-primary focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-gray-900 mb-2">
                    <Mail className="w-5 h-5 inline mr-2 text-primary" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-primary focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-lg font-semibold text-gray-900 mb-2">
                    <MessageSquare className="w-5 h-5 inline mr-2 text-primary" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-primary focus:outline-none transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-lg font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4 text-red-700">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white px-8 py-5 rounded-full text-xl font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Direct Contact */}
              <div className="mt-8 pt-8 border-t-2 border-gray-100 text-center">
                <p className="text-gray-600 mb-2">Prefer email?</p>
                <a 
                  href="mailto:support@sharedtask.ai" 
                  className="text-primary hover:underline font-semibold text-lg"
                >
                  support@sharedtask.ai
                </a>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}


