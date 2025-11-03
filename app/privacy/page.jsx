import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy - How SharedTask Protects Your Data',
  description: 'SharedTask respects your privacy. Learn how we collect, use, and protect your data. No invasive tracking, no selling personal information. Simple, transparent privacy practices.',
  alternates: {
    canonical: 'https://sharedtask.ai/privacy',
  },
  openGraph: {
    title: 'Privacy Policy - SharedTask',
    description: 'Learn how SharedTask protects your data with transparent privacy practices.',
    url: 'https://sharedtask.ai/privacy',
    siteName: 'SharedTask',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-6 px-6 bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center">
          <Link href="/" className="flex items-center text-gray-600 hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-6">
        <article className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Privacy Policy</h1>
          <p className="text-gray-600 italic mb-12">Last updated: October 2025</p>

          <div className="text-xl leading-relaxed text-gray-700 space-y-8">
            <p>
              Your privacy matters to us. SharedTask.ai is designed to make planning easy — not to collect or sell your information.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Basic usage data:</strong> We store only what&apos;s necessary to run your projects 
                  (lists, tasks, and participant actions).
                </li>
                <li>
                  <strong>Optional contact info:</strong> If you subscribe or join our mailing list, 
                  we collect your name and email address.
                </li>
                <li>
                  <strong>No personal tracking:</strong> We do not use invasive cookies or sell any personal information.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Information</h2>
              <p>We use limited data to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Operate and improve the SharedTask platform.</li>
                <li>Communicate essential updates (like feature improvements or trial reminders).</li>
                <li>Provide technical support when you contact us.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
              <p>
                All data is transmitted using secure HTTPS encryption. Access to internal systems is 
                limited to authorized team members only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Services</h2>
              <p>
                We may use trusted third-party providers (such as analytics tools or email systems) to support operations. 
                These partners are required to keep your data secure and confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Choices</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You can delete your projects at any time.</li>
                <li>You can unsubscribe from emails instantly through any message we send.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
              <p>
                If you have questions about privacy or data handling, email{' '}
                <a href="mailto:support@sharedtask.ai" className="text-primary hover:underline font-semibold">
                  support@sharedtask.ai
                </a>
                .
              </p>
            </section>

            <div className="mt-12 pt-8 border-t-2 border-gray-200">
              <p className="text-lg">
                SharedTask.ai is committed to transparency and respecting your right to a simple, private experience.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}


