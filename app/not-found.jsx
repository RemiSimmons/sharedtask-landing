import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: '404 - Page Not Found | SharedTask.ai',
  description: 'The page you are looking for does not exist.',
};

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/logo.png" 
            alt="SharedTask logo" 
            className="h-24 mx-auto"
          />
        </div>

        {/* 404 Message */}
        <div className="bg-white rounded-3xl shadow-xl p-12">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for seems to have wandered off. 
            Maybe it's organizing an event somewhere? 🤔
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-200 flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Go to Homepage
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-primary hover:text-primary transition-all duration-200 flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t-2 border-gray-100">
            <p className="text-gray-600 mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about" className="text-primary hover:underline font-semibold">
                About
              </Link>
              <Link href="/contact" className="text-primary hover:underline font-semibold">
                Contact
              </Link>
              <Link href="/#pricing" className="text-primary hover:underline font-semibold">
                Pricing
              </Link>
              <Link href="/#faq" className="text-primary hover:underline font-semibold">
                FAQ
              </Link>
              <a href="https://app.sharedtask.ai/auth/signup" className="text-primary hover:underline font-semibold">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

